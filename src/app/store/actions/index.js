/*
 *  action types
 */

export const STATUS_LOADING ="STATUS_LOADING"
export const SET_DATA = "GET_DATA"
export const DELETE_ONE = "DELETE_ONE"

/*
 * action creators
 */

export default class mainActions {

  statusLoading(payload) {
    return { type: STATUS_LOADING, payload };
  }

  setData(payload){
    return {type: SET_DATA, payload}
  }

  deleteOne(payload){
    return {type:DELETE_ONE, payload}
  }

}
