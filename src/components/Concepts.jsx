import React from 'react'
import "./Style.css"

const Concepts = () => {
  return (
    <div className='container top' id='concepts'>
        <div className='row'>
            <div className='col xs-12' id='concept'>
            <h1>
                An all-in-one online design platform <br/>that's smart, simple and fast.
                </h1>
            </div>
            <div className=' xs-12 mt-3' direction="horizontal" style={{display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"bold"}}>
            <div className="p-2" id='stack' style={{border:"2px solid black", width:"15%", borderRadius:"10px 0 0 10px", backgroundColor:"black", color:"white"}}>Design</div>
      <div className="p-2" id='stack' style={{border:"2px solid black", width:"15%"}}>Plan</div>
      <div className="p-2" id='stack' style={{border:"2px solid black", width:"15%"}}>Prototype</div>
      <div className='p-2' id='stack' style={{border:"2px solid black", width:"15%", borderRadius:"0 10px 10px 0"}}>Collaborate</div>
            </div>
        </div>
        <div className='row mt-5' id='phone'>
            <div className='col xs-12 md-6' id='visuale'>
            <h2>Visualize Your Concept</h2>
                <p >
                Envision, test and validate your ideas with quick wireframes and detailed mockups.<br/><br/>
Explore and iterate as your team builds momentum - moving seamlessly from lo-fi to hi-fi as your project evolves.
                </p>
            </div>
            <div className='col xs-12 md-6'>
            <img src='/img/ipad.png' className='w-75 ms-5'/>
            </div>
        </div>
    </div>
  )
}

export default Concepts