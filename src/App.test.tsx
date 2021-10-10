import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ERoute, history } from "app/shared";

test("renders learn react link for original redux page created by CRA", () => {
  history.push(ERoute.ORIGINAL);
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});

test("renders new gitlab search page", () => {
  history.push(ERoute.ROOT);
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText(/Search Gitlab Projects/i)).toBeInTheDocument();
});
