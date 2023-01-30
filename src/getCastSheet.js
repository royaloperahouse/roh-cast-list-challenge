import { useState, useEffect, React } from "react";

const GetCastSheet = () => {
  const [castSheet, SetCastSheet] = useState([]);
  const [title, setTitle] = useState("");
  const [castMembers, setCastMembers] = useState({});
  const [creatives, setCreatives] = useState([]);
  const [shortDescription, setShortDescription] = useState("");

  function getTitle(obj) {
    setTitle(obj.data.attributes.title);
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

  function getCastIDs(activity) {
    let castIDs = [];
    for (let castRole of activity.relationships.cast.data) {
      castIDs.push(castRole.id);
    }
    console.log("here are cast IDs", castIDs);
    return castIDs;
  }
  function getCastMembers(obj, IDs) {
    let castRoles = [];
    for (let item of obj.included) {
      for (let ID of IDs) {
        if (item.id === ID) {
          castRoles.push({
            role: item.attributes.role,
            name: item.attributes.name,
          });
        }
      }
    }
    console.log(castRoles);
    return castRoles;
  }

  function getCreatives(obj) {
    let productionID = obj.data.relationships.productions.data[0].id;
    // console.log("production ID: ", productionID);
    let production = obj.included.find((item) => item.id === productionID);
    // console.log("production: ", production);
    let creativesIDs = [];
    for (let creative of production.relationships.creatives.data) {
      creativesIDs.push(creative.id);
    }
    let creatives = [];
    for (let item of obj.included) {
      for (let ID of creativesIDs) {
        if (item.id === ID) {
          creatives.push({
            role: item.attributes.role,
            name: item.attributes.name,
          });
        }
      }
    }
    // console.log("here are the creatives: ", creatives);
    return creatives;
  }

  function getShortDescription(obj) {
    let shortDescription = obj.data.attributes.shortDescription;
    return shortDescription;
  }
  useEffect(() => {
    (async function getCastSheet() {
      try {
        const fetchResponse = await fetch(
          `http://localhost:8080/https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban`
        );
        const data = await fetchResponse.json();

        getTitle(data);
        let IDs = getCastIDs(getActivity(data));
        setCastMembers(getCastMembers(data, IDs));
        setCreatives(getCreatives(data));
        SetCastSheet(data);
        setShortDescription(getShortDescription(data));
        console.log("this is data", data);

        return data;
      } catch (e) {
        console.log(e);
        alert("not connected to the browser");
      }
    })();
  }, []);
  return {
    title: title,
    castMembers: castMembers,
    creatives: creatives,
    shortDescription: shortDescription,
  };
};

export default GetCastSheet;

/*
RUN: obj.data.relationships.runs.data.id = 51318
CREATIVES: obj.included[id:2606].creatives.data
DATE: obj.included.[id = 51318].relationships.activities.data[id=51382]

GENERAL PLAN:
1. Obtain ID of Activity we're interested in. ✅
    obj.included[?].attributes.date = 2023-03-10T19:00:00+00:00
    obj.included[?].id 
2. Go down and obtain Cast members ✅
3. Go up to Run and obtain Creatives
---
4. Obtain short description








*/
