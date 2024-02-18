import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/">
              <p>Events</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/rources">
              <p>Resources</p>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <p>Contacts</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
