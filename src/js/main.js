import { getProducts } from "./firebase.js";

const productsList = document.querySelector("#products-list");
const counter = document.querySelector(".counter");

getProducts((data) => {
  if (!data) return;
  productsList.innerHTML = "";
  Object.entries(data).forEach(([key, product]) => {
    product.id = key;
    const productElement = createProductElement(product);
    productsList.appendChild(productElement);

    setTimeout(() => {
      const btn = productElement.querySelector(".cart-button");
      if (cart.hasItem(product.id)) {
        updateCartButton(btn, true);
      }
    }, 0);
  });
});

function createProductElement(product) {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <div>
      <img src="public/images/${product.image}" alt="${product.name}" width="180"/>
    </div>
    <div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>${product.price} zł</strong>
      <p><em>${product.category}</em></p>
      <div>      
        <button class="button cart-button" 
          data-id="${product.id}" 
          data-name="${product.name}" 
          data-price="${product.price}">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  `;
  return div;
}

function createCart() {
  const items = new Map();

  const refreshProductCount = () => {
    counter.textContent = items.size;
  };
  const updateStore = () => {
    localStorage.setItem("items", JSON.stringify(Array.from(items.entries())));
  };

  const setItems = (entriesArray) => {
    items.clear();
    for (const [id, item] of entriesArray) {
      items.set(id, item);
    }

    refreshProductCount();
    updateStore();
  };

  const add = (id, name, price, quantity = 1) => {
    items.set(id, { id, name, price, quantity });
    refreshProductCount();
    updateStore();
  };

  const remove = (id) => {
    items.delete(id);
    refreshProductCount();
    updateStore();
  };

  const hasItem = (id) => items.has(id);

  return { add, remove, setItems, hasItem };
}

const cart = createCart();

const startItems = JSON.parse(localStorage.getItem("items"));

if (startItems) {
  cart.setItems(startItems);
}

const updateCartButton = (element, inCart) => {
  element.classList.toggle("in-cart", inCart);
  element.innerHTML = inCart ? "Usuń z koszyka" : "Dodaj do koszyka";
};

const addToCartHandler = (e) => {
  const btn = e.target.closest(".cart-button");
  if (!btn) return;

  const { id, name, price } = btn.dataset;
  const numericPrice = +price;

  const inCart = cart.hasItem(id);

  if (inCart) {
    cart.remove(id);
  } else {
    cart.add(id, name, numericPrice);
  }

  updateCartButton(btn, !inCart);
};

productsList.addEventListener("click", addToCartHandler);
