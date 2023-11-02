import React from 'react'
import { TestimonialsData } from '../DummyData'
import { Card } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <div className='container' style={{marginTop:"10%",display:'flex', flexDirection:"column", justifyContent:"center",alignItems:"center" ,textAlign:"center"}}>
        <div className='row'>
            <div className='col xs-12'>
            <h2>What our users think about CadsCode</h2>
            </div>
        </div>
        <div className='conatiner mt-4' id='phone'>
        <div className='row' >
            <div className='col xs-12' id='phone' style={{display:"flex"}}>
                {
                     TestimonialsData.map((data) => {
                        return(
                            <Card style={{ width: '18rem', marginLeft:"5%" }}>
          <Card.Body style={{display:"flex", alignItems:"center"}}>
          <Card.Img variant="top" src={data.image}  style={{width:"70px", height:"70px" ,objectFit:"cover", borderRadius:"50%", marginRight:"10px"}}/>
          <Card.Title>{data.name}</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text>
              {data.desc}
            </Card.Text>
          </Card.Body>
        </Card>
                        )
                    })
                }
            </div>
        </div>
        <div className='row'>
            <div className='col xs-12 mt-5' id='phone' style={{display:"flex"}}>
                {
                     TestimonialsData.map((data) => {
                        return(
                            <Card style={{ width: '18rem', marginLeft:"5%" }}>
          <Card.Body style={{display:"flex", alignItems:"center"}}>
          <Card.Img variant="top" src={data.image}  style={{width:"70px", height:"70px" ,objectFit:"cover", borderRadius:"50%", marginRight:"10px"}}/>
          <Card.Title>{data.name}</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text>
              {data.desc}
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

export default Testimonials