import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import LandinPage from "./components/Landing";
import PricingPage from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "marketing",
});

export default function App({ history }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/pricing" component={PricingPage} />
          <Route path="/" component={LandinPage} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}
