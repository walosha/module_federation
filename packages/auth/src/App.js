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
          <Route
            exact
            path="/"
            component={() => (
              <h1 onClick={() => history.push("/auth/signup")}>HELLO AUTH</h1>
            )}
          />
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}
