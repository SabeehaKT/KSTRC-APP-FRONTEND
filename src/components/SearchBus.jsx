import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchBus = () => {
    const [data, setData] = useState(
        {
            "busno": ""
        }
    )

    const [result, setResult] = useState([])

    const deleteBus = (id)=>{
        let input =  { "_id": id}
        axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status == "success") {
                alert("Successfully Deleted")
            } else {
                alert("error in deletion")
            }
        }).catch().finally()
    }
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Bus No.</label>
                                <input type="text" className="form-control" name="busno" value={data.busno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue}>Search</button>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">BUS NO</th>
                                                <th scope="col">BUS NAME</th>
                                                <th scope="col">ROUTE</th>
                                                <th scope="col">DRIVER NAME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map(
                                                (value,index)=>{
                                                    return <tr>
                                                    <th scope="row">{value.busno}</th>
                                                    <td>{value.bname}</td>
                                                    <td>{value.route}</td>
                                                    <td>{value.dname}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={()=>{deleteBus(value._id)}}>Delete</button>
                                                    </td>
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
        </div>
    )
}

export default SearchBus