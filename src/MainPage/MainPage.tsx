import React from "react";
import "./MainPage.scss";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <main>
      <Link className="search-form-link" to="/form">
        <div className="diamond">
          <h1>Search Form</h1>
        </div>
      </Link>

      <Link className="search-trending" to="/trending">
        <div className="" data-value="trending">
          Trending Games
        </div>
      </Link>

      <Link className="search-top" to="/top">
        <div className="" data-value="top-10">
          Top 10 Games
        </div>
      </Link>

      <Link className="search-two-player" to="/max_player=2">
        <div className="" data-value="max_players=2">
          2 Player Games
        </div>
      </Link>

      <Link className="search-four-player" to="/max_players=4">
        <div className="" data-value="max_player=4">
          4 Player Games
        </div>
      </Link>
    </main>
  );
};

export default MainPage;
