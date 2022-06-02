import React from "react";

const Header = () => {
  return (
    <div className="py-8">
      <div className=" w-4/5 lg:flex lg:flex-row justify-between mx-auto font-sansman tracking-wide text-sm">
        <div>
          <h2>logo</h2>
        </div>
        <div className="flex gap-6">
          <a href="#Overview">Overview</a>
          <a href="#NFts">NFts</a>
          <a href="#Gameplay">Gameplay</a>
          <a href="#Ourteam">Ourteam</a>
          <a href="#Roadmap">Roadmap</a>
          <a href="#Whitepaper">Whitepaper</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
