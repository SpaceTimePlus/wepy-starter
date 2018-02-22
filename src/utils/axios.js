import axios from 'axios'
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter'

// adapter 的初始化一定要在任何其它的 axios.create 之前执行
const adapter = wepyAxiosAdapter(axios)

export default axios.create({
  adapter: adapter      // 此属性为可以在小程序中使用 axios 的关键
})
