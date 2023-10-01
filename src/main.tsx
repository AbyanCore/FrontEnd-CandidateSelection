import React from "react";
import ReactDOM from "react-dom/client";
import Authentication from "./Authentication.tsx";
import "./index.css";
import CandidateSelection from "./CandidateSelection.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Authentication /> */}
    <CandidateSelection />
  </React.StrictMode>
);
