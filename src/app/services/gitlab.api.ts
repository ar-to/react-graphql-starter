import _ from "lodash";
import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

interface Project {
  name: string;
  id: string;
  description: string;
  webUrl: string;
}

interface IGitlabResponse {
  projects: {
    nodes: Project[];
  };
}

type Projects = Project[];

export const gitlabApi = createApi({
  reducerPath: 'gitlabApi',
  baseQuery: graphqlRequestBaseQuery({
    url: "https://gitlab.com/api/graphql",
    requestHeaders: {
      authorization: `Bearer ${process.env.REACT_APP_GITLAB_PERSONAL_ACCESS_TOKEN}`
    }
  }),
  endpoints: (builder) => ({
    getFirstProjects: builder.query<
      Projects,
      { search: string; first?: number }
    >({
      query: ({ search, first = 10 }) => ({
        document: gql`
          query GetProjects($search: String, $first: Int = 10) {
            projects(search: $search, first: $first) {
              nodes {
                name
                id
                description
                webUrl
              }
            }
          }
        `,
        variables: {
          search,
          first
        }
      }),
      transformResponse: (response: IGitlabResponse) => {
        return _.orderBy(response.projects.nodes, ["name"], ["asc"]);
      }
    })
  })
});

export const { useGetFirstProjectsQuery } = gitlabApi;
