/*
Front end for Dede passenger information system at dedriver.org
Copyright (C) 2021  Stefan Begerad

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react';
/* you should refrain from importing the entire react-bootstrap library when you are importing a component.*/
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import DedeLogo from './images/dedeLogo0032.png';
import { FormattedMessage } from 'react-intl';

const NavBar = () => {
    return(
            <>
	    <Navbar collapseOnSelect expand="sm" bg="light" variant="light" sticky="top">
	    <LinkContainer to="/">
	    <Navbar.Brand>
        <img src={DedeLogo} alt="Dede service logo"
        width="32"
        height="32"
        className="d-inline-block align-top"/>
	    {" "}
		<FormattedMessage id="Navbar.brand"/>
		</Navbar.Brand>
	    </LinkContainer>
	    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
	    <Navbar.Collapse id="responsive-navbar-nav">
	    <Nav className="ml-auto">
	    
        {/* TODO <a> cannot appear as a descendant of <a>. */}
	    <Link to="/about">
	    <Nav.Link href="#about">
			<FormattedMessage id="Navbar.link.about"/>
		</Nav.Link>
	    </Link>

        {/* TODO <a> cannot appear as a descendant of <a>. */}
	    <Link to="/app">
	    <Nav.Link href="#app">
			<FormattedMessage id="Navbar.link.app"/>
		</Nav.Link>
		</Link>

        {/* TODO <a> cannot appear as a descendant of <a>. */}
	    <Link to="/contact">
	    <Nav.Link href="#contact">
		<FormattedMessage id="Navbar.link.contact"/>
		</Nav.Link>
	    </Link>
	    
        {/* TODO <a> cannot appear as a descendant of <a>. */}
        {/*	
            <Nav.Link as={Link} to="/about">Über uns</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
        */}
	    </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}
export default NavBar;
