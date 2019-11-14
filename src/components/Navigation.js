import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <NavLink className="navbar-brand text-white" to="/">PSIA</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Notabeli">  Nota Beli  </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Jurnal">  Jurnal  </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Bukubesar"> Bukubesar </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Worksheet" > Worksheet  </NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}
