import { ListItem, UnorderedList } from "@chakra-ui/react";

const PeopleList = (arr) => {
  return (
    <UnorderedList>
      {arr
        ? arr.map((item) => {
            return (
              <ListItem>
                {item.role} : {item.name}
              </ListItem>
            );
          })
        : null}
    </UnorderedList>
  );
};

export default PeopleList;
