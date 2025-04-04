import { getProducts } from "./firebase.js";

const productsList = document.querySelector("#products-list");

getProducts((data) => {
  if (!data) return;

  productsList.innerHTML = ""; // czyść listę przed renderowaniem

  Object.values(data).forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    console.log(product);
    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>${product.price} zł</strong>
        <p><em>${product.category}</em></p>
        <img src="../../public/images/${product.image}" alt="${product.name}" width="150"/>
      `;

    productsList.appendChild(div);
  });
});
