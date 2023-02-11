import App from "./App";
import { createRoot } from "react-dom/client";
import { HeadProvider } from "react-head";
import "./styles/globals.css";

const container = document.getElementById("reactRoot");
const root = createRoot(container!);
root.render(
  <HeadProvider>
    <App />
  </HeadProvider>
);
