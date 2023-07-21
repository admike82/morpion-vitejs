import { useContext } from "react";
import "./resetStyle.css";
import AppContext from "../../Context/AppContext";

const Reset = () => {
  const { setScore, setCases, updateStatus, _JOUEUR_1 } = useContext(AppContext);

  const resetScore = () => {
    setScore([{value: 1, score: 0}, {value: 2, score: 0}]);
    setCases(["", "", "", "", "", "", "", "", ""]);
    updateStatus(_JOUEUR_1.value)
  };

  return (
    <div className="reset">
      <button onClick={resetScore}>Réinitialiser</button>
    </div>
  );
};

export default Reset;
