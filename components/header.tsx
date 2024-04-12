import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <span className="header__brackets" aria-hidden="true">
        &#126;
      </span>
      <Link href="/">
        <h1>machine streams</h1>
      </Link>
      <span className="header__brackets" aria-hidden="true">
        &#126;
      </span>
    </div>
  );
};

export default Header;
