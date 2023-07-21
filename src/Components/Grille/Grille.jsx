import { useContext } from "react";
import AppContext from "../../Context/AppContext";

import "./grilleStyle.css";
import Case from "../Case/Case";

const Grille = () => {
  const { cases } = useContext(AppContext);
  return (
    <div className="grille">
      <section className="jeux">
        {cases.map((c, i) => (
          <Case key={i} index={i}/>
        ))}
      </section>
    </div>
  );
};

export default Grille;
