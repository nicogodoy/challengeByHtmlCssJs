let ConvertStringToHTML = function (str) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

export const getPages = (pages) => {
  let container = document.getElementById("container");
  fetch(`pages/${pages}.html`)
    .then((response) => response.text())
    .then((data) => {
      ConvertStringToHTML(data);
      container.innerHTML = data;
    });
};
