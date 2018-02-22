// 接口地址 =============================================================================================================

// 根据code获取用户信息
export const QUERY_USERINFO = '/v1/miniprogram/query/userinfo/by/code'

// 根据ID获取店铺信息
export const QUERY_STORE_BY_ID = '/v1/league/{leagueId}'

// 获取当前组织所在大组织的所有门店
export const QUERY_LEAGUES_BY_ROOT = '/v1/all/by/root/leagues/{id}'

// 获取当前组织下房源列表
export const QUERY_LEAGUE_VTOURS = '/v1/league/{leagueId}/vtours'

// 获取当前组织下成员列表
export const QUERY_LEAGUE_PARTERS = '/v1/league/{leagueId}/parters'
// 根据ID获取用户信息
export const QUERY_USERINFO_BY_ID = '/v1/author/{uid}'
// 根据ID获取用户房源列表
export const QUERY_HOUSE_LIST_BY_ID = '/app/use/v1/author/{uid}/vtours'
// 获取组织内推荐房源
export const QUERY_LEAGUE_RECOMMEND_HOUSE = '/v1/vtours/recome/league/{leagueId}'
// 用户行为统计
export const USER_METRICS = '/v1/store/send/metrics'
// 访问足记
export const VISIT_FOOT = '/v1/store/user/vtour/metrics?appid={appid}&openid={openid}'
// 联系记录
export const CONTACT_RECORD = '/v1/store/user/contact/metrics?appid={appid}&openid={openid}'
// 收藏记录
export const COLLECTION_RECORD = '/v1/store/retrieve/myFav?appid={appid}&openid={openid}&lid={leagueId}&index={index}&size={size}'
// 广告列表
export const QUERY_LEAGUE_ADS = '/v1/author/{id}/tvadss'
// 房源筛选条件
export const QUERY_FILTER_BY_CITY = '/housing/vtour/old/house/filter/{cityId}'
// 获取城市-区域-商圈字典信息列表
export const QUERY_IDENTITY_SERVICE_AREA_LIST = '/city/auth/broker/identityServiceArea/dic?num={num}'

// 委托
export const USER_ENTRUST_HOUSE = '/v1/author/{authorId}/entrust/{entrustId}'

// 常量    =============================================================================================================

// 新房
export const NEW_HOUSE = 1
export const SECOND_HAND_HOUSE = 2
export const RENT_HOUSE = 3
