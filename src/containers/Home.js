import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default () => {
  return (
    <div className="jumbotron main-content-container">
      <h1 className="main-title">
        Must Engineering & Consultancy
      </h1>
      <Row className="main-content justify-content-lg-center">
        <Col lg={8} className="main-content">
          <p className="lead">
            At Must, we believed in a company that resolves the arduous
            engineering problems in the most efortless and effective way
            without any prejudgements of common industry experience.  Ensuring
            the free and open-minded working environment for the professionals
            in the Must Team is the key asset that brings forth the success in
            the toughest engineering challenges.
          </p>
        </Col>
      </Row>
    </div>
  )
}
