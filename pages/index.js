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
                <div className="home__box">
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
                </div>
                {piece.thumbnail && (
                  <div className="home__thumbnail">
                    <a href={piece.link}>
                    <img src={piece.thumbnail}></img>
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
