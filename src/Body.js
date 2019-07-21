import React from "react"

class Body extends React.Component{
	constructor(){
		super()
		this.state = {
			text1:"Why did the chicken cross the road?",
			text2:"Why did the body walk down the road with bread?"
		}
	}
	
	changeText1 = () => {
		this.setState({text1:"to get to the Other Side ..."})
	}
	changeText2 =() => {
		this.setState({text2:"because there was a traffic Jam ..."})
	}
	
	render(){
		const div_style = {
			backgroundColor:"#FFFFFF",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			flexWrap: "no-wrap",
			boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
			margin: "5% 5% 0% 5%",
			alignItems: "center",
			width: "88vw"
		}
	
		return(
			<div style={div_style}>
				<h4>Pick a Joke</h4>
				<button className="jkBtn" onClick={this.changeText1}>{this.state.text1}</button>
				<button className="jkBtn" onClick={this.changeText2}>{this.state.text2}</button>
			</div>
		)
	}
}

export default Body