/**
 * 生成有序的 ID
 *
 * Created by leon on 2016/12/04.
 */
import Hashids from 'hashids'

const factor = 1000
const START_DOT = 1484194326700000

const REG = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/

let hashids = new Hashids()
/*
 * ID 生成
 *
 * 以秒毫为单位, 13 位 + 1000以内的随机数
 */
export function createId () {
  return (new Date()) * factor + Math.floor(Math.random() * factor * factor) - START_DOT
}

/*
 * ID 编码
 *
 * 把数字 ID 编码为字符类型
 */
export function encodeId (id) {
  return hashids.encode(id)
}

/*
 * ID 解码
 *
 * 把字符串解码为数字 ID
 */
export function decodeId (code) {
  return hashids.decode(code)
}

/*
 * IP 转整数
 */
export function ipToInt (ip) {
  let result = REG.exec(ip)
  if (!result) return -1
  return (parseInt(result[ 1 ]) << 24 | parseInt(result[ 2 ]) << 16 | parseInt(result[ 3 ]) << 8 | parseInt(result[ 4 ])) >>> 0
}
