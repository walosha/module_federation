import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/header";
// import Loader from "./components/loader";

// Lazily loaded micro-frontends
const MarkingAppLazy = lazy(() => import("./components/marketing"));
const AuthAppLazy = lazy(() => import("./components/auth"));

const generateClassName = createGenerateClassName({
  productionPrefix: "conatainer",
});

export default function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/auth" component={AuthAppLazy} />
            <Route path="/" component={MarkingAppLazy} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
}
