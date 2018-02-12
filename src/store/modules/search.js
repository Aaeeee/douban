import { searchBooks, searchMovies, searchMusics } from '../../lib/api'

const state = {
  queryRes_movie: [],
  queryRes_book: [],
  queryRes_music: []
}

const mutations = {
  query (state, payload) {
    switch (payload.tag) {
      case 'movie':
        state.queryRes_movie = payload.res
        break
      case 'book':
        state.queryRes_book = payload.res
        break
      case 'music':
        state.queryRes_music = payload.res
        break
      default:
        console.log('[Error]:Api is error!')
    }
  }
}

const actions = {
  query ({ commit }, payload) {
    searchBooks(payload.queryStr, 4)
      .then((res) => {
        commit({
          type: 'query',
          tag: 'book',
          res: res.data.books
        })
      })
    searchMovies(payload.queryStr, 3)
      .then((res) => {
        commit({
          type: 'query',
          tag: 'movie',
          res: res.data.subjects
        })
      })
    searchMusics(payload.queryStr, 2)
      .then((res) => {
        commit({
          type: 'query',
          tag: 'music',
          res: res.data.musics
        })
      })
  }
}

export default {
  state,
  mutations,
  actions
}
