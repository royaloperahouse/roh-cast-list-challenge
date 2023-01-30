import { useState, useEffect } from "react";
import GetCastSheet from "./getCastSheet";
import { Heading, Text, VStack } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function App() {
  let sheet = GetCastSheet();
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
        {sheet.castMembers.map((item) => {
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
