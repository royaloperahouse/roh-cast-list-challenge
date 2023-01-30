function getActivity(obj) {
  let arr = obj.included;
  //.find returns the first instance which meets the criteria. This is fine as there will only be one activity/performance for a given date.
  let activity = arr.find(
    (item) => item.attributes.date === "2023-03-10T19:00:00+00:00"
  );
  return activity;
}

function getProduction(obj) {
  //This assumes that there is only one production per API endpoint, i.e. that item 0 in productions.data is the only item there:
  let productionID = obj.data.relationships.productions.data[0].id;
  console.log("production id is: ", productionID);
  let production = obj.included.find((item) => item.id === productionID);
  return production;
}

function getIDs(obj, what) {
  let IDs = [];
  for (let item of obj.relationships[what].data) {
    IDs.push(item.id);
  }
  return IDs;
}

function getPeople(obj, IDs) {
  let people = [];
  for (let item of obj.included) {
    for (let ID of IDs) {
      if (item.id === ID) {
        people.push({
          role: item.attributes.role,
          name: item.attributes.name,
        });
      }
    }
  }
  return people;
}

export { getActivity, getIDs, getPeople, getProduction };
