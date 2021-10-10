import * as React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { TopColor } from "app/shared";
import ProjectsList from "./projects-search.container"

export const ProjectsSearchPage = () => {
  return (
    <Box>
      <Flex wrap="wrap" bg={TopColor} p={4} color="white">
        <Box>
          <Heading size="xl">Search Gitlab Projects</Heading>
        </Box>
        <Spacer />
      </Flex>
      <Divider />
      <Box p={4}>
        <ProjectsList />
      </Box>
    </Box>
  );
};

export default ProjectsSearchPage;
