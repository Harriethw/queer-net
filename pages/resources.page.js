import { Component } from "react";
import { react as ResourcesContent } from "../content/resources.md";

export default class Resources extends Component {
  render() {
    return (
      <>
        <div className="page__background">
          <article>
            <img
              className="image__icon"
              alt="a small line drawing of friendly robot/humanoids"
              src="/img/invert_4_glow.png"
            />
            <h2>Resources</h2>
            <ResourcesContent />
          </article>
        </div>
      </>
    );
  }
}
