import React from "react"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import scifi from "../json/scifi.json"

let books = scifi
const LastestReleases = (props) => {
	return (
		<CardColumns>
			{books.map((book) => (
				<Card>
					<Card.Img variant="top" src={book.img} />
					<Card.Body>
						<Card.Title>{book.title}</Card.Title>
					</Card.Body>
				</Card>
			))}
		</CardColumns>
	)
}

export default LastestReleases
