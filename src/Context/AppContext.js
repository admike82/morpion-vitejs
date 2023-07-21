import React from "react";

export default React.createContext({
  _WINNING_PATTERNS: [[]],
  status: { value: String, message: String, style: String },
  updateStatus: () => {},
  _JOUEUR_1: { value: String, message: String, style: String},
  _JOUEUR_2: { value: String, message: String, style: String},
  cases: [],
  score: [],
  setCases: () => {},
  setScore: () => {},
});
