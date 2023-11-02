import React from 'react'
import { InfoGroupDataOne, InfoGroupDataTwo } from "../DummyData";
import { Card } from 'react-bootstrap';

const Infos = () => {
  return (
    <div className='container ' style={{ marginTop:"5%"}}>
        <div className='row' style={{display:'block'}}>
            <div className='col xs-12' id='concept'>
            <h1 className="w-100">A full ecosystem of tools  within a single<br /> design environment.</h1>
          <p className='mt-5'>Go from diagrams, wireframes and prototypes without switching apps or updating across platforms.</p>
            </div>
            <div className='col xs-12' id='concept' style={{width:"100%"}}>
                <img src="img/services.jpg" style={{width:"70%"}} id='photo-phone' alt="" />
            </div>
        </div>
        <div className='conatiner' id='phone' style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
        <div className='row'>
            <div className='col xs-12'>
                {
                    InfoGroupDataOne.map((item) => {
                        return(
                            <Card style={{ width: '18rem', border:"none", textAlign:"start" }}>
                            <Card.Img variant="top" src={item.image} className="w-25"/>
                            <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Text style={{fontSize:"12px"}}>
                              {item.desc}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        )
                    })
                }
            </div>
        </div>
        <div className='row'>
            <div className='col xs-12'>
                {
                    InfoGroupDataOne.map((item) => {
                        return(
                            <Card style={{ width: '18rem', border:"none", textAlign:"start" }}>
                            <Card.Img variant="top" src={item.image} className="w-25"/>
                            <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Text style={{fontSize:"12px"}}>
                              {item.desc}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        )
                    })
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Infos