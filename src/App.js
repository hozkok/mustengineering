import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { useSpring, animated } from 'react-spring';
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Loading from 'containers/Loading'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Footer from 'components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import { Link as ScrollLink, Scroll } from 'react-scroll';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Container fluid className="wrapper min-100 d-flex flex-column padding-0">
        <Navbar collapseOnSelect
            sticky="top"
            bg="dark"
            variant="dark"
            expand="lg"
            className="flex-shrink-0">
          <Navbar.Brand href='/'>
            <img
              src="/img/mustengineering-logo.jpeg"
              height="30"
              className="d-inline-block align-top"
              alt="Must Engineering" />{' '}
            Must Engineering
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {[{path: '/', name: 'Home'},
                {path: '/vision', name: 'Vision'},
                {path: '/mission', name: 'Mission'},
                {path: '/team', name: 'Team'}].map(({path, name}) => (
                  <Nav.Link as={Link} to={path} key={path}>
                    {name}
                  </Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="row flex-grow-1 content-wrapper">
          <React.Suspense fallback={<Loading />}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes 
                path="*"
                render={
                  ({routePath, getComponentForPath }) => {
                    console.log('routePath', routePath);
                    const element = getComponentForPath(routePath);
                    const props = useSpring({
                      opacity: 1,
                      from: {opacity: 0}
                    });
                    return (
                      <animated.div style={props}>
                        {element}
                      </animated.div>
                    );
                  }
                }
              />
            </Router>
          </React.Suspense>
        </div>
        <Footer />
      </Container>
    </Root>
  )
}

export default App
