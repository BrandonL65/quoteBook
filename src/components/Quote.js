import React from "react"

export default class Quote extends React.Component 
{
  render() 
  {
        return (
            <div id = "quote" >
                <h1 id = "quotewords" className = "animate" style = {{color: this.props.bgcolor}}>"{this.props.quote}"</h1>
            </div>
        )
  }
}