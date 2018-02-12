import { loadMore, getEvent } from '../../lib/api'

const state = {
  events: [],
  // temp: [],
  skip: 0 // 页数
  // eventItem: {}
}

const mutations = {
  loadMore (state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {
  loadMore ({ commit, state }) {
    loadMore(state.skip, 3)
      .then((res) => {
        commit({
          type: 'loadMore',
          res: res.data.events
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getSingleEvent ({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      getEvent(payload.id)
        .then((res) => {
          commit({
            type: 'getSingleEvent',
            res: res.data
          })
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
