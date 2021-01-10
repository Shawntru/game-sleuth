import React, { useState, useEffect } from "react";
import "./SearchDisplay.scss";
import { MyBoardGame, PreviewInfo } from "../interfaces/MyBoardGame.interface";
import { fetchSearchResults } from "../APIcalls";
import GamePreview from "../GamePreview/GamePreview";
import { useParams } from "react-router-dom";

const SearchDisplay = () => {
  const [allGames, setAllGames] = useState([]);
  let { criteria }: any = useParams();

  useEffect(() => {
    let searchCriteria = handleSearchCriteria();

    fetchSearchResults(searchCriteria)
      .then((data) => setAllGames(cleanData(data.games) as any))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchCriteria = () => {
    switch (criteria) {
      case "trending":
        return "order_by=reddit_week_count&limit=10";
      case "top-10":
        return "order_by=rank&limit=10";
      case "max_players=2":
        return "max_players=2";
      case "max_players=4":
        return "max_players=4";
      default:
        return criteria;
    }
  };

  const cleanData = (data: MyBoardGame[]) => {
    if (!data) return;
    let cleanedData = data.map((game: MyBoardGame) => {
      return {
        id: game.id,
        name: game.name,
        min_players: game.min_players,
        max_players: game.max_players,
        min_age: game.min_age,
        image_url: game.image_url,
        description: game.description,
        price: game.price,
        url: game.url,
        primary_publisher: game.primary_publisher,
        mechanics: game.mechanics,
        average_user_rating: game.average_user_rating,
        num_user_ratings: game.num_user_ratings,
        rank: game.rank,
        trending_rank: game.trending_rank,
        rules_url: game.rules_url,
      };
    });
    return cleanedData;
  };

  const createGamePreview = (game: PreviewInfo) => {
    return (
      <GamePreview
        id={game.id}
        key={game.id}
        name={game.name}
        image_url={game.image_url}
        rank={game.rank}
        min_players={game.min_players}
        max_players={game.max_players}
      />
    );
  };

  return (
    <section className="displayed-games-section">
      <h1 className="search-title">Search Results</h1>
      {allGames.length === 0 && <h3>Loading...</h3>}
      {allGames.length > 0 && (
        <div className="search-results">
          {allGames.map((game: MyBoardGame) => createGamePreview(game))}
        </div>
      )}
    </section>
  );
};

export default SearchDisplay;
