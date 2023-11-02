import React from 'react'
import { Button } from 'react-bootstrap'

const NewsLetter = () => {
  return (
    <div className='container mt-5' id='concept' >
        <div className='row' style={{display:"flex", flexDirection:"column"}}>
            <div className='col xs-12 mt-3'>
            <h2>Streamline your design workflow and unify your team.</h2>
            </div>
            <div className='col xs-12 mt-3'>
            <p>From conception to presentation with one online solution.</p>
            </div>
            <div className='col xs-12 mt-3'>
            <Button variant="primary">Create a FREE Account</Button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter