import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="header__text">
        <span className="header__brackets" aria-hidden="true">
          &#126;
        </span>
      </div>
      <Link href="/">
        <h1>machine streams</h1>
      </Link>
      <div className="header__text">
        <span className="header__brackets" aria-hidden="true">
          &#126;
        </span>
      </div>
    </div>
  );
};

export default Header;
