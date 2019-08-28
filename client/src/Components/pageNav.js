import React from "react";
import { BrowserRouter as Link } from "react-router-dom";


function pageNav() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/Saved-Schools" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Saved Schools
        </Link>
      </li>
        <li className="nav-item">
        <Link
          to="/Search"
          className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}
        >
          Search for Schools
        </Link>
      </li>
         <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          FAQ
        </Link>
      </li>
    </ul>
  );

}

export default pageNav;
