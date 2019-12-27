import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Loading = () => (
  <div className="jumbotron main-content-container">
    <Row className="main-content justify-content-lg-center">
      <Col lg={8} className="main-content">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Col>
    </Row>
  </div>
)

export default Loading
