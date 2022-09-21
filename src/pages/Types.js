import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Addtask from "../Components/Addtask"
import TypeList from "../Components/TypeList"
import AddType from "../Components/AddType"
import { Link } from "react-router-dom"




const Types = () => {
    const [types, setTypes] = useState([])
    useEffect(async () => {
       await  axios.get('http://localhost:8000/api/types').then(res => {
       
            setTypes(res.data)

        }).then(() => {

        }).catch(err => console.log(err));
    }, [types])


const addType =()=>{

}
    return (
        <div>
            <div style={{textAlign:'center', marginTop:"50px"}}> </div>
             
            <div className='container'>
          
                <div className='sideNav' ><img src="./images/dodor.jpg" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                    <p style={{ textAlign: "center" }}>Albus Dumbledore</p>

                    <div style={{ textAlign: 'center' }}>
                        <Link to="/">Tasks</Link>
                        <br />
                        <Link to="/types">Types</Link>
                    </div>
                    <div style={{marginTop:"100px"}}>    <p>Dumbledore To-Do List By Khoshow</p></div>
                </div>
                <div className='content'>

                    <AddType addType={addType} />
                    <br></br>
                    <TypeList types={types} />
                </div>

            </div>
        </div>
    )
}

export default Types