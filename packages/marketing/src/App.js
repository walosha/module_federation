import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import LandinPage from "./components/Landing";
import PricingPage from "./components/Pricing";

export default function App() {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={PricingPage} />
          <Route path="/" component={LandinPage} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}
