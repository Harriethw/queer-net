import { Component } from "react";
import { react as AboutContent } from '../content/about.md'


export default class About extends Component {
  render() {
    
    return (
      <>
        <article>
          <h2>About</h2>
          <AboutContent />
        </article>
      </>
    )
  }
}