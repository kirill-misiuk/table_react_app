const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const data = require('./data/data.json')
app.use(cors())
app.use(bodyParser.json());

app.listen(3002, () => console.log('App listening on port 3002!'));

app.get('/',(req,res)=>{
  if(data) {
    return res.status(200).json({status: res.statusCode, data})
  }
  else{
   return  res.status(404).json({status: res.statusCode, err:'Error with getting data!'})
  }
})
app.delete('/:id',(req,res)=>{
  if(data) {
    const newData = data.data.filter((job)=> job.id !== req.params.id)
    return res.status(200).json({status: res.statusCode, newData})
  }
  else{
    return  res.status(404).json({status: res.statusCode, err:'Error with getting data!'})
  }
})