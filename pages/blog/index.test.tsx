import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blog, { BlogPostUi, getStaticProps } from "./index.page";

jest.mock(
  "../../content/posts/blog/blog-name.md",
  () => {
    return {
      attributes: {
        title: "example blog",
        date: "2024-03-25T15:23:07.354Z",
        thumbnail: "/img/qtb_november.png",
      },
    };
  },
  { virtual: true }
);

jest.mock("fs", () => ({
  readdirSync: jest.fn(() => ["blog-name.md"]),
}));

describe("Blog", () => {
  it("renders a list of blogs", () => {
    const exampleBlogs: BlogPostUi[] = [
      {
        title: "hello world blog",
        fileName: "hello-world-blog.md",
        thumbnail: "/image.jpg",
        date: "2024-02-31T17:25:54.102Z",
        previewText: "preview text for the blog",
      },
      {
        title: "yet another blog",
        fileName: "yet-another-blog.md",
        date: "2024-02-26T17:25:54.102Z",
      },
    ];
    render(<Blog posts={exampleBlogs} />);

    const posts = screen.getByTestId("blog-list");

    const firstPost = posts.firstChild;
    const lastPost = posts.lastChild;

    expect(firstPost.firstChild).toHaveAttribute(
      "href",
      "blog/post/hello-world-blog.md"
    );
    expect(firstPost.textContent).toContain("preview text for the blog");
    expect(lastPost.lastChild).toHaveAttribute(
      "href",
      "blog/post/yet-another-blog.md"
    );
  });
});

describe("getStaticProps", () => {
  it("returns correct props", async () => {
    const { props } = await getStaticProps();
    expect(props.posts[0]).toEqual({
      title: "example blog",
      fileName: "blog-name.md",
      date: "2024-03-25T15:23:07.354Z",
      thumbnail: "/img/qtb_november.png",
    });
  });
});
