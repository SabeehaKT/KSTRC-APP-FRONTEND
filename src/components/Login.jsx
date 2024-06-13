import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [data,setData]=useState(
        {
            "pass":"",
            "email":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/login",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/add")
                }else{
                    alert("error!")
                }
            }
        ).catch().finally()
    }
    let navigate = useNavigate()
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">USERNAME</label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="pass" id="" className="form-control" value={data.pass} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Login</button>
                        </div>
                    </div>
                    <br/>
                    <p>TO REGISTER,<Link to="/register">CLICK HERE</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login