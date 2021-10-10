import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import GitlabSearch from "features/gitlab";

describe("gitlab search", () => {
  it("should render loading for the query", () => {
    render(
      <Provider store={store}>
        <GitlabSearch />
      </Provider>
    );
    setTimeout(() => {
      return;
    }, 3000);
    const Loading = screen.getByText("Loading");
    expect(Loading).toBeInTheDocument();
  });
  it.skip("should render with just the placeholder in the input", () => {
    render(
      <Provider store={store}>
        <GitlabSearch />
      </Provider>
    );
    // TODO: mock the graphql api
    const projects = screen.getByPlaceholderText("mongodb");
    expect(projects).toBeInTheDocument();
  });

  it.skip("should only fetch projects upon clicking button or keyup Enter", () => {
    // get input element and trigger a keyup event
    // TODO: mock the graphql api
  });
  it.skip("should redirect project click to the project page", () => {
    // TODO: mock the graphql api
  });
});
