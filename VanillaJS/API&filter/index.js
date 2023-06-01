const placeHolderAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(placeHolderAPI)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Wystąpił błąd sieciowy");
    }
    return res.json();
  })
  .then((data) => {
    const posts = data.map((post) => post.title);
    const postsList = document.createElement("ul");

    document.body.appendChild(postsList);

    const searchTitle = "sunt";

    const filteredPosts = posts.filter((post) => {
      return post.includes(searchTitle);
    });

    console.log(filteredPosts);

    filteredPosts.forEach((el) => {
      const singlePost = document.createElement("li");
      singlePost.textContent = el;
      postsList.appendChild(singlePost);
    });
  })
  .catch((err) => console.log(err));
