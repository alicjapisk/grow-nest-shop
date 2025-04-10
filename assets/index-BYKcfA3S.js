import{initializeApp as g}from"https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";import{getFirestore as h,onSnapshot as b,collection as y}from"https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const I={apiKey:"AIzaSyBLgMlecmSzmpOkUh2OelEkITyWo2iHlaI",authDomain:"grow-nest-shop.firebaseapp.com",databaseURL:"https://grow-nest-shop-default-rtdb.firebaseio.com",projectId:"grow-nest-shop",storageBucket:"grow-nest-shop.firebasestorage.app",messagingSenderId:"277394138239",appId:"1:277394138239:web:4435c394d7db7509858b4a",measurementId:"G-KGY1JP1SGN"},v=g(I),L=h(v);function S(e){b(y(L,"products"),t=>{const r={};t.forEach(n=>{r[n.id]=n.data()}),e(r)})}const u=document.querySelector("#products-list"),O=document.querySelector(".counter");S(e=>{e&&(u.innerHTML="",Object.entries(e).forEach(([t,r])=>{r.id=t;const n=z(r);u.appendChild(n),setTimeout(()=>{const o=n.querySelector(".cart-button");c.hasItem(r.id)&&f(o,!0)},0)}))});function z(e){const t=document.createElement("div");return t.classList.add("product"),t.innerHTML=`
    <div>
      <img src="public/images/${e.image}" alt="${e.image}" width="180"/>
    </div>
    <div>
      <h3>${e.name}</h3>
      <p>${e.description}</p>
      <strong>${e.price} zł</strong>
      <p><em>${e.category}</em></p>
      <div>      
        <button class="button cart-button" 
          data-id="${e.id}" 
          data-name="${e.name}" 
          data-price="${e.price}">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  `,t}function P(){const e=new Map,t=()=>{O.textContent=e.size},r=()=>{localStorage.setItem("items",JSON.stringify(Array.from(e.entries())))};return{add:(i,d,m,p=1)=>{e.set(i,{id:i,name:d,price:m,quantity:p}),t(),r()},remove:i=>{e.delete(i),t(),r()},setItems:i=>{e.clear();for(const[d,m]of i)e.set(d,m);t(),r()},hasItem:i=>e.has(i)}}const c=P(),l=JSON.parse(localStorage.getItem("items"));l&&c.setItems(l);const f=(e,t)=>{e.classList.toggle("in-cart",t),e.innerHTML=t?"Usuń z koszyka":"Dodaj do koszyka"},$=e=>{const t=e.target.closest(".cart-button");if(!t)return;const{id:r,name:n,price:o}=t.dataset,s=+o,a=c.hasItem(r);a?c.remove(r):c.add(r,n,s),f(t,!a)};u.addEventListener("click",$);
