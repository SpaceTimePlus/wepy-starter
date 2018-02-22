import * as api from '../api/api'

/***
 * 获取用户信息
 */
export const getUserInfo = async (code, encryptedData, iv) => {
  // 异步获取远程数据
  let result = await api.getUserInfo(code, encryptedData, iv)

  if(result && result.status == 1){
    // 获取用户信息成功
    let userinfo = JSON.parse(result.data)

    return userinfo
  }
}
