import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default class Home extends Component {
  render() {
    let { title, news } = attributes;
    return (
      <article>
        {/* <img
          className="image__icon"
          alt="a small line drawing of friendly robot/humanoids"
          src="/img/illo_3.webp"
        /> */}
        {/* <h2 className="events__content">
            <HomeContent />
          </h2> */}

        <ul className="events__list">
          {news.map((piece, k) => (
            <li key={k}>
              <div className="events__box">
                <h2>{piece.name}</h2>
                <p>{piece.description}</p>
                {piece.link && (
                  <p>
                    <a href={piece.link}>Find out more</a>
                    <span
                      className="events__list--decoration"
                      aria-label="hidden"
                    >
                      &#8592;
                    </span>
                  </p>
                )}
              </div>
              {piece.thumbnail && (
                <div className="events__thumbnail">
                  <a href={piece.link}>
                    <img src={piece.thumbnail} alt={piece.altText}></img>
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
