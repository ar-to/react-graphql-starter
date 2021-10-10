import * as React from "react";
import { useHistory } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Input,
  Link,
  Icon,
} from "@chakra-ui/react";
import { MdBook, MdSettings, MdOpenInNew, MdSearch } from "react-icons/md";
import { useGetFirstProjectsQuery } from "app/services/gitlab.api";
import { ERoute, TopColor } from "app/shared";

const ProjectsList = () => {
  let history = useHistory();
  const [search, setSearch] = React.useState("");
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const {
    data: projects,
    isLoading,
    isFetching,
  } = useGetFirstProjectsQuery({
    search,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  const fetchProjectsPerString = () => {
    setSearch(value);
  };

  const fetchProjectsPerStringUponKeyEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    /**
     * References
     * @see https://reactjs.org/docs/events.html#keyboard-events
     * @see https://www.w3.org/TR/uievents-key/#key-string
     * @see https://stackoverflow.com/a/35707795/9270352
     */
    if (event.key === "Enter") {
      setSearch(value);
    }
  };

  return (
    <Box>
      <HStack spacing="14px">
        <Input
          value={value}
          onChange={handleChange}
          onKeyPress={fetchProjectsPerStringUponKeyEnter}
          placeholder="mongodb"
          size="sm"
        />
        <Button
          onClick={fetchProjectsPerString}
          isLoading={isFetching}
          disabled={false}
        >
          <Icon as={MdSearch} boxSize={6} />
        </Button>
      </HStack>
      <List spacing={3} mt={6}>
        {projects?.map(({ id, name, description, webUrl, fullPath }) => (
          <Box
            key={id}
            w="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
          >
            <ListItem
              key={id}
              onClick={() => {
                console.log("route to /:projectId");
                // history.push(`${ERoute.ORIGINAL}`);
                // history.push(`${ERoute.PROJECT}/${fullPath}`);
                history.push(`${ERoute.PROJECT}?fullPath=${fullPath}`);
              }}
            >
              <Badge ml="1" fontSize="0.8em" colorScheme="orange">
                {name}
              </Badge>
              <p>
                <ListIcon as={MdBook} color="green.500" /> name: {name}
              </p>
              <p>
                <ListIcon as={MdSettings} color="green.500" /> description:{" "}
                {description}{" "}
              </p>
              <p>
                <ListIcon as={MdOpenInNew} color="green.500" />{" "}
                <Link
                  href={webUrl}
                  color="teal.500"
                  isExternal
                  rel="noreferrer"
                >
                  {webUrl}{" "}
                </Link>
              </p>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export const GitlabSearch = () => {
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

export default GitlabSearch;
