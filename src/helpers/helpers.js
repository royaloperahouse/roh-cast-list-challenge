function getTitle(obj) {
  let title = obj.data.attributes.title;
  return title;
}

//The below pulls out the short description and removes the <p> tags from the beginning and end.
//This is based on the assumption that the <p> tags do not occur in the middle of the description
//and that there aren't other kinds of tags (e.g. <span></span>) to worry about.
//If those assumptions aren't the case, the code can be easily adapted.
function getShortDescription(obj) {
  let shortDescription = obj.data.attributes.shortDescription;
  let openingTagIndex = shortDescription.indexOf("<p>");
  if (openingTagIndex > -1) {
    shortDescription = shortDescription.slice(openingTagIndex + 3);
  }
  let closingTagIndex = shortDescription.indexOf("</p>");
  if (closingTagIndex > -1) {
    shortDescription = shortDescription.slice(0, closingTagIndex);
  }
  return shortDescription;
}

function getActivity(obj) {
  let arr = obj.included;
  //.find returns the first instance which meets the criteria. This is fine as there will only be one activity/performance for a given date.
  let activity = arr.find(
    (item) => item.attributes.date === "2023-03-10T19:00:00+00:00"
  );
  // let activityID = activity.id;
  return activity;
}

function getProduction(obj) {
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

function getCast(obj) {
  let activity = getActivity(obj);
  let castIDs = getIDs(activity, "cast");
  let cast = getPeople(obj, castIDs);
  return cast;
}

function getCreatives(obj) {
  console.log("top of getCreatives");
  let production = getProduction(obj);
  let creativesIDs = getIDs(production, "creatives");
  let creatives = getPeople(obj, creativesIDs);
  return creatives;
}

// function getCastIDs(activity) {
//   let castIDs = [];
//   for (let castRole of activity.relationships.cast.data) {
//     castIDs.push(castRole.id);
//   }
//   return castIDs;
// }

// function getCreativesIDs(obj) {
//   let creativesIDs = [];
//   for (let creative of production.relationships.creatives.data) {
//     creativesIDs.push(creative.id);
//   }
//   return creativesIDs;
// }
// function getCastMembers(obj, IDs) {
//   let castRoles = [];
//   for (let item of obj.included) {
//     for (let ID of IDs) {
//       if (item.id === ID) {
//         castRoles.push({
//           role: item.attributes.role,
//           name: item.attributes.name,
//         });
//       }
//     }
//   }
//   console.log(castRoles);
//   return castRoles;
// }

// function getCreatives(obj, creativesIDs) {
//   let creatives = [];
//   for (let item of obj.included) {
//     for (let ID of creativesIDs) {
//       if (item.id === ID) {
//         creatives.push({
//           role: item.attributes.role,
//           name: item.attributes.name,
//         });
//       }
//     }
//   }
//   // console.log("here are the creatives: ", creatives);
//   return creatives;
// }

export { getTitle, getCast, getCreatives, getShortDescription };
