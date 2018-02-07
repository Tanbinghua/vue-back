export default {
  setBaseInfo (state, user) {
    state.accesstoken = user.accesstoken
    state.loginname = user.name
  },
  setUserInfo (state, info) {
    let JSONinfo = JSON.parse(info.info)
    state.user_info.avatar_url = JSONinfo.avatar_url
    state.user_info.create_at = JSONinfo.create_at
    state.user_info.score = JSONinfo.score
  }
}
