import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import ProdCard from "./ProdCard";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProdCard />
  </StrictMode>
);
