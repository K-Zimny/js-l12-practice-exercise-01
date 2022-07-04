const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  const usersRequest = await fetch("https://randomuser.me/api?results=5");
  data = await usersRequest.json();
  console.log(data.results);
  displayUsers(data.results);
};

const displayUsers = function (userResults) {
  randomFolks.innerHTML = "";
  for (const users of userResults) {
    const country = users.location.country;
    const name = users.name.last;
    const imageUrl = users.picture.medium;
    console.log(name);
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
        `;
    randomFolks.append(userDiv);
  }
};

getData();
