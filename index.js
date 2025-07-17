import { menuArray } from "/data.js";

const Container = document.getElementById("container");
const billBox = document.getElementById("billBox");
const billBoxItems = document.getElementById("billBoxItems");
const PlaceOrderBtn = document.getElementById("PlaceOrder");
const SubmitForm = document.getElementById("SubmitForm");

function render() {
  const items = menuArray.map((item) => {
    return `
       <div class="item" id="item">
          <p>${item.emoji}</p>
          <p>$${item.price}</p>
          <button id="add-${item.name}">+</button>
        </div>
    `;
  });

  return items.join(" ");
}

Container.innerHTML = render();

const addPizza = document.getElementById(`add-${menuArray[0].name}`);
const addBurgur = document.getElementById(`add-${menuArray[1].name}`);
const addBeer = document.getElementById(`add-${menuArray[2].name}`);

let prizzaPrice = 0;
let burgurPrice = 0;
let beerPrice = 0;

let FirstPizza = true;
let FirstBurgur = true;
let FirstBeer = true;

addPizza.addEventListener("click", () => {
  if (FirstPizza) {
    billBox.style.visibility = "visible";

    let newDiv = document.createElement("div");
    let paraone = document.createElement("p");
    let button = document.createElement("button");
    let paratwo = document.createElement("p");

    billBoxItems.appendChild(newDiv);
    newDiv.appendChild(paraone);
    newDiv.appendChild(button);
    newDiv.appendChild(paratwo);

    newDiv.className = "itembill";
    newDiv.id = "pizza-bill";

    paraone.textContent = menuArray[0].name;
    button.id = `remove-${menuArray[0].name}`;
    button.innerText = "remove";
    paratwo.id = "pizza-price";
    prizzaPrice += 14;
    paratwo.textContent = `$${prizzaPrice}`;

    document.getElementById("TotalAmount").innerText =
      `$${prizzaPrice + burgurPrice + beerPrice}`;

    const removePizza = document.getElementById(`remove-${menuArray[0].name}`);
    removePizza.addEventListener("click", () => {
      prizzaPrice -= 14;
      document.getElementById("pizza-price").textContent = `$${prizzaPrice}`;

      if (prizzaPrice == 0) {
        newDiv.style.display = "none";
      } else {
        newDiv.style.display = "flex";
      }

      document.getElementById("TotalAmount").innerText =
        `$${prizzaPrice + burgurPrice + beerPrice}`;
    });
  } else {
    document.getElementById("pizza-bill").style.display = "flex";

    prizzaPrice += 14;
    document.getElementById("pizza-price").textContent = `$${prizzaPrice}`;

    document.getElementById("TotalAmount").innerText =
      `$${prizzaPrice + burgurPrice + beerPrice}`;
  }

  FirstPizza = false;
});

addBurgur.addEventListener("click", () => {
  if (FirstBurgur) {
    billBox.style.visibility = "visible";

    let newDiv = document.createElement("div");
    let paraone = document.createElement("p");
    let button = document.createElement("button");
    let paratwo = document.createElement("p");

    billBoxItems.appendChild(newDiv);
    newDiv.appendChild(paraone);
    newDiv.appendChild(button);
    newDiv.appendChild(paratwo);

    newDiv.className = "itembill";
    newDiv.id = "burgur-bill";

    paraone.textContent = menuArray[1].name;
    button.id = `remove-${menuArray[1].name}`;
    button.innerText = "remove";
    paratwo.id = "burgur-price";
    burgurPrice += 12;
    paratwo.textContent = `$${burgurPrice}`;

    document.getElementById("TotalAmount").innerText =
      `$${prizzaPrice + burgurPrice + beerPrice}`;

    const removeBurgur = document.getElementById(`remove-${menuArray[1].name}`);
    removeBurgur.addEventListener("click", () => {
      burgurPrice -= 12;
      document.getElementById("burgur-price").textContent = `$${burgurPrice}`;

      if (burgurPrice == 0) {
        newDiv.style.display = "none";
      } else {
        newDiv.style.display = "flex";
      }

      document.getElementById("TotalAmount").innerText =
        `$${prizzaPrice + burgurPrice + beerPrice}`;
    });
  } else {
    document.getElementById("burgur-bill").style.display = "flex";

    burgurPrice += 12;
    document.getElementById("burgur-price").textContent = `$${burgurPrice}`;

    document.getElementById("TotalAmount").innerText =
      `$${prizzaPrice + burgurPrice + beerPrice}`;
  }

  FirstBurgur = false;
});

addBeer.addEventListener("click", () => {
  if (FirstBeer) {
    billBox.style.visibility = "visible";

    let newDiv = document.createElement("div");
    let paraone = document.createElement("p");
    let button = document.createElement("button");
    let paratwo = document.createElement("p");

    billBoxItems.appendChild(newDiv);
    newDiv.appendChild(paraone);
    newDiv.appendChild(button);
    newDiv.appendChild(paratwo);

    newDiv.className = "itembill";
    newDiv.id = "beer-bill";

    paraone.textContent = menuArray[2].name;
    button.id = `remove-${menuArray[2].name}`;
    button.innerText = "remove";
    paratwo.id = "beer-price";
    beerPrice += 12;
    paratwo.textContent = `$${beerPrice}`;

    document.getElementById("TotalAmount").innerText =
      `$${prizzaPrice + burgurPrice + beerPrice}`;

    const removeBeer = document.getElementById(`remove-${menuArray[2].name}`);

    removeBeer.addEventListener("click", () => {
      beerPrice -= 12;
      document.getElementById("beer-price").textContent = `$${beerPrice}`;

      if (beerPrice == 0) {
        newDiv.style.display = "none";
      } else {
        newDiv.style.display = "flex";
      }

      document.getElementById("TotalAmount").innerText =
        `$${prizzaPrice + burgurPrice + beerPrice}`;
    });
  } else {
    document.getElementById("beer-bill").style.display = "flex";

    beerPrice += 12;
    document.getElementById("beer-price").textContent = `$${beerPrice}`;

    document.getElementById("TotalAmount").innerText =
      `$${prizzaPrice + burgurPrice + beerPrice}`;
  }

  FirstBeer = false;
});

PlaceOrderBtn.addEventListener("click", () => {
  document.getElementById("popup").style.display = "flex";
});

SubmitForm.addEventListener("click", (event) => {
  if (
    !document.getElementById("cvv").value == " " &&
    !document.getElementById("cardNo").value == " " &&
    !document.getElementById("UserName").value == " "
  ) {
    document.getElementById("popup").style.display = "none";
    const UserName = document.getElementById("UserName").value;
    billBox.innerHTML = `<p>Thanks ${UserName} for your Order </p>`;
    billBox.style.display = "flex";
    billBox.style.justifyContent = "center";
    billBox.style.alignItems = "center";
    billBox.style.marginTop = "10%";
    billBox.style.marginBottom = "10%";
  }
});
