import { render } from "@testing-library/react"
import React, { Component } from "react"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import Dropdown from "react-bootstrap/Dropdown"
import scifi from "../json/scifi.json"
import fantasy from "../json/fantasy.json"
import horror from "../json/horror.json"
import romance from "../json/romance.json"
import history from "../json/history.json"

let books = scifi
class LastestReleases extends Component {
	constructor(props) {
		super(props)
		let shelves = {
			scifi: scifi,
			fantasy: fantasy,
			horror: horror,
			romance: romance,
			history: history,
		}
		this.state = { shelves: shelves, active: scifi }
		console.log(this.state)
	}
	render() {
		console.log("scifi", scifi)
		return (
			<div>
				<Dropdown>
					<Dropdown.Toggle variant="danger" id="dropdown-basic">
						Category
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={() =>
								this.setState(() => {
									this.state.active = this.state.shelves.scifi
									return this.state
								})
							}
						>
							scifi
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() =>
								this.setState(() => {
									this.state.active = this.state.shelves.fantasy
									return this.state
								})
							}
						>
							fantasy
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() =>
								this.setState(() => {
									this.state.active = this.state.shelves.horror
									return this.state
								})
							}
						>
							horror
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() =>
								this.setState(() => {
									this.state.active = this.state.shelves.history
									return this.state
								})
							}
						>
							history
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() =>
								this.setState(() => {
									this.state.active = this.state.shelves.romance
									return this.state
								})
							}
						>
							romance
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<CardColumns>
					{Array.from(this.state.active).map((book) => (
						<Card>
							<Card.Img variant="top" src={book.img} />
							<Card.Body>
								<Card.Title>{book.title}</Card.Title>
							</Card.Body>
						</Card>
					))}
				</CardColumns>
			</div>
		)
	}
}

export default LastestReleases
