import _ from "lodash";
import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import {
  Project,
  Projects,
  IGitlabProjectsResponse,
  IGitlabProjectResponse,
} from "app/shared";

export const gitlabApi = createApi({
  reducerPath: "gitlabApi",
  baseQuery: graphqlRequestBaseQuery({
    url: "https://gitlab.com/api/graphql",
    requestHeaders: {
      authorization: `Bearer ${process.env.REACT_APP_GITLAB_PERSONAL_ACCESS_TOKEN}`,
    },
  }),
  endpoints: (builder) => ({
    getFirstProjects: builder.query<
      Projects,
      { search: string; first?: number }
    >({
      query: ({ search, first = 20 }) => ({
        document: gql`
          query GetProjects($search: String, $first: Int = 10) {
            projects(search: $search, first: $first) {
              nodes {
                name
                id
                description
                webUrl
                fullPath
              }
            }
          }
        `,
        variables: {
          search,
          first,
        },
      }),
      transformResponse: (response: IGitlabProjectsResponse) => {
        return _.orderBy(response.projects.nodes, ["name"], ["asc"]);
      },
    }),
    getProject: builder.query<Project, { fullPath: string }>({
      query: ({ fullPath }) => ({
        document: gql`
          query GetProject($fullPath: ID!) {
            project(fullPath: $fullPath) {
              name
              id
              description
              webUrl
              fullPath
              createdAt
              archived
              projectMembers {
                nodes {
                  id
                  user {
                    id
                    name
                    webUrl
                  }
                }
              }
            }
          }
        `,
        variables: {
          fullPath,
        },
      }),
      transformResponse: (response: IGitlabProjectResponse) => response.project,
    }),
  }),
});

export const { useGetFirstProjectsQuery, useGetProjectQuery } = gitlabApi;
