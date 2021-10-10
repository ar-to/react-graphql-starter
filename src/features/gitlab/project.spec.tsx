import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import { BrowserRouter } from "react-router-dom";
import ProjectPage from "./project.page";
import { ERoute, history } from "app/shared";

const Utils = {
  renderProjectPage: () =>  {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProjectPage />
        </BrowserRouter>
      </Provider>
    );
  }
}

describe("gitlab project page", () => {
  it("should render loading for the query", () => {
    Utils.renderProjectPage()
    // TODO: mock the graphql api
    const Loading = screen.getByText("Loading");
    expect(Loading).toBeInTheDocument();
  });
  it("should show the fullPath in the query string", () => {
    // TODO: mock the graphql api
    const sampleFullPath = "startx-demo/containers/mongo"
    history.push(`${ERoute.PROJECT}?fullPath=${sampleFullPath}`);
    Utils.renderProjectPage()
    const location = history.location
    function useQuery() {
      return new URLSearchParams(location.search);
    }
    
    let query = useQuery();

    let actualFullPath = query.get("fullPath") || "";
    expect(actualFullPath).toBe(sampleFullPath);
  });
});
