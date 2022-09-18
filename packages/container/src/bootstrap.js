import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

const ContainerRoot = document.querySelector("#root");

if (process.env.NODE_ENV === "development") {
  if (ContainerRoot) {
    mount(ContainerRoot);
  }
}

export { mount };
