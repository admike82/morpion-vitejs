import { useContext } from "react";
import "./restartStyle.css"
import AppContext from "../../Context/AppContext";

const Restart = () => {
  const { setCases, updateStatus,_JOUEUR_2 ,_JOUEUR_1, status } = useContext(AppContext);

  const restartGame = () => {
    setCases(["", "", "", "", "", "", "", "", ""]);
    updateStatus(status.value === "winX" ? _JOUEUR_2.value : _JOUEUR_1.value)
  };

  return (
    <div className="restart">
      <button onClick={restartGame}>Rejouer</button>
    </div>
  )
}

export default Restart