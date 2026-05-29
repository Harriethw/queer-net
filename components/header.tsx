import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <h1>machine streams</h1>
      </Link>
      <img
        className="image__icon"
        alt="a small line drawing of friendly robot/humanoids"
        src="/img/header_logo_glow.png"
      />
    </div>
  );
};

export default Header;
