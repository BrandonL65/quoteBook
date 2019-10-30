import React from "react"

export default class Author extends React.Component 
{
	resetAnimation = () => {
		return Math.floor(Math.random()*900);
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