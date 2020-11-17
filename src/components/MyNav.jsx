import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const MyNav = (props) => {
	return (
		<div>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					{props.title}Strivazon 2 electric Boogaloo it got even more reactive
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>About</Nav.Link>
						<Nav.Link>Browse</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default MyNav
