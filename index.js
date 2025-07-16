import { menuArray } from "/data.js";

const Container = document.getElementById("container");
const billBox = document.getElementById("billBox");

function render() {
  const items = menuArray.map((item) => {
    return `
       <div class="item" id="item">
          <p>${item.emoji}</p>
          <p>${item.price}</p>
          <button id="add-${item.name}">+</button>
        </div>
    `;
  });

  return items;
}

Container.innerHTML = render();

document
  .getElementById(`add-${menuArray[0].name}`)
  .addEventListener("click", () => {
    billBox.style.visibility = "visible";
    document.getElementById("pizza-bill").style.display = "flex";
  });
document
  .getElementById(`add-${menuArray[1].name}`)
  .addEventListener("click", () => {
    billBox.style.visibility = "visible";
    document.getElementById("burgur-bill").style.visibility = "visible";
  });
document
  .getElementById(`add-${menuArray[2].name}`)
  .addEventListener("click", () => {
    billBox.style.visibility = "visible";
    document.getElementById("beer-bill").style.display = "flex";
  });

document
  .getElementById(`remove-${menuArray[0].name}`)
  .addEventListener("click", () => {
    billBox.style.visibility = "visible";
    document.getElementById("pizza-bill").style.display = "flex";
  });
document
  .getElementById(`remove-${menuArray[1].name}`)
  .addEventListener("click", () => {
    billBox.style.visibility = "visible";
    document.getElementById("burgur-bill").style.visibility = "visible";
  });
document
  .getElementById(`remove-${menuArray[2].name}`)
  .addEventListener("click", () => {
    billBox.style.visibility = "visible";
    document.getElementById("beer-bill").style.display = "";
  });
