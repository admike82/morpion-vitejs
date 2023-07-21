import { useContext } from "react";
import AppContext from "../../Context/AppContext";

import "./tourStyle.css";

const Tour = ({children}) => {
  const { status } = useContext(AppContext);
  return (
    <div className="tour">
      <h2 className={status.style}>
        {status.message}
      </h2>
      {children}
    </div>
  );
};

export default Tour;
