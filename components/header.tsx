import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link href="/">
          <h1>Open Brackets</h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
