import { useState, useEffect, React } from "react";
import {
  getTitle,
  getActivity,
  getCast,
  getCreatives,
  getShortDescription,
} from "./helpers/helpers";

const GetCastSheet = () => {
  const [castSheet, SetCastSheet] = useState([]);
  const [title, setTitle] = useState("");
  const [castMembers, setCastMembers] = useState([]);
  const [creatives, setCreatives] = useState([]);
  const [shortDescription, setShortDescription] = useState("");

  useEffect(() => {
    (async function getCastSheet() {
      try {
        console.log("fetch also gets calledo nce");
        const fetchResponse = await fetch(
          `http://localhost:8080/https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban`
        );
        const data = await fetchResponse.json();

        setTitle(getTitle(data));
        setShortDescription(getShortDescription(data));
        console.log("setCreatives only gets calaled once");
        setCreatives(getCreatives(data));
        setCastMembers(getCast(data));

        // let IDs = getCastIDs(getActivity(data));
        // setCastMembers(getCastMembers(data, IDs));
        // let creativesIDs = getCreativesIDs(data);
        // setCreatives(getCreatives(data, creativesIDs));
        // SetCastSheet(data);
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
