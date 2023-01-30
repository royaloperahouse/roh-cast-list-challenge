import useCastSheet from "./getCastSheet";
import { Heading, Text, VStack, Box } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import PeopleList from "./List.js";

function App() {
  let sheet = useCastSheet();
  console.log("here's da sheet: ", sheet);

  return (
    <VStack align="start" m="10%">
      {" "}
      <Heading>{sheet.title}</Heading>
      <Text>Date will go here</Text>
      <Text>{sheet.shortDescription}</Text>
      <Heading>Creatives</Heading>
      <UnorderedList>
        {sheet.creatives.map((item) => {
          return (
            <ListItem>
              {item.role} : {item.name}
            </ListItem>
          );
        })}
      </UnorderedList>
      <Heading>Cast</Heading>
      <UnorderedList>
        {sheet.cast.map((item) => {
          return (
            <ListItem>
              {item.role} : {item.name}
            </ListItem>
          );
        })}
      </UnorderedList>
    </VStack>
  );
}

export default App;
