import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Loading from 'containers/Loading'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Footer from 'components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Container fluid className="wrapper min-100 d-flex flex-column padding-0">
        <Navbar
            sticky="top"
            bg="dark"
            variant="dark"
            expand="lg"
            className="flex-shrink-0">
          <Navbar.Brand>
            <img
              src="img/must_logo_small.jpg"
              height="30"
              className="d-inline-block align-top"
              alt="Must Engineering" />{' '}
            Must Engineering
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/vision">
                Vision
              </Nav.Link>
              <Nav.Link as={Link} to="/mission">
                Mission
              </Nav.Link>
              <Nav.Link as={Link} to="/team">
                Team
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="row flex-grow-1 content-wrapper">
          <React.Suspense fallback={<Loading />}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <Footer />
      </Container>
    </Root>
  )
}

export default App
