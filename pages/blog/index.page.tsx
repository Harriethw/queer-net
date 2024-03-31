import fs from "fs";
import React from "react";

import Link from "next/link";
import path from "path";

const BLOG_POSTS_PATH = path.join(process.cwd(), "content/posts/blog");

type BlogPostAttributes = {
  title: string;
  date: string;
  thumbnail?: string;
};

export type BlogPostUi = BlogPostAttributes & {
  fileName: string;
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
  const blogPost = await import(`../../content/posts/blog/${fileName}`).catch(
    (error) => {
      console.log(error);
    }
  );
  return { fileName, ...blogPost.attributes };
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
  const posts = await fetchAllPosts();

  return { props: { posts } };
};

export function Blog({ posts }: BlogProps) {
  return (
    <div className="blog__list" data-testid="blog-list">
      {posts.map((post) => {
        return (
          <Link href={`blog/post/${post.fileName}`} key={post.fileName}>
            <h2>{post.title}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Blog;
