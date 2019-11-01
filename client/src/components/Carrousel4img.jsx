import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import NewYork from "../assets/img/cities/newyork.jpg"
import Barcelona from "../assets/img/cities/barcelona.jpg"
import Caracas from "../assets/img/cities/caracas.jpg"
import Bogota from "../assets/img/cities/bogota.jpg"
import SaoPaulo from "../assets/img/cities/saopaulo.jpg"
import Cartagena from "../assets/img/cities/cartagena.jpg"
import Santiago from "../assets/img/cities/santiago.jpg"
import Panama from "../assets/img/cities/panama.jpg"
import Bariloche from "../assets/img/cities/bariloche.jpg"
import Miami from "../assets/img/cities/miami.jpg"
import Londres from "../assets/img/cities/londres.jpg"
import Berlin from "../assets/img/cities/berlin.jpg"

const Carrousel4img = () => {
  return (
    <div>
      <h4>Popular Mytineraries</h4>

      <Carousel id="carousel">
        <Carousel.Item>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src={NewYork} />
                <div className="img-cities">
                  <Card.Title >New York</Card.Title>
                </div >
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Img variant="top" src={Cartagena} />
                <div className="img-cities" >
                  <Card.Title>Cartagena</Card.Title>
                </div >
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src={Caracas} />
                <div className="img-cities">
                  <Card.Title>Caracas</Card.Title>
                </div >
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Img variant="top" src={Bogota} />
                <div className="img-cities">
                  <Card.Title>Bogota</Card.Title>
                </div >
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src={Barcelona} />
                <div className="img-cities">
                  <Card.Title>Barcelona</Card.Title>
                </div >
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Img variant="top" src={Berlin} />
                <div className="img-cities">
                  <Card.Title>Berlin</Card.Title>
                </div >
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src={Londres} />
                <div className="img-cities">
                  <Card.Title>Londres</Card.Title>
                </div >
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Img variant="top" src={Santiago} />
                <div className="img-cities">
                  <Card.Title>Santiago</Card.Title>
                </div >
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src={Bariloche} />
                <div className="img-cities">
                  <Card.Title>Bariloche</Card.Title>
                </div >
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Img variant="top" src={SaoPaulo} />
                <div className="img-cities">
                  <Card.Title>SaoPaulo</Card.Title>
                </div >
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src={Miami} />
                <div className="img-cities">
                  <Card.Title>Miami</Card.Title>
                </div >
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Img variant="top" src={Panama} />
                <div className="img-cities">
                  <Card.Title>Panama</Card.Title>
                </div >
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carrousel4img