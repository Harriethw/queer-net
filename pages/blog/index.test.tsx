import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blog, { BlogPostUi, getStaticProps } from "./index.page";

jest.mock(
  "../../content/posts/blog/middle-blog.md",
  () => {
    return {
      attributes: {
        title: "middle blog",
        date: "2024-03-25T15:23:07.354Z",
        thumbnail: "/img/middle.png",
      },
    };
  },
  { virtual: true }
);

jest.mock(
  "../../content/posts/blog/latest-blog.md",
  () => {
    return {
      attributes: {
        title: "latest blog",
        date: "2024-04-25T10:23:07.354Z",
        thumbnail: "/img/latest.png",
      },
    };
  },
  { virtual: true }
);

jest.mock(
  "../../content/posts/blog/oldest-blog.md",
  () => {
    return {
      attributes: {
        title: "oldest blog",
        date: "2024-01-25T16:23:07.354Z",
        thumbnail: "/img/oldest.png",
      },
    };
  },
  { virtual: true }
);

jest.mock("fs", () => ({
  readdirSync: jest.fn(() => [
    "middle-blog.md",
    "oldest-blog.md",
    "latest-blog.md",
  ]),
}));

describe("Blog", () => {
  it("renders a list of blogs", () => {
    const exampleBlogs: BlogPostUi[] = [
      {
        title: "hello world blog",
        fileName: "hello-world-blog.md",
        pathParam: "hello-world-blog",
        thumbnail: "/image.jpg",
        date: "2024-02-31T17:25:54.102Z",
        previewText: "preview text for the blog",
      },
      {
        title: "yet another blog",
        fileName: "yet-another-blog.md",
        pathParam: "yet-another-blog",
        date: "2024-02-26T17:25:54.102Z",
      },
    ];
    render(<Blog posts={exampleBlogs} />);

    const posts = screen.getByTestId("blog-list");

    const firstPost = posts.firstChild;
    const lastPost = posts.lastChild;

    expect(firstPost.firstChild).toHaveAttribute(
      "href",
      "blog/post/hello-world-blog"
    );
    expect(firstPost.textContent).toContain("preview text for the blog");
    expect(lastPost.lastChild).toHaveAttribute(
      "href",
      "blog/post/yet-another-blog"
    );
  });
});

describe("getStaticProps", () => {
  it("returns correct props", async () => {
    const { props } = await getStaticProps();
    expect(props.posts[0]).toEqual({
      title: "latest blog",
      fileName: "latest-blog.md",
      pathParam: "latest-blog",
      date: "2024-04-25T10:23:07.354Z",
      thumbnail: "/img/latest.png",
    });
    expect(props.posts[1]).toEqual({
      title: "middle blog",
      fileName: "middle-blog.md",
      pathParam: "middle-blog",
      date: "2024-03-25T15:23:07.354Z",
      thumbnail: "/img/middle.png",
    });
    expect(props.posts[2]).toEqual({
      title: "oldest blog",
      fileName: "oldest-blog.md",
      pathParam: "oldest-blog",
      date: "2024-01-25T16:23:07.354Z",
      thumbnail: "/img/oldest.png",
    });
  });
});
