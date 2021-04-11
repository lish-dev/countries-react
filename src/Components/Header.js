import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
          <div>
          <h1>Where in the World</h1>
          </div>

          <div>
             <button className="btn btn-toggle"></button>
             <i className="fas fa-moon"> Dark Mode </i>
          </div>
      </header>
    </>
  );
};

export default Header;
