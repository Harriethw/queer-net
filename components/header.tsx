import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header">
        <span className="header__brackets" aria-hidden="true">&#123;</span>
        <Link href="/">
          <h1>Open Brackets </h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
