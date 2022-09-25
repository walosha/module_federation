import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/header";
import MarkingApp from "./components/marketing";
import AuthApp from "./components/auth";

const generateClassName = createGenerateClassName({
  productionPrefix: "conatainer",
});
export default function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" component={<MarkingApp />} />
          <Route path="/" component={<AuthApp />} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}
