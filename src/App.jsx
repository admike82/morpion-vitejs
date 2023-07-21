import { useEffect, useState } from "react";
import "./App.css";
import AppContext from "./Context/AppContext";
import Grille from "./Components/Grille/Grille";
import Tour from "./Components/Tour/Tour";
import Board from "./Components/Board/Board";
import Score from "./Components/Score/Score";
import Reset from "./Components/Reset/Reset";
import Restart from "./Components/Restart/Restart";

function App() {
  const _JOUEUR_1 = {
    value: "X",
    message: "Joueur 1 à toi de jouer",
    style: "j1",
  };
  const _JOUEUR_2 = {
    value: "O",
    message: "Joueur 2 à toi de jouer",
    style: "j2",
  };
  const _WIN_X = {
    value: "winX",
    message: "Le Joueur 1 Gagne !",
    style: "win",
  };
  const _WIN_O = {
    value: "winO",
    message: "Le Joueur 2 Gagne !",
    style: "win",
  };
  const _DRAW = { value: "draw", message: "Egalité !", style: "draw" };

  const _WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [cases, setCases] = useState(["", "", "", "", "", "", "", "", ""]);
  const [status, setStatus] = useState(_JOUEUR_1);
  const [score, setScore] = useState([
    { value: 1, score: 0 },
    { value: 2, score: 0 },
  ]);

  const updateStatus = (value) => {
    switch (value) {
      case _JOUEUR_1.value:
        setStatus(_JOUEUR_1);
        break;
      case _JOUEUR_2.value:
        setStatus(_JOUEUR_2);
        break;
      case _WIN_X.value:
        setStatus(_WIN_X);
        break;
      case _WIN_O.value:
        setStatus(_WIN_O);
        break;
      case _DRAW.value:
        setStatus(_DRAW);
        break;
    }
  };

  useEffect(() => {
    if (
      status.value !== _JOUEUR_1.value &&
      status.value !== _JOUEUR_2.value &&
      status.value !== _DRAW.value
    ) {
      let tmp = [...score];
      status.value === _WIN_X.value ? tmp[0].score++ : tmp[1].score++;
      setScore(tmp);
    }
  }, [status]);

  let contextValue = {
    _WINNING_PATTERNS,
    status,
    updateStatus,
    _JOUEUR_1,
    _JOUEUR_2,
    cases,
    score,
    setCases,
    setScore,
  };

  return (
    <div className="App">
      <div className="dflex">
        <img src="/morpion.svg" alt="logo du jeu du morpion" width={"50px"} />
        <h1>MORPION</h1>
      </div>
      <AppContext.Provider value={contextValue}>
        <Tour>
          {status.value !== _JOUEUR_1.value &&
            status.value !== _JOUEUR_2.value && <Restart />}
        </Tour>
        <Board>
          <Grille />
          <Score />
        </Board>
      </AppContext.Provider>
    </div>
  );
}

export default App;
