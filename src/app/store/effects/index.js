import {deleteData, getData} from '../../axios/getData';

class Effects{
  constructor(MainAction){
    this.mainAction = MainAction
  }
  loadData=()=>(dispatch)=>{
   dispatch(this.mainAction.statusLoading(true))
    getData().then((data)=>{
      if(data){
        dispatch(this.mainAction.setData(data.data))
        dispatch(this.mainAction.statusLoading(false))
      }
    }).catch((err)=>{
      dispatch(this.mainAction.setError(err))
    })
  }
  deleteData=(id)=>(dispatch)=>{
    deleteData(id).then((data)=>{
        dispatch(this.mainAction.deleteData(id))
        dispatch(this.mainAction.setData(data.data))
        dispatch(this.mainAction.statusLoading(false))
    }).catch((err)=>{
      dispatch(this.mainAction.setError(err))
    })
  }

}
export default Effects