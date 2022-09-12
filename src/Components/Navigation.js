import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function Navigation() {
  return (
    <div className="container">
      <Link className="link active" to="/home">
        Home
      </Link>
      <Link className="link" to="/leaderboard">
        Leaderboard
      </Link>
      <Link className="link" to="/new">
        New
      </Link>
    </div>
  );
}

export default Navigation;
