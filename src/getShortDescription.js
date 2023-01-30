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

export default getShortDescription;
