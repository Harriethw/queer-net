import { Component } from "react";
import { attributes, react as AboutContent } from "../content/about.md";

export default class About extends Component {
  render() {
    let { image, altText } = attributes;
    return (
      <>
        <article>
          <img
            className="image__icon"
            alt="a small line drawing of friendly robot/humanoids"
            src="/img/illo_1.webp"
          />
          <h2>About</h2>
          <AboutContent />
          {image && (
            <img className="image--hero" src={image} alt={altText}></img>
          )}
        </article>
      </>
    );
  }
}
