import { useState, useEffect, React } from "react";

const GetCastSheet = () => {
  const [castSheet, SetCastSheet] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function getTitle(obj) {
    setTitle(obj.data.attributes.title);
  }
  function getActivity(obj) {
    let arr = obj.included;
    let activity = arr.filter(
      (item) => (item.attributes.date = "2023-03-10T19:00:00+00:00")
    );
    let activityID = activity.id;
    console.log("activityID in question", activityID);
  }

  useEffect(() => {
    (async function getCastSheet() {
      try {
        const fetchResponse = await fetch(
          `http://localhost:8080/https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban`
        );
        const data = await fetchResponse.json();

        SetCastSheet(data);
        getTitle(data);
        console.log("this is data", data);

        return data;
      } catch (e) {
        console.log(e);
        alert("not connected to the browser");
      }
    })();
  }, []);
  return `this is the title: ${title}`;
};

export default GetCastSheet;

/*
RUN: obj.data.relationships.runs.data.id = 51318
CREATIVES: obj.included[id:2606].creatives.data
DATE: obj.included.[id = 51318].relationships.activities.data[id=51382]

GENERAL PLAN:
1. Obtain ID of Activity we're interested in. 
    obj.included[?].attributes.date = 2023-03-10T19:00:00+00:00
    obj.included[?].id
2. Go down and obtain Cast members
3. Go up to Run and obtain Creatives







*/
