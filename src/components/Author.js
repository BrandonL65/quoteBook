import React from "react"

export default class Author extends React.Component 
{
	resetAnimation = () => {
		let random = Math.floor(Math.random()*900);
		return random;

	}
    render() 
    {
        return (
            <div key = {this.resetAnimation()} id = "author">
                <h2 className = "animateAuthor" >~ <span style = {{color: this.props.bgcolor}}>{this.props.author}</span> </h2>
            </div>

        )
    }
}