import { createProduct } from "./firebase.js";

const form = document.querySelector("form");

form.addEventListener("submit", async function addProduct(e) {
  e.preventDefault();

  const elements = form.elements;
  const file = elements["image"].files[0];

  if (!file) {
    alert("Dodaj obrazek rośliny.");
    return;
  }

  // Prześlij plik i pobierz URL
  const imageUrl = await uploadImage(file);

  const values = {
    name: elements["name"].value,
    price: elements["price"].value,
    description: elements["description"].value,
    stock: elements["stock"].value,
    category: elements["category"].value,
    image: imageUrl,
    createdAt: new Date().toISOString(),
  };

  createProduct(values);
  console.log(values);
  alert("✅ Produkt dodany!");
  form.reset();
});

async function uploadImage(file) {
  const { storage, storageRef, uploadBytes, getDownloadURL } = await import(
    "./firebase.js"
  );
  const refInStorage = storageRef(storage, "products/" + file.name);

  await uploadBytes(refInStorage, file);
  const url = await getDownloadURL(refInStorage);
  return url;
}
