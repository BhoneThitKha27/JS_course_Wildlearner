function changeTitle() {
  const title = document.getElementById("title");
  title.textContent = "Title Changed!";
}

function addParagraph() {
  const container = document.getElementById("container");
  const newPara = document.createElement("p");
  newPara.textContent = "New paragraph added!";
  container.appendChild(newPara);
}