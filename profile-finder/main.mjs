import { searchRandomProfile } from "./user-api.mjs";
import { showEmpty, showProfile } from "./ui.mjs";

// const searchInput = document.getElementById("profile-input");
// searchInput.addEventListener("keyup", (e) => {
//   const searchInputValue = e.target.value;
//   if (searchInputValue != "") {
//     searchRandomProfile(searchInputValue);
//   }
// });

const searchButton = document.getElementById("profile-button");

searchButton.addEventListener("click", async () => {
  const user = await searchRandomProfile();

  let undefinedFlag = true;
  for (const key in user) {
    if (user[key] == undefined) {
      showEmpty();
      console.log("something is missing");
      undefinedFlag = false;
      break;
    }
  }

  if (undefinedFlag) {
    console.log("everything is good");
    showProfile(user);
  }
});

//Add clear button
