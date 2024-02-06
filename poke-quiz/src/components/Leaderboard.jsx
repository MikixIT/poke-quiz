import { useState, useEffect } from "react";
function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  // const fetchScores = async () => {
  //   try {
  //     let response = await database.listDocuments("65c25653d2add07cc274");
  //     setLeaderboard(response.documents);
  //   } catch (error) {
  //     console.error("Can't load leaderboard data correctly", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchScores();
  // }, []);

  return (
    <div className="m-6">
      <h1 className="m-2 text-2xl">🌟 Leaderboard </h1>
      <ul>
        {leaderboard
          .sort((a, b) => b.score - a.score)
          .slice(0, 3)
          .map((item, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "text-2xl cursor-pointer font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl"
                  : index === 1
                  ? "text-xl cursor-pointer font-bold bg-gradient-to-r from-orange-700 via-red-500-500 to-red-200-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl "
                  : "text-xl cursor-pointer font-bold bg-gradient-to-r from-blue-700 via-blue-500-500 to-blue-200-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl "
              }
            >
              {item.name}: {item.score}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
