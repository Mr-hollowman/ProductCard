import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import ProdCard from "./ProdCard";
import ProductCarousel from "./ProductCarousel";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProdCard />
    {/* <ProductCarousel /> */}
  </StrictMode>
);
