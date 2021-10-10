export const TopColor = "#07b03a";

export enum ERoute {
  ROOT = "/",
  ORIGINAL = "/original",
  PROJECT = "/project",
  PROJECT_W_PARAM = "/project/:fullPath",
}

/**
 * API Interfaces
 */

export interface User {
  id: string;
  user: {
    id: string;
    name: string;
    webUrl: string;
  };
}
export interface ProjectMembers {
  nodes: User[];
}
export interface Project {
  name: string;
  id: string;
  description: string;
  webUrl: string;
  fullPath: string;
  createdAt: string;
  archived: boolean;
  projectMembers: ProjectMembers;
}

export type Projects = Project[];

export interface IGitlabProjectsResponse {
  projects: {
    nodes: Project[];
  };
}

export interface IGitlabProjectResponse {
  project: Project;
}
