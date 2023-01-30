import { useState, useEffect } from "react";
import { getCast, getCreatives } from "./getPeople/getPeople";

import getTitle from "./getTitle";
import getShortDescription from "./getShortDescription";

const GetCastSheet = () => {
  const [title, setTitle] = useState("");
  const [cast, setCast] = useState([]);
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
        setCreatives(getCreatives(data));
        setCast(getCast(data));

        return data;
      } catch (e) {
        console.log(e);
        alert("failed to fetch data");
      }
    })();
  }, []);
  return {
    title: title,
    cast: cast,
    creatives: creatives,
    shortDescription: shortDescription,
  };
};

export default GetCastSheet;
