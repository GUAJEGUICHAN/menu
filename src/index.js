import "./styles.css";

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 16,
    desc: "yellow"
  },
  {
    id: 2,
    title: "milk",
    category: "drink",
    price: 6,
    desc: "white"
  },
  {
    id: 3,
    title: "water",
    category: "drink",
    price: 1,
    desc: "transparent"
  }
];

let displayMenu = menu.map(function(item) {
  return {
    category: item.category,
    code: `<article class="menu-item ${item.category}">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}$</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`
  };
});

const allBtn = document.querySelector(".all");
const breakfastBtn = document.querySelector(".breakfast");
const drinkBtn = document.querySelector(".drink");

allBtn.addEventListener("click", () => {
  document.getElementById("app").innerHTML = ``;
  displayMenu.forEach(e => {
    document.getElementById("app").innerHTML += e.code;
  });
});
breakfastBtn.addEventListener("click", () => {
  document.getElementById("app").innerHTML = ``;
  displayMenu.forEach(e => {
    if (e.category === "breakfast") {
      document.getElementById("app").innerHTML += e.code;
    }
  });
});
drinkBtn.addEventListener("click", () => {
  document.getElementById("app").innerHTML = ``;
  displayMenu.forEach(e => {
    if (e.category === "drink") {
      document.getElementById("app").innerHTML += e.code;
    }
  });
});
