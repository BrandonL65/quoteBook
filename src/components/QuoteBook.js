import React from "react"
import Middle from "./Middle.js"
const colors = ["#e5b0ea", "#f2a6a6", "#badfdb", "#64b2cd", "#537d91", "#943855", "#010a43", "#543864", "#407088", "#f67e7d"]
const darkColors = ["#537d91", "#943855", "#010a43", "#543864", "#407088",]

export default class QuoteBook extends React.Component 
{
  state = {
    color: "",
    darkColor: false 
  }
  componentDidMount() 
  {
    this.randomColor();
  }
  randomColor = () => {
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    let darkOrNot = false;
    if (darkColors.includes(randomColor)) {
      darkOrNot = true; 
    }
    this.setState({
      color: randomColor,
      darkColor: darkOrNot
    })
	}
	
	resetAnimation = () => {
	  return Math.floor(Math.random()*900);
	}
  render()
  {
    return (
      <div id = "page" style = {{backgroundColor: this.state.color,}}>
        <h1 id = "title" style = {this.state.darkColor === false ? {color: "black"} : {color: "white"}}>Quote Book</h1>
        <Middle key = {this.resetAnimation()} bgcolor = {this.state.color} randomcolor = {this.randomColor} darkColor = {this.state.darkColor}/>
        <div key = {this.resetAnimation()} className = "creditsDiv" style = {{backgroundColor: this.state.color}}>
					<p id = "myName" style = {this.state.darkColor === false ? {color: "black"} : {color: "white"}}>made with <span>❤️</span> by Brandon L.</p>
				</div>
      </div>
    )
  }
}

