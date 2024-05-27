import {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {HomeOutlined, UserOutlined, HomeFilled } from '@ant-design/icons';

export const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home')
    const [scoled, sescolled] = useState(false)

    useEffect (() => {
        const onScroll = () => {
            if(window.scrollY>50){
                sescolled(true);
            } else{
                sescolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    }
    ,[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand= "lg" className = {scoled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href = "#home">R
                <img src={''} alt = "SomeName"/></Navbar.Brand>
                <Navbar.Toggle aria-controls= "basic-navbar-nav">
                    <span className = "navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link href = "#home" className = {activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href = "#features" className = {activeLink === 'features' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('features')}>Features</Nav.Link>
                        <Nav.Link href = "#planner" className = {activeLink === 'planner' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('planner')}>Planner</Nav.Link>
                        <Nav.Link href = "#connect" className = {activeLink === 'connect' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('connect')}>Connect</Nav.Link>
                        <Nav.Link href = "#support" className = {activeLink === 'support' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('support')}>Support</Nav.Link>
                        <Nav.Link href = "#setting" className = {activeLink === 'setting' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('contact')}>Setting</Nav.Link>
                        <Nav.Link href = "#contact" className = {activeLink === 'contact' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('setting')}>Contact</Nav.Link>
                    </Nav>
                    <span className = "navbar-text">
                        <div className = "social-icon">
                            <a href = "#"><img src = {<HomeOutlined />} alt = ""/></a>
                            <a href = "#"><img src = {<UserOutlined />} alt = ""/></a>
                            <a href = "#"><img src = {<HomeFilled />} alt = ""/></a>
                        </div>
                        <button className = "vvf" onClick = {() => console.log('connect')}><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}