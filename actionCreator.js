import * as actionTypes from './constants'
import { 
    getResultSongsListRequest,
    getHotListRequest
} from '@/api/request'

export const changeHotList = (data) => ({
    type: actionTypes.CHANGE_HOTLIST,
    data
})

export const changeResultSong = (data) => ({
    type: actionTypes.CHANGE_SONGSLIST,
    data
}) 

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_LOADING,
    data
})

export const getResultSongsList = (query) => {
    return dispatch => {
        getResultSongsListRequest(query)
            .then(data => {
                // if(!data) return
                console.log(data)
                let res = data.data.result.songs
                console.log(res)
                dispatch(changeResultSong(res))
                dispatch(changeEnterLoading(false))
            })
            .catch(() => {
                console.log('搜索结果出现错误')
            })
    }
}
export const getHotList = () => {
    return dispatch => {
        getHotListRequest()
            .then(data => {
                let list = data.data.result.hots
                dispatch(changeHotList(list)) 
            })
    }
}