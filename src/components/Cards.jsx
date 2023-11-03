import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { CardsData } from '../DummyData'

const Cards = () => {
  return (
    <Container className='mt-5' id='cards' style={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", alignItems:"center"}}>
        <div className='row'>
            <div className='col xs-12' style={{marginRight:'1%'}}>
            <h1>a flexible design solution that adapts to your workflow. </h1>
            </div>
        </div>
        <Row className='mt-5' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            {CardsData.map((data) => {
                return (
                 <Card style={{ width: '20rem', marginLeft:"20px", border:"none", justifyContent:"center", textAlign:"center", alignItems:"center" }}>
      <Card.Img variant="top" src={data.image}/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text style={{fontSize:"14px"}}>
          {data.desc}
        </Card.Text>
      </Card.Body>
    </Card>
            )})
       
}
        </Row>
    </Container>
  )
}

export default Cards