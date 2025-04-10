import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Leaderboard({ positionsAvailable }) {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("data/score.json")
      .then((response) => response.json())
      .then((initialLeaderboard) => {
        const storedLeaderboard = localStorage.getItem("leaderboard");
        if (storedLeaderboard) {
          const localLeaderboard = JSON.parse(storedLeaderboard);
          setLeaderboard(
            mergeLeaderboards(initialLeaderboard, localLeaderboard)
          );
        } else {
          setLeaderboard(initialLeaderboard);
        }
      })
      .catch((error) =>
        console.error("Can't load leaderboard data correctly", error)
      );
  }, []);

  const mergeLeaderboards = (initialLeaderboard, localLeaderboard) => {
    const combinedLeaderboard = [...initialLeaderboard, ...localLeaderboard];
    combinedLeaderboard.sort((a, b) => b.score - a.score);
    return combinedLeaderboard.slice(0, positionsAvailable);
  };

  const addScore = (name, score) => {
    const updatedLeaderboard = [...leaderboard, { name, score }];
    const sortedLeaderboard = updatedLeaderboard.sort(
      (a, b) => b.score - a.score
    );
    const limitedLeaderboard = sortedLeaderboard.slice(0, positionsAvailable);

    setLeaderboard(limitedLeaderboard);
    localStorage.setItem("leaderboard", JSON.stringify(limitedLeaderboard));
  };

  return (
    <div className="m-6">
      <h1 className="m-2 text-2xl">🌟 Leaderboard </h1>
      <ul>
        {leaderboard.map((item, index) => (
          <li
            key={index}
            className={
              index === 0
                ? "text-2xl cursor-pointer font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl"
                : index === 1
                ? "text-xl cursor-pointer font-bold bg-gradient-to-r from-orange-700 via-red-500 to-red-200 text-transparent bg-clip-text animate-gradient drop-shadow-xl"
                : "text-xl cursor-pointer font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-200 text-transparent bg-clip-text animate-gradient drop-shadow-xl"
            }
          >
            {item.name}: {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

Leaderboard.propTypes = {
  positionsAvailable: PropTypes.number.isRequired,
};

Leaderboard.defaultProps = {
  positionsAvailable: 3, // Valore predefinito
};

export default Leaderboard;
