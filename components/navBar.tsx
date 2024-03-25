import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <ul className="navBar__links">
          <li>
            <Link href="/">
              <p>Events</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <p>Blog</p>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <p>Resources</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
