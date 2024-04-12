import fs from "fs";
import React from "react";

import Link from "next/link";
import path from "path";

const BLOG_POSTS_PATH = path.join(process.cwd(), "content/posts/blog");

type BlogPostAttributes = {
  title: string;
  date: string;
  thumbnail?: string;
  previewText?: string;
  altText?: string;
};

export type BlogPostUi = BlogPostAttributes & {
  fileName: string;
  pathParam: string;
};

type BlogProps = {
  readonly posts: BlogPostUi[];
};

export const fetchPostFileNames = (): string[] => {
  const fileNames = fs.readdirSync(BLOG_POSTS_PATH);

  return fileNames.filter((it) => it.endsWith(".md"));
};

export const fetchPostAttributesWithFileName = async (
  fileName: string
): Promise<BlogPostUi> => {
  const pathParam = fileName.slice(0, -3);
  const blogPost = await import(`../../content/posts/blog/${fileName}`).catch(
    (error) => {
      console.log(error);
    }
  );
  return { fileName, pathParam, ...blogPost.attributes };
};

const fetchAllPosts = async () => {
  const allPostFileNames = fetchPostFileNames();
  return await Promise.all(
    allPostFileNames.map(async (fileName) => {
      return await fetchPostAttributesWithFileName(fileName);
    })
  );
};

export const getStaticProps = async () => {
  const posts = (await fetchAllPosts()).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return { props: { posts } };
};

export function Blog({ posts }: BlogProps) {
  return (
    <div className="blog__list">
      <ul data-testid="blog-list">
        {posts.map((post) => {
          return (
            <li key={post.fileName}>
              <Link href={`blog/post/${post.pathParam}`}>
                <h2>
                  <span aria-hidden="true">~</span> {post.title}
                </h2>
              </Link>
              {post.previewText && (
                <p>
                  {post.previewText}{" "}
                  <span>
                    <Link href={`blog/post/${post.pathParam}`}>
                      Read more...
                    </Link>
                  </span>
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blog;
