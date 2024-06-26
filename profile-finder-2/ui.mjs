export function showProfile(user) {
  const userProfileEl = document.getElementById("userProfile");

  userProfileEl.innerHTML = `
  <div class='card card-body mb-3 mt-6'>
    <div class='row'>
        <div class='col-md-3'>
            <img class='img-fluid' src='${user.userImage}' width="200" height="200">
            <a href='${user.userImage}' target='_blank' class='btn btn-block btn-primary mt-3'>Get Image</a>
            <br>
            <span>${user.userFirstName} ${user.userLastName}</span>
        </div>
        <div class='col-md-9 mt-3'>
            <p> The user address is ${user.userPostcode},${user.userCity}. ${user.userCountry} ${user.userState}</p>
        </div>
     </div>
  </div>
  `;
}

export function showEmpty() {
  const userProfileEl = document.getElementById("userProfile");

  userProfileEl.innerHTML = `
      <div class='card card-body mb-3 mt-6'>
      <div class='row'>
          <div class='col-md-9 mt-3'>
              <h1>Sorry the user is not found</h1>
          </div>
       </div>
    </div>
  `;
  //   userProfileEl.insertAdjacentHTML(
  //     "afterbegin",
  //     `
  //     <div class='card card-body mb-3 mt-6'>
  //     <div class='row'>
  //         <div class='col-md-9 mt-3'>
  //             <h1>Sorry the user is not found</h1>
  //         </div>
  //      </div>
  //   </div>
  //   `
  //   );
}

export function createClearButton() {
  const clearButtonBox = document.getElementById("clearButtonBox");
  clearButtonBox.innerHTML = `
    <button id="clear-button" class="form-control mb-3 mt-3">Clear</button>
  `;
}

export function clearContent() {
  const userProfileEl = document.getElementById("userProfile");
  userProfileEl.innerHTML = "";
  const userProfileInput = document.getElementById("profile-input");
  userProfileInput.value = "";
}
