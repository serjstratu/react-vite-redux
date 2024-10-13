import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '/src/assets/react.svg';
import './Layout.scss';

const Layout = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Container fluid className="d-flex m-0 p-0 flex-column min-vh-100 container-fluid">
            <Navbar color="light" light expand="md" className="flex-column align-items-start">
                <div className="d-flex align-items-center mb-2">
                    <img src={logo} alt="Vite Logo" style={{ height: '40px', marginRight: '12px' }} />
                </div>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/blog">Blog</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <footer className="footer">
                <div className="container">
                    <span className="copy-text">© {currentYear} My App. All rights reserved.</span>
                </div>
            </footer>
        </Container>
    );
}

export default Layout;
