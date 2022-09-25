import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

export default function App({ history }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signIn" component={SignIn} />
          <Route path="/auth/signout" component={Signup} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}
