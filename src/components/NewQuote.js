import React from "react"


export default class NewQuote extends React.Component
{


    handleClick = () => {
        this.props.newquote();
        this.props.randomcolor();
    }


    render() 
    {
        return(
        <button className = "btn animate" style = {{backgroundColor: this.props.bgcolor, color: this.props.darkColor === true ? "white" : "black"}} id = "btn"  onClick = {this.handleClick} >New Quote</button>
        )
    }
}
