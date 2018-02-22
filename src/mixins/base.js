import wepy from 'wepy'
import interfaces from '../utils/login'
/***
 * 注意：
 * 1. 默认式混合：对于组件data数据，components组件，events事件以及其它自定义方法采用默认式混合，即如果组件未声明该数据，组件，事件，自定义方法等，那么将混合对象中的选项将注入组件这中。对于组件已声明的选项将不受影响。
 * 2. 兼容式混合：对于组件methods响应事件，以及小程序页面事件将采用兼容式混合，即先响应组件本身响应事件，然后再响应混合对象中响应事件。
 */
export default class BaseMixin extends wepy.mixin {
  data = {
    shareTitle: '我的小程序',
    sharePath: '/pages/index',
    shareImage: ''
  }

  methods = {
    tap () {
      console.log('mixin method tap')
    }
  }

  computed = {
  }

  watch = {
  }

  onShow() {
  }

  async onLoad() {
    // 设置用户信息
    this.userInfo = await interfaces.login()
    // 在函数运行周期之外的函数里去修改数据需要手动调用$apply方法。
    this.$apply()
  }

  // 获取用户信息
  getUserInfo () {
    return interfaces.login()
  }

  // 获取地理位置信息
  async getLocation () {
    try {
      let location = await wepy.getLocation({type: 'wgs84'})
      // 将地理位置信息存储在本地
      await wepy.setStorage({
        key: 'location',
        data: location
      })
      console.log(location)
      return location
    }catch (e) {
      console.log(e)
      let localLocation = wepy.getStorageSync('location')
      return localLocation ? localLocation : null
    }
  }
}
