//* STEP 1 => WE HAVE TO WORK ON ARRAY OF OBJECTS

const arrayOne = [
  { id: 3, name: "Email", category: "seo", link: "www.email.com" },
  { id: 1, name: "Dashboard", category: "main", link: "www.google.com" },
  { id: 2, name: "Campaign", category: "marketing", link: "www.campaign.com" },
  { id: 3, name: "Email", category: "seo", link: "www.email.com" },
];
const arrayTwo = [
  {
    id: 4,
    name: "Automation",
    category: "marketing",
    link: "www.automation.com",
  },
  { id: 2, name: "Campaign", category: "marketing", link: "www.campaign.com" },
  { id: 5, name: "Reporting", category: "main", link: "www.reporting.com" },

  { id: 6, name: "Email", category: "paid marketing", link: "www.email.com" },
  { id: 6, name: "Email", category: "paid marketing", link: "www.email.com" },
  { id: 6, name: "Email", category: "paid marketing", link: "www.email.com" },
  { id: 6, name: "Email", category: "paid marketing", link: "www.email.com" },
];

//* STEP 2 => WE'LL HAVE ARRAYS & WE WILL FIND THE UNIQUE VALUE & PUSH IT ON A NEW ARRAY

const combinedArray = arrayOne.concat(arrayTwo);
const uniqueArray = combinedArray.reduce((preVal, curVal) => {
  const index = preVal.findIndex((obj) => obj.id === curVal.id);

  if (index === -1) {
    preVal.push(curVal);
  } else {
    preVal[index] = Object.assign(preVal[index], curVal);
  }
  return preVal;
}, []);

//* STEP 3 => WE HAVE TO MAKE ALL THE CATEGORIES AS A UNIQUE CATEGORY & MAKE CARDS ON DOM
const uniqueCategory = [...new Set(uniqueArray.map((obj) => obj.category))];

// SELECTING THE CONTAINER
const container = document.querySelector(".container-sm");
// CREATING ROW
const row = document.createElement("div");
row.classList.add("row", "justify-content-center", "align-items-start");

uniqueCategory.forEach((el) => {
  // CREATING COLUMN
  const column = document.createElement("div");
  column.classList.add("col-md-6", "mb-4");
  // CREATING CARD
  const card = document.createElement("div");
  card.classList.add("card");
  card.style = `
  width: 100%;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;`;
  card.innerHTML = `
      <h4 class="card-title text-center mb-4">${el.toUpperCase()}</h4>`;
  column.appendChild(card);
  row.appendChild(column);
  // MATCHING OBJECTS FOR EACH CATEGORY
  const matchingObjects = uniqueArray.filter((obj) => obj.category === el);
  console.log(matchingObjects);
  // console.log(uniqueArray);
  matchingObjects.forEach((moEL) => {
    // CREATING BUTTONS
    const btn = document.createElement("a");
    btn.classList.add("btn", "btn-primary", "mb-3");
    btn.href = moEL.link;
    btn.target = "_blank";
    btn.textContent = moEL.name;

    card.appendChild(btn);
  });
});
container.appendChild(row);
