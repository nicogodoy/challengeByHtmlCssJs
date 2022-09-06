window.addEventListener("DOMContentLoaded", () => {
  let url = "https://jsonplaceholder.typicode.com/posts";
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));

  const showData = (data) => {
    console.log(data);
    let bodyCard = "";

    for (let i = 0; i < data.length; i++) {
      bodyCard += `<tr><td> ${data[i].id}</td><td>${data[i].title}</td><td>${data[i].body}</td></tr>`;
    }
    document.getElementById("card").innerHTML = bodyCard;
  };
});
