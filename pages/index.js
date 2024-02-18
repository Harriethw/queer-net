import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default class Home extends Component {
  render() {
    let { title, news } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h2 className="home__content">
            <HomeContent />
          </h2>

          <ul className="home__list">
            {news.map((piece, k) => (
              <li key={k}>
                <h2>{piece.name}</h2>
                <p>{piece.description}</p>
                {piece.link && (
                  <p>
                    <a href={piece.link}>Find out more</a>
                    <span
                      className="home__list--decoration"
                      aria-label="hidden"
                    >
                      &#8592;
                    </span>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
