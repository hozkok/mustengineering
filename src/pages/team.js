import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const members = [
  {
    fullName: 'Mustafa Alptekin Kibar',
    role: 'Co-founder',
    biography: `After his graduation from Middle East Technical University at
    2002, Alptekin started his career as Structural Engineer. Having worked as
    the tender and proposal specialist at one of the pioneer construction
    company in Turkey, he went back to structural design works while also
    receiving his master degree again at METU. With his enthusiasm on work he
    warranted an impressive career in design and coordination of special
    structures. His talent concentrates on bringing structural solutions to
    phenomenal designs.`,
  },
  {
    fullName: 'Mustafa Emre Ozkok',
    role: 'Co-founder',
    biography: `Emre had BSc. & MSc. degrees at Middle East Technical
    University in 2007 and 2010 as Civil Engineer and Structural Engineer. He
    has majorly involved in large scale international superstructure projects
    as structural designer, site supervisor and design coordinator. The
    acquired experience brought him the insight of rapid resolution of
    engineering problems and construction conflicts in the ongoing
    megastructure projects. As a structural engineer, his technical interest
    intensifies on construction engineering and multidisciplinary
    coordination.`,
  },
]

export default () => {
  return (
    <div className="jumbotron main-content-container">
      <h1 className="main-title">
        The Team
      </h1>
      <Row className="main-content justify-content-lg-center">
        {members.map(member => (
          <Col lg={4} key={member.fullName}>
            <Card>
              <Card.Body>
                <Card.Title>{member.fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {member.role}
                </Card.Subtitle>
                <Card.Text>{member.biography}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
        }
      </Row>
    </div>
  )
}
