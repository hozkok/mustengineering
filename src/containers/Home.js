import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

export default () => {
  return (
    <div className="jumbotron main-content-container">
      <h2 className="main-title home-title">
        Must Engineering<br/>&<br/> Consultancy
      </h2>
      <Container className="home-main-container">
        <Row className="home-logo-container justify-content-center">
          <Col lg={6} md={6} sm={6}>
            <Image src='/img/mustengineering-logo.jpeg' />
          </Col>
        </Row>
        <Row className="main-content justify-content-lg-center">
          <Col lg={8} className="main-content">
            <p className="lead">
              At Must, we believed in a company that resolves the arduous
              engineering problems in the most efortless and effective way
              without any prejudgements of common industry experience.
              Ensuring the free and open-minded working environment for the
              professionals in the Must Team is the key asset that brings forth
              the success in the toughest engineering challenges.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
