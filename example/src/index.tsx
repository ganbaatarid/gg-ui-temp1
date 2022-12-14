import React from "react";
import ReactDOM from "react-dom/client";
import { Button, AddIcon } from "gg-ui-temp1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <Button />
      <div className="">
        <AddIcon />
      </div>
    </div>
  </React.StrictMode>
);
