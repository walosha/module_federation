import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/header";
import MarkingApp from "./components/marketing";

const generateClassName = createGenerateClassName({
  productionPrefix: "marketing",
});
export default function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarkingApp />
      </BrowserRouter>
    </StylesProvider>
  );
}
