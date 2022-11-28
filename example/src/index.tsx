import React from "react";
import ReactDOM from "react-dom/client";
import { MyCounter, AddIcon, Button } from "gg-ui-temp1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <AddIcon />
      <Button />
    </div>
  </React.StrictMode>
);
