import * as React from "react";
import { useLocation } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  HStack,
  Link,
  Icon,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import {
  MdBook,
  MdSettings,
  MdOpenInNew,
  MdKeyboardBackspace,
} from "react-icons/md";
import Moment from "react-moment";
import { useGetProjectQuery } from "app/services/gitlab.api";
import { history } from "app/shared";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProjectContent = () => {
  let query = useQuery();
  // important to default to "" to avoid errors
  let fullPath = query.get("fullPath") || "";

  const {
    data: project,
    isLoading,
    isFetching,
  } = useGetProjectQuery({
    fullPath,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Box>
      <HStack spacing="14px">
        <Button
          onClick={() => history.goBack()}
          isLoading={isFetching}
          disabled={false}
        >
          <Icon as={MdKeyboardBackspace} boxSize={6} />
        </Button>
      </HStack>
      <Box w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Badge ml="1" fontSize="0.8em" colorScheme="orange">
          name
        </Badge>
        <p>
          <Icon as={MdBook} color="green.500" /> name: {project?.name}{" "}
        </p>
        <p>
          <Icon as={MdSettings} color="green.500" /> description:{" "}
          {project?.description}{" "}
        </p>
        <p>
          <Icon as={MdSettings} color="green.500" /> fullPath:{" "}
          {project?.fullPath}{" "}
        </p>
        <p>
          <Icon as={MdSettings} color="green.500" /> created at:{" "}
          <Moment format="YYYY/MM/DD">{project?.createdAt}</Moment>
        </p>
        <p>
          <Icon as={MdSettings} color="green.500" /> archived:{" "}
          {project?.archived.toString()}
        </p>
        <p>
          <Icon as={MdOpenInNew} color="green.500" />{" "}
          <Link
            href={project?.webUrl}
            color="teal.500"
            isExternal
            rel="noreferrer"
          >
            {project?.webUrl}{" "}
          </Link>
        </p>
        <List spacing={3} mt={6}>
          {project?.projectMembers.nodes.map(({ id, user }) => (
            <Box
              key={id}
              w="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <ListItem key={id}>
                <Badge ml="1" fontSize="0.8em" colorScheme="orange">
                  {user?.name}
                </Badge>
                <p>
                  <ListIcon as={MdBook} color="green.500" /> name: {user?.name}
                </p>
                <p>
                  <ListIcon as={MdOpenInNew} color="green.500" />{" "}
                  <Link
                    href={user?.webUrl}
                    color="teal.500"
                    isExternal
                    rel="noreferrer"
                  >
                    {user?.webUrl}{" "}
                  </Link>
                </p>
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ProjectContent;
