import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router/Router.jsx";
import "./index.css";
import AuthProvider from "./Authentication/Provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
  </StrictMode>
);
