import { createProduct } from "./firebase.js";

const form = document.querySelector("form");

form.addEventListener("submit", async function addProduct(e) {
  e.preventDefault();

  const elements = form.elements;
  const file = elements["image"].files[0];

  const values = {
    name: elements["name"].value,
    price: elements["price"].value,
    description: elements["description"].value,
    stock: elements["stock"].value,
    category: elements["category"].value,
    image: file.name,
    createdAt: new Date().toISOString(),
  };
  createProduct(values);
  alert("✅ Produkt dodany!");
  form.reset();
});
