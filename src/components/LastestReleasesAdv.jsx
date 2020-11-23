import { render } from "@testing-library/react"
import React, { Component } from "react"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import Dropdown from "react-bootstrap/Dropdown"
import Badge from "react-bootstrap/Badge"
import scifi from "../json/scifi.json"
import fantasy from "../json/fantasy.json"
import horror from "../json/horror.json"
import romance from "../json/romance.json"
import history from "../json/history.json"

class LastestReleases extends Component {
	constructor(props) {
		super(props)
		let shelves = {
			scifi,
			fantasy,
			horror,
			romance,
			history,
		}
		this.state = { shelves, active: scifi }
		console.log(this.state)
	}
	render() {
		console.log("scifi", scifi)
		return (
			<>
				<Dropdown>
					<Dropdown.Toggle variant="danger" id="dropdown-basic">
						Category
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={() =>
								this.setState({
									shelves: this.state.shelves,
									active: this.state.shelves.scifi,
								})
							}
						>
							scifi
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() =>
								this.setState({
									shelves: this.state.shelves,
									active: this.state.shelves.fantasy,
								})
							}
						>
							fantasy
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() =>
								this.setState({
									shelves: this.state.shelves,
									active: this.state.shelves.horror,
								})
							}
						>
							horror
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() =>
								this.setState({
									shelves: this.state.shelves,
									active: this.state.shelves.history,
								})
							}
						>
							history
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() =>
								this.setState({
									shelves: this.state.shelves,
									active: this.state.shelves.romance,
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
								<Card.Title>
									{book.title}
									<Badge pill variant="primary">
										{book.category}
									</Badge>
								</Card.Title>
							</Card.Body>
						</Card>
					))}
				</CardColumns>
			</>
		)
	}
}

export default LastestReleases
