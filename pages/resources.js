import { Component } from "react";
import { react as ResourcesContent } from '../content/resources.md'


export default class Resources extends Component {
  render() {
    
    return (
      <>
        <article>
          <h2>Resources</h2>
          <ResourcesContent />
        </article>
      </>
    )
  }
}