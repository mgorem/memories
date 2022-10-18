import React from "react";
import ReactDOM from "react-dom/client";

// provider keeps track ot the store which is the global state
// allows us to access the store (state) from anywhere in the app
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

import App from "./App";

// setting up redux:
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
);
