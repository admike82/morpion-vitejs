import React, { useContext } from "react";

import "./caseStyle.css";
import AppContext from "../../Context/AppContext";

const Case = ({ index }) => {
  const {
    cases,
    setCases,
    status,
    updateStatus,
    _WINNING_PATTERNS,
    end,
    _JOUEUR_1,
    _JOUEUR_2,
  } = useContext(AppContext);

  const checkWin = (tmp) => {
    return _WINNING_PATTERNS.some((combination) =>
      combination.every((c) => tmp[c] === status.value)
    );
  };

  const checkDraw = (tmp) => {
    return tmp.every((c) => c === _JOUEUR_1.value || c === _JOUEUR_2.value);
  };

  const clicked = () => {
    let tmp = [...cases];
    tmp[index] = status.value;
    setCases(tmp);
    if (checkWin(tmp)) {
      updateStatus("win" + status.value);
    } else if (checkDraw(tmp)) {
      updateStatus("draw");
    } else {
      updateStatus(
        status.value === _JOUEUR_1.value ? _JOUEUR_2.value : _JOUEUR_1.value
      );
    }
    // checkWin
  };

  return (
    <div
      className={`case ${
        (status.value === "X" || status.value === "O") &&
        cases[index] === "" &&
        "enable"
      }`}
      onClick={cases[index] === "" && !end ? clicked : null}
    >
      {cases[index]}
    </div>
  );
};

export default Case;
