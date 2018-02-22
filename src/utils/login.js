import wepy from 'wepy'
import {getUserInfo} from '../action/action'

const interfaces = {
  async login() {
    // 获取本地缓存的用户信息
    let localUserInfo = wepy.getStorageSync('userinfo')
    if(localUserInfo){
      return localUserInfo
    }
    wepy.setStorageSync('_isLogin', false)
    wepy.setStorageSync('_isWebSocketOpen', false)

    // 获得登录数据
    let loginData = {}
    try {
      loginData = await wepy.login()
    } catch (e) {
      console.log('调用登录接口wepy.login出错')
      console.log(e.message)
    }

    // 获得微信提供的用户信息
    let userinfoRaw = {}
    try {
      if (loginData.code) {
        userinfoRaw = await wepy.getUserInfo()
        userinfoRaw.code = loginData.code

        console.log('userinfoRaw', userinfoRaw)
        console.log('userInfo', userinfoRaw.userInfo)

        wepy.setStorageSync('_isLogin', true)

      } else {
        console.log('登录时获取用户code失败！')
      }
    } catch (e) {
      // 二次重新登录(可设计一个登录按钮，以方便于用户随时进行二次重新登录)
      let status = await wepy.showModal({
        title: '提示',
        content: `登录一下嘛`,
        cancelText: '好的',
        cancelColor: '#3CC51F',
        confirmText: '不了',
        confirmColor: '#666666'
      })

      if (status.cancel) {  // 假如允许重新登录
        let res = await wepy.openSetting()
        if (res && res.authSetting['scope.userInfo']) {
          try {
            userinfoRaw = await wepy.getUserInfo()
            userinfoRaw.code = loginData.code
            wepy.setStorageSync('_isLogin', true)
          } catch (e) {
            return
          }
        } else {
          // await wepy.showToast({
          //   title: '没有授权'
          // })
          return
        }
      } else {
        // await wepy.showToast({
        //   title: '建议登录哦'
        // })
        return
      }
    }

    // 获取后台服务器提供的用户信息
    let userinfo = {}
    try {

      userinfo = await getUserInfo(userinfoRaw.code, userinfoRaw.encryptedData, userinfoRaw.iv)
      if (typeof userinfo === 'string') {
        userinfo = JSON.parse(userinfo.replace(/(^\s+)|(\s+$)/g, ''))
      }

      // 合并对象，获得用户全部信息
      // Object.assign(userinfo, userinfoRaw.userInfo)

      console.log('userinfo', userinfo)
    } catch (e) {
      console.log('请求获取服务端登录态失败')
      console.log(e.message)
      console.log(e.stack)
    }

    // 将用户信息保存在本地
    try {
      await wepy.setStorage({
        key: 'userinfo',
        data: userinfo
      })
    } catch (e) {
      console.log('客户端存储会话信息失败')
      console.log(e.message)
      console.log(e.stack)
    }

    return userinfo
  }
}

export default interfaces
