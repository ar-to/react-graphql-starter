import * as React from "react";
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Input,
  Link
} from "@chakra-ui/react";
import {
  MdBook,
  MdSettings,
  MdOpenInNew
} from "react-icons/md";
import {
  useGetFirstProjectsQuery
} from "app/services/gitlab.api";

const ProjectsList = () => {
  // const [search, setSearch] = React.useState("mongodb");
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const { data: projects, isLoading } = useGetFirstProjectsQuery({
    search: value
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Box>
      <HStack spacing="14px">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="mongodb"
          size="sm"
        />
      </HStack>
      <List spacing={3} mt={6}>
        {projects?.map(({ id, name, description, webUrl }) => (
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
              onClick={() => console.log("route to /:projectId")}
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
      <Flex wrap="wrap" bg="#011627" p={4} color="white">
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
