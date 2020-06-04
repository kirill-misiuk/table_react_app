import {
  STATUS_LOADING,
  SET_DATA,
  DELETE_ONE, SET_ERROR,
} from '../actions';

const initialState ={
statusLoading:true,
data:[],
error:null
}

export default (state= initialState,action)=>{
  switch (action.type){

    case STATUS_LOADING:{
      return {
        ...state,
        statusLoading: action.payload
      }
    }
    case SET_DATA:{
      return {
        ...state,
        data: action.payload
      }
    }
    case DELETE_ONE:{
      return {
        ...state,
        data: state.data.filter((job) => job._id !== action.payload),
      }
    }
    case SET_ERROR:{
      return {
        ...state,
        error: action.payload
      }
    }

    default:
      return state
  }
}
