import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


const Carrousel4img = (props) => {
  const image = [
    [{ "title": "New York", "src": "../assets/img/newyork.png" }, { "title": "Barcelona", "src": "../assets/img/barcelona.png" }, { "title": "Caracas", "src": "../assets/img/caracas.png" }, { "title": "Bogota", "src": "../assets/img/bogota.png" }],
    [{ "title": "Sao Paulo", "src": "../assets/img/saopaulo.png" }, { "title": "Cartagena", "src": "../assets/img/cartagena.png" }, { "title": "Santiago", "src": "../assets/img/santiago.png" }, { "title": "Panama", "src": "../assets/img/panama.png" }],
    [{ "title": "Bariloche", "src": "../assets/img/bariloche.png" }, { "title": "Miami", "src": "../assets/img/miami.png" }, { "title": "Londres", "src": "../assets/img/londres.png" }, { "title": "Berlin", "src": "../assets/img/berlin.png" }]
  ]

  return (
    <div>
      <h4>Popular Mytineraries</h4>
      <Carousel>

        <Carousel.Item>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src="holder.js/" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>        </Col>
            <Col>        <Card >
              <Card.Img variant="top" src="holder.js/" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card></Col>
          </Row>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src="holder.js/" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card></Col>
            <Col>
              <Card >
                <Card.Img variant="top" src="holder.js/" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carrousel4img