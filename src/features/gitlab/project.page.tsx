import * as React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { TopColor } from "app/shared";
import ProjectContent from "./project.container";

export const ProjectPage = () => {
  return (
    <Box>
      <Flex wrap="wrap" bg={TopColor} p={4} color="white">
        <Box>
          <Heading size="xl">Gitlab Project</Heading>
        </Box>
        <Spacer />
      </Flex>
      <Divider />
      <Box p={4}>
        <ProjectContent />
      </Box>
    </Box>
  );
};

export default ProjectPage;
