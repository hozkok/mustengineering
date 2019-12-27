import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlockQuote from 'components/Quote'
import ListGroup from 'react-bootstrap/ListGroup'

export default () => {
  const quote = {
    footer: 'Steve Jobs',
    content: `Design is not how it looks like and feels like. Design is how it
              works.`
  }
  const missions = [
    `Adding the value to the engineering practice that perfectly matches to the needs of the client.`,
    `Adopting the latest technological potentials to deliver fastest and most reliable engineering services.`,
    `Supplying a melting pot for the client that combines the academic background and construction experience.`,
    `Respecting the rapid changes of the actual project requirements.`,
    `Engineering the value of the Earth's resources to deliver a sustainable future for our children.`,
    `Providing easy and adaptive engineering solutions for the most ambitious architectural designs.`,
  ]
  return (
    <div className="jumbotron main-content-container">
      <h1 className="main-title">
        Our Mission
      </h1>
      <Row className="main-content justify-content-lg-center">
        <Col lg={6}>
          <ListGroup variant="flush" style={{textAlign: 'left'}}>
            {missions.map((mission, i) => (
              <ListGroup.Item key={i} style={{backgroundColor: 'inherit'}}>
                <span style={{marginRight: '5px', color: 'blue'}}>
                  &gt;
                </span>
                {mission}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={8} className="main-content">
          <BlockQuote footer={quote.footer} content={quote.content} />
        </Col>
      </Row>
    </div>
  )
}
