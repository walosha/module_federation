import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import MarkingApp from "./components/marketing";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <MarkingApp />
    </BrowserRouter>
  );
}
