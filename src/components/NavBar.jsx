// NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { HomeOutlined, UserOutlined, HomeFilled } from '@ant-design/icons';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">SomeLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/features">
              <Nav.Link
                href="#features"
                className={activeLink === 'features' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('features')}
              >
                Features
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/planner">
              <Nav.Link
                href="#planner"
                className={activeLink === 'planner' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('planner')}
              >
                Planner
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/connect">
              <Nav.Link
                href="#connect"
                className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('connect')}
              >
                Connect
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/support">
              <Nav.Link
                href="#support"
                className={activeLink === 'support' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('support')}
              >
                Support
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/setting">
              <Nav.Link
                href="#setting"
                className={activeLink === 'setting' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('setting')}
              >
                Setting
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link
                href="#contact"
                className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('contact')}
              >
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><HomeOutlined /></a>
              <a href="#"><UserOutlined /></a>
              <a href="#"><HomeFilled /></a>
            </div>
            <button className="vvf" onClick={() => console.log('connect')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
