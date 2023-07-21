import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import "./scoreStyle.css";
import Reset from "../Reset/Reset";

const Score = () => {
  const { score } = useContext(AppContext);
  return (
    <div className="score">
      <h2>Résultats</h2>
      <div className="resultats">
        {score.map((s, i) => (
          <div className={`individuel Joueur${s.value}`} key={i}>
            <span>Joueur {s.value}</span> <h2>{s.score}</h2>
          </div>
        ))}
      </div>
      <Reset />
    </div>
  );
};

export default Score;
