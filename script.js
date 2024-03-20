let arr = [1, 4, 5, 12, 32, 6, 77, 39, 41, 11];
var list = document.getElementById("list");
arr.forEach((element) => {
  if (element % 2 === 0) {
    var listItem = document.createElement("li");
    listItem.innerText = element;
    list.appendChild(listItem);
  }
});
