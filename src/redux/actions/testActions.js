const updateData = value => ({
  type: "UPDATE_VALUE",
  payload: new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json => resolve(JSON.stringify(json)));
  }),
});

export default updateData;
