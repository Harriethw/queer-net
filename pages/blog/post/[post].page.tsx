import React from "react";
import {
  fetchPostAttributesWithFileName,
  fetchPostFileNames,
  BlogPostUi,
} from "../index.page";
import dynamic from "next/dynamic";

export const getStaticPaths = () => {
  const paths = fetchPostFileNames().map(
    (fileName) => `/blog/post/${fileName.slice(0, -3)}`
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetchPostAttributesWithFileName(`${params.post}.md`);

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
    <div className="page__background">
      <article className="blog__post">
        <h1>{post.title}</h1>
        {post.thumbnail && (
          <img
            className="image--full"
            src={post.thumbnail}
            alt={post.altText}
          ></img>
        )}
        <PostBody data-testid="bog-post" />
      </article>
    </div>
  );
}

export default Post;
