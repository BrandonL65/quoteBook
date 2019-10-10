import React from "react"
import Quote from "./Quote.js"
import Author from "./Author.js"
import NewQuote from "./NewQuote.js"

export default class Middle extends React.Component 
{
  state = 
  {
    Quote: "",
    Author: ""
  }
  componentDidMount() 
  {
    this.randomQuoteFetch();
  }
  randomQuoteFetch = () => {
    return fetch(`https://api.quotable.io/random`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        Quote: data.content,
        Author: data.author
      })
    });
  }

  render()
  {
    return (
      <div id = "middle" >
        <Quote bgcolor = {this.props.bgcolor} quote = {this.state.Quote} />
        <Author bgcolor = {this.props.bgcolor} author = {this.state.Author} />
        <NewQuote darkColor = {this.props.darkColor} bgcolor = {this.props.bgcolor} randomcolor = {this.props.randomcolor} newquote = {this.randomQuoteFetch} />
      </div>
    )
  }
}