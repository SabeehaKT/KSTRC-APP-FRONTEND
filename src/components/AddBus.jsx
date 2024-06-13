import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddBus = () => {
    const [data,setData]=useState(
        {
            "bname":"",
            "route":"",
            "busno":"",
            "dname":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("Successfully added")
                }else{
                    alert("error!")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="ocl col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Bus Name</label>
                            <input type="text" className="form-control" name="bname" value={data.bname} onChange={inputHandler} />
                        </div>
                        <div className="ocl col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Route</label>
                            <input type="text" className="form-control" name="route" value={data.route} onChange={inputHandler}/>
                        </div>
                        <div className="ocl col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Bus No.</label>
                            <input type="text" className="form-control" name="busno" value={data.busno} onChange={inputHandler}/>
                        </div>
                        <div className="ocl col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Driver Name</label>
                            <input type="text" className="form-control" name="dname" value={data.dname} onChange={inputHandler} />
                        </div>
                        <div className="ocl col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBus