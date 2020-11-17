import logo from "./logo.svg"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import LastestReleases from "./components/LastestReleasesAdv"
import "./App.css"

function App() {
	return (
		<div className="App">
			<MyNav></MyNav>
			<Welcome></Welcome>
			<LastestReleases address="scifi"></LastestReleases>
			<MyFooter></MyFooter>
		</div>
	)
}

export default App
