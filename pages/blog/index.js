import fs from "fs";
import React, { Component } from "react";

import Link from "next/link";
import path from "path";

export const BLOG_POSTS_PATH = path.join(process.cwd(), "content/posts/blog");

export function fetchPostContent() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(BLOG_POSTS_PATH);

  const allPostsData = fileNames.filter((it) => it.endsWith(".md"));

  // Sort posts by date
  //   postCache = allPostsData.sort((a, b) => {
  //     if (a.date < b.date) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
  return allPostsData;
}

export const getStaticProps = async () => {
  const postsList = await fetchPostContent();
  return { props: { postsList } };
};

export default class Blog extends Component {
  render() {
    const { postsList } = this.props;
    return (
      <div className="blog-list">
        {postsList.map((post) => {
          return (
            <Link href={`blog/post/${post}`}>
              <h2>{post}</h2>
            </Link>
          );
        })}
        <style jsx>{`
          .blog-list a {
            display: block;
            text-align: center;
          }
          .blog-list img {
            max-width: 100%;

            max-height: 300px;
          }
        `}</style>
      </div>
    );
  }
}
