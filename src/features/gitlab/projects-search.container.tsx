import * as React from "react";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  HStack,
  List,
  ListIcon,
  ListItem,
  Input,
  Link,
  Icon,
} from "@chakra-ui/react";
import { MdBook, MdSettings, MdOpenInNew, MdSearch } from "react-icons/md";
import Skeleton from 'react-loading-skeleton';
import { useGetFirstProjectsQuery } from "app/services/gitlab.api";
import { ERoute } from "app/shared";

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
    // FEATURE: ghost/skeleton screens
    return (
      <Box>
        <HStack spacing="14px">
          <Button
            isLoading={true}
            disabled={true}
          >
            <Icon as={MdSearch} boxSize={6} />
          </Button>
        </HStack>
        <List spacing={3} mt={6}>
          {_.range(5)?.map((i) => (
            <Box
              key={i}
              w="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <ListItem
                key={i}
              >
                <Skeleton count={3} />
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    );
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
export default ProjectsList