/**
 * 加载数据的方法
 */
import axios from 'axios'

/** activities */
export const loadMore = (skip, count) => axios.get(`/api/event/list?loc=108288&start=${skip}&count=${count}`)
export const getEvent = (id) => axios.get(`/api/event/${id}`)
/** book */
export const getBooks = (q, num) => axios.get(`/api/book/search?q=${q}&count=${num}`)

/** movie */
export const getHotMovies = (num) => axios.get(`/api/movie/in_theaters?count=${num}`)
export const getNewMovies = (num) => axios.get(`/api/movie/coming_soon?count=${num}`)
export const getTopMovies = (num) => axios.get(`/api/movie/top250?count=${num}`)

/** search */
export const searchMovies = (str, count = 3) => axios.get(`/api/movie/search?q=${str}&count=${count}`)
export const searchBooks = (str, count = 3) => axios.get(`/api/book/search?q=${str}&count=${count}`)
export const searchMusics = (str, count = 3) => axios.get(`/api/music/search?q=${str}&count=${count}`)

/** subject */
export const getMovieSubjects = (classify, id) => axios.get(`/api/${classify}/subject/${id}`)
export const getBookSubjects = (classify, id) => axios.get(`/api/${classify}/${id}`)
