import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import { BlogPostUi } from "../index.page";
import Post, { getStaticProps } from "./[post].page";

jest.mock(
  "../../../content/posts/blog/blog-name.md",
  () => {
    return {
      attributes: {
        title: "example blog",
        date: "2024-03-25T15:23:07.354Z",
        thumbnail: "/image.jpg",
      },
      react: jest.fn(() => <p>mocked blog content</p>),
    };
  },
  { virtual: true }
);

describe("Post", () => {
  it("renders a blog", () => {
    const exampleBlogPost: BlogPostUi = {
      title: "example blog",
      fileName: "hello-world-blog.md",
      pathParam: "hello-world",
      thumbnail: "/image.jpg",
      date: "2024-02-31T17:25:54.102Z",
    };

    render(<Post post={exampleBlogPost} />);

    screen.findByRole("heading", { level: 1 }).then((heading) => {
      expect(heading.textContent).toEqual("example blog");
    });

    screen.findByTestId("blog-post").then((post) => {
      expect(post.textContent).toEqual("mocked blog content");
    });
  });
});

describe("getStaticProps", () => {
  it("returns correct props", async () => {
    const { props } = await getStaticProps({
      params: { post: "blog-name" },
    });
    expect(props.post).toEqual({
      title: "example blog",
      fileName: "blog-name.md",
      pathParam: "blog-name",
      date: "2024-03-25T15:23:07.354Z",
      thumbnail: "/image.jpg",
    });
  });
});
