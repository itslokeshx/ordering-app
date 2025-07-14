import { menuArray } from "/data.js";

const root = document.getElementById("container");
const totalBox = document.getElementById("totalBox");

function render() {
  const items = menuArray.map((item) => {
    return `<div class="item" id="item">
     </div>
     
    `;
  });

  return items;
}

root.innerHTML = render();

const item = document.getElementById("item");

item.addEventListener("click", () => {
  totalBox.style.visibility = "visible";
});

totalBox.addEventListener("click", () => {
  document.getElementById("popup").style.display = "flex";
});
