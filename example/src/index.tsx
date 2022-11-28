import React from "react";
import ReactDOM from "react-dom/client";
import { MyCounter, Button, IconProps, Icon } from "gg-ui-temp1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <Button />
      {/* <Icon></Icon> */}
    </div>
  </React.StrictMode>
);
