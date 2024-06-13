import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,setData]= useState([])
    const fetchData =()=>{
        axios.post("http://localhost:8080/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">BUS NO.</th>
                                            <th scope="col">BUS NAME</th>
                                            <th scope="col">ROUTE</th>
                                            <th scope="col">DRIVER NAME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{value.busno}</th>
                                                <td>{value.bname}</td>
                                                <td>{value.route}</td>
                                                <td>{value.dname}</td>
                                            </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll