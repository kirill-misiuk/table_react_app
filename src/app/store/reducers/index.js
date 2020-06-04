import {
  STATUS_LOADING,
  SET_DATA,
  DELETE_ONE
} from "../actions";

const initialState ={
statusLoading:true,
data:[],
}

export default (state= initialState,action)=>{
  switch (action.type){
    case SET_DATA:{
      return {
        ...state,
        data: action.payload
      }
    }
    case STATUS_LOADING:{
      return {
        ...state,
        statusLoading: action.payload
      }
    }
    case DELETE_ONE:{
      return {
        ...state,
        data: state.libraries.filter((job) => job._id !== action.payload  ),
      }
    }

    default:
      return state
  }
}