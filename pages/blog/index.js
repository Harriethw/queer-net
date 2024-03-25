import fs from "fs";
import React, { Component } from "react";

import Link from "next/link";
import path from "path";

export const BLOG_POSTS_PATH = path.join(process.cwd(), "content/posts/blog");

let postCache;

export function fetchPostContent() {
  if (postCache) {
    return postCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(BLOG_POSTS_PATH);
  console.log(fileNames);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".md"))
    .map((fileName) => {
      console.log("filename", fileName);
      // // Read markdown file as string
      // const fullPath = path.join(postsDirectory, fileName);
      // const fileContents = fs.readFileSync(fullPath, "utf8");

      // // Use gray-matter to parse the post metadata section
      // const matterResult = matter(fileContents, {
      //   engines: {
      //     yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      //   },
      // });
      // const matterData = matterResult.data as {
      //   date: string;
      //   title: string;
      //   tags: string[];
      //   slug: string;
      //   fullPath: string,
      // };
      // matterData.fullPath = fullPath;

      // const slug = fileName.replace(/\.mdx$/, "");

      // // Validate slug string
      // if (matterData.slug !== slug) {
      //   throw new Error(
      //     "slug field not match with the path of its content source"
      //   );
      // }

      // return matterData;
      return fileName;
    });
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
