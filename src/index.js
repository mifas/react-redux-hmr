import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import configureStore from "./redux/store/configureStore";
const store = configureStore();

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root"),
  );

render();
if (module.hot) module.hot.accept("./App", () => render());

registerServiceWorker();
