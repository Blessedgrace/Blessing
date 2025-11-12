// Frontend JS for public view — fetches products and sends contact messages
const API_BASE = "https://blessing-backend-ywyu.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
  byId("year").textContent = new Date().getFullYear();
  setupNavToggle();
  loadProducts();
  setupContactForm();
});

function byId(id) { return document.getElementById(id); }

// --- Navigation ---
function setupNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

// --- Load products ---
async function loadProducts() {
  const grid = byId("productsGrid");
  grid.innerHTML = "<p>Loading products...</p>";
  try {
    const res = await fetch(`${API_BASE}/api/products`);
    const products = await res.json();
    grid.innerHTML = "";
    products.forEach(p => {
      const el = document.createElement("div");
      el.className = "card";
      el.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h4>${p.title}</h4>
        <p>₦${p.price.toLocaleString()}</p>
        <p>${p.desc}</p>
      `;
      grid.appendChild(el);
    });
  } catch (err) {
    grid.innerHTML = "<p>Error loading products.</p>";
  }
}

// --- Contact form ---
function setupContactForm() {
  const form = byId("contactForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch(`${API_BASE}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        byId("contactSuccess").classList.remove("hidden");
        form.reset();
        setTimeout(() => byId("contactSuccess").classList.add("hidden"), 3000);
      }
    } catch (err) {
      alert("Error sending message");
    }
  });
}
