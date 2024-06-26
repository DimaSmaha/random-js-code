export async function searchRandomProfile() {
  const baseUrl = "https://randomuser.me/api/";

  const userProfile = await fetch(baseUrl)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const userFirstName = userProfile?.results[0]?.name?.first;
  const userLastName = userProfile?.results[0]?.name?.last;
  const userImage = userProfile?.results[0]?.picture?.large;
  const userCity = userProfile?.results[0]?.location?.city;
  const userState = userProfile?.results[0]?.location?.state;
  const userCountry = userProfile?.results[0]?.location?.country;
  const userPostcode = userProfile?.results[0]?.location?.postcode;

  console.log({
    userFirstName,
    userLastName,
    userImage,
    userCity,
    userState,
    userCountry,
    userPostcode,
  });

  return {
    userFirstName,
    userLastName,
    userImage,
    userCity,
    userState,
    userCountry,
    userPostcode,
  };
}

// const getUserImage = await fetch(userImage)
// .then((res) => res.blob())
// .catch((err) => console.error(err));
// console.log(getUserImage);
