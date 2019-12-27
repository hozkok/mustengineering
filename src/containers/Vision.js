import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlockQuote from 'components/Quote'

export default () => {
  const quote = {
    footer: 'Jan L.A. van de Snepsheut',
    content: `In theory, there is no difference between theory and practice.
              But in practice, there is.`
  }
  return (
    <div className="jumbotron main-content-container">
      <h1 className="main-title">
        Our Vision
      </h1>
      <Row className="main-content justify-content-lg-center">
        <Col lg={8}>
          <p className="lead text-center">
            To establish a reliable bridge between tomorrow's dreams and
            today's practice.
          </p>
          <p className="lead text-center">
            The practice evolved from the dust swallowed in yesterday's
            worksite, will be the mortar of that bridge to make your dreams
            reality.
          </p>
        </Col>
        <Col lg={8}>
          <BlockQuote footer={quote.footer} content={quote.content} />
        </Col>
      </Row>
    </div>
  )
}
