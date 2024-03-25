import React from "react";
import {
  fetchPostAttributesWithFileName,
  fetchPostFileNames,
  BlogPostUi,
} from "..";
import dynamic from "next/dynamic";

export const getStaticPaths = () => {
  const paths = fetchPostFileNames().map(
    (fileName) => `/blog/post/${fileName}`
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetchPostAttributesWithFileName(params.post);

  return {
    props: { post },
  };
};

type PostProps = {
  readonly post: BlogPostUi;
};

function Post({ post }: PostProps) {
  const PostBody = dynamic(
    () =>
      import(`../../../content/posts/blog/${post.fileName}`).then(
        (file) => file.react
      ),
    {
      ssr: false,
    }
  );

  return (
    <article className="blog__post">
      <h1>{post.title}</h1>
      {post.thumbnail && (
        <img className="image--hero" src={post.thumbnail}></img>
      )}
      <PostBody data-testid="bog-post" />
    </article>
  );
}

export default Post;
