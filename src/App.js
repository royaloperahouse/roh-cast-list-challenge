import useCastSheet from "./getCastSheet";
import { Heading, Text, VStack, Box } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

function App() {
  let performanceDate = new Date("2023-03-10T19:00:00+00:00");

  let sheet = useCastSheet();

  return (
    <VStack align="start" m="10%">
      {" "}
      <Heading>{sheet.title}</Heading>
      <Text>{new Intl.DateTimeFormat("en-GB").format(performanceDate)}</Text>
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
