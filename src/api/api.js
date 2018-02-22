import {API_HOST, APPID} from '../common/config'
import * as Constant from '../common/constant'
import * as http from '../utils/httpClient'

/***
 * 组装接口: portal
 * @param apistr 接口地址
 * @returns {*}
 */
function api (apistr) {
  return API_HOST + apistr
}

// 接口调用 =============================================================================================================

/***
 * 获取用户信息
 * @returns {*}
 */
export function getUserInfo(code, encryptedData, iv) {
  let url = api(`${Constant.QUERY_USERINFO}`)
  let data = {
    code: code,
    appid: APPID,
    encryptedData: encryptedData,
    iv: iv
  }
  return http.post(url, data)
}
