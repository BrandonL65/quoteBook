import React from "react"

export default class Author extends React.Component 
{
    render() 
    {
        return (
            <div id = "author">
                <h2 class = "animate" id = "author-words">~ <span style = {{color: this.props.bgcolor}}>{this.props.author}</span> </h2>
            </div>

        )
    }
}