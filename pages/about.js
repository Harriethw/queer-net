import { Component } from "react";
import { attributes, react as AboutContent } from '../content/about.md'


export default class About extends Component {
  render() {
    let { image } = attributes;
    return (
      <>
        <article>
          <h2>About</h2>
          <AboutContent />
          { image && (<img className="image--hero" src={image}></img>) }
        </article>
      </>
    )
  }
}