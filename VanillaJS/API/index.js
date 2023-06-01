const placeHolderAPI = "https://jsonplaceholder.typicode.com/users";

fetch(PlaceHolderAPI)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Wystąpił błąd sieciowy.");
    }
    return res.json();
  })
  .then((data) => {
    const usersList = document.createElement("ul");
    document.body.appendChild(usersList);

    const users = data.map((user) => user.name);

    users.forEach((el) => {
      const singleUser = document.createElement("li");
      singleUser.innerHTML = el;
      usersList.appendChild(singleUser);
    });
  })
  .catch((err) => console.log(err));
