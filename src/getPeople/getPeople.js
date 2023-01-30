import { getActivity, getIDs, getPeople, getProduction } from "./helpers";

function getCast(obj) {
  let activity = getActivity(obj);
  let castIDs = getIDs(activity, "cast");
  let cast = getPeople(obj, castIDs);
  return cast;
}

function getCreatives(obj) {
  let production = getProduction(obj);
  let creativesIDs = getIDs(production, "creatives");
  let creatives = getPeople(obj, creativesIDs);
  return creatives;
}

export { getCast, getCreatives };
