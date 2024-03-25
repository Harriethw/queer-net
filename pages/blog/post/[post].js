import React, { Component } from "react";
import { BLOG_POSTS_PATH, fetchPostContent } from "..";
import dynamic from "next/dynamic";

export const getStaticPaths = () => {
  const paths = fetchPostContent().map((fileName) => {
    return `/blog/post/${fileName}`;
  });
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const blogPost = await import(
    `../../../content/posts/blog/${params.post}`
  ).catch((error) => {
    console.log(error);
  });

  return {
    props: { attributes: blogPost.attributes, fileName: params.post },
  };
};

class Post extends Component {
  render() {
    if (!this.props.attributes) return <div>hello</div>;

    const {
      attributes: { thumbnail, title },
      fileName,
    } = this.props;

    const PostBody = dynamic(
      () =>
        import(`../../../content/posts/blog/${fileName}`).then(
          (file) => file.react
        ),
      {
        ssr: false,
      }
    );

    return (
      <>
        <article>
          <h1>{title}</h1>
          {thumbnail && <img className="image--hero" src={thumbnail}></img>}
          <PostBody />
        </article>
        <style jsx>{`
          article {
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
        `}</style>
      </>
    );
  }
}

export default Post;
