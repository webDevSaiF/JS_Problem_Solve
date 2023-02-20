// * TASK => WE WILL HAVE OBJECTS THAT MAY HAVE MANY OBJECTS AS THEIR VALUES WE HAVE TO PRINT ALL OF THAT INFORMATION IN DOM BY JUST TYPING THEIR KEYS IN DOM

// * THE OBJECT
const mainObj = {
  Name: "John Doe",
  Email: "doe@mail.com",
  Phone: 01234567,
  Address: {
    City: "California",
    ZipCode: 1710,
  },

  Childrens: {
    Name: "Sara Doe",
    Email: "sara@yahoo.com",
    Phone: 86248465,
    Address: {
      City: "Texas",
      ZipCode: 26455,
    },
  },
};

// * STEP 1 => WE HAVE TO GET ALL OF THE NESTED OBJECT PROPERTY IN A SINGLE OBJECT SO THAT WE CAN PRINT THE VALUE IN DOM. WE WILL USE RECURSION FOR THIS TASK

function oneLevelObject(obj) {
  let result = {};
  function objPurification(obj, currentKey) {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key]) {
        if (currentKey) {
          objPurification(obj[key], currentKey + "_" + key);
        } else {
          objPurification(obj[key], key);
        }
      } else {
        if (currentKey) {
          result[currentKey + "_" + key] = obj[key];
        } else {
          result[key] = obj[key];
        }
      }
    }
  }
  objPurification(obj, "");
  replaceValueInPlaceholder(result);
  return result;
}
oneLevelObject(mainObj);

// * STEP 2 => NOW WE HAVE A SINGLE OBJECT THAT DOES NOT HAVE ANY NESTED OBJECT, NOW WE WILL CREATE A FUNCTION TO PROCESS PRINTING IN DOM

function replaceValueInPlaceholder(obj) {
  const elements = document.querySelectorAll("h1");
  const pattern = /\[\[.*\]\]/;

  for (const element of elements) {
    let matchingQuery = "";

    if (element.innerText.match(pattern) !== null) {
      matchingQuery = element.innerText.match(pattern)[0];
      console.log(matchingQuery);
    }
    for (const key in obj) {
      if (matchingQuery === `[[${key}]]`) {
        element.innerText = element.innerText.replaceAll(
          matchingQuery,
          obj[key]
        );
      }
    }
  }
}
