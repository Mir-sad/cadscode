import React from 'react'
import "./Style.css"
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div className='container mt-5' >
        <div className='row' id='phone' >
            <div className='col xs-12 md-6' style={{marginTop:'5%'}}>
            <h1>Shape Your Ideas.
            Prove Your Concept.</h1>
            <p>
            A streamlined web app that helps you create and collaborate in real-time on wireframes, mockups, diagrams and prototypes. 
            </p>
            <Button variant="primary" className="">Create a FREE account</Button><br/>
            <span style={{fontSize:"12px"}}>No credit card required</span>
            </div>
        <div className='col xs-12 sm-12 md-6' >
                    <img src="img/cguy.jpg" alt="" className='w-100'/>                
            </div>
        </div>
        <div className='row mt-5 ' id='phone' style={{display:'flex', justifyContent:'space-around', marginRight:"6%"}}>
            <div className='col xs-12 md-3 mt-5' >
            <p>Used by 1,500,000 people worldwide</p>
            </div>
            <div className='col xs-12 md-9 d-flex' id='photos'>
            <img src="img/services.jpg"  className=" w-25 ms-5"/>
            <img src="img/services.jpg"  className=" w-25 ms-2"/>
            <img src="img/services.jpg"  className=" w-25 ms-2"/>
            <img src="img/services.jpg"  className=" w-25 ms-2"/>
            </div>
        </div>
    </div>
  )
}

export default Home