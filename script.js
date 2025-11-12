// Frontend JavaScript — connected to backend API
const API_BASE = "https://blessing-backend-ywyu.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
  byId("year").textContent = new Date().getFullYear();
  setupNavToggle();
  loadProducts();
  setupContactForm();
  setupAdmin();
});

function byId(id) {
  return document.getElementById(id);
}

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
    const data = await res.json();
    grid.innerHTML = "";
    data.forEach((p) => {
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
    renderAdminProducts(data);
  } catch (err) {
    grid.innerHTML = "<p>Error loading products.</p>";
  }
}

// --- Contact Form ---
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
        body: JSON.stringify(payload),
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

// --- Admin ---
function setupAdmin() {
  byId("adminLink").addEventListener("click", (e) => {
    e.preventDefault();
    byId("admin").classList.remove("hidden");
    document.querySelector("header").classList.add("hidden");
  });

  byId("closeAdmin").addEventListener("click", closeAdmin);
  byId("loginForm").addEventListener("submit", handleLogin);
  byId("logoutBtn").addEventListener("click", closeAdmin);
  byId("productForm").addEventListener("submit", saveProduct);
  byId("clearProduct").addEventListener("click", () => {
    byId("productForm").reset();
    byId("productId").value = "";
  });
}

function closeAdmin() {
  byId("admin").classList.add("hidden");
  document.querySelector("header").classList.remove("hidden");
}

async function handleLogin(e) {
  e.preventDefault();
  const u = e.target.username.value.trim();
  const p = e.target.password.value.trim();
  const res = await fetch(`${API_BASE}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: u, password: p }),
  });
  const data = await res.json();
  if (data.success) {
    byId("adminLogin").classList.add("hidden");
    byId("dashboard").classList.remove("hidden");
    loadProducts();
    loadMessages();
  } else {
    alert("Invalid credentials");
  }
}

async function saveProduct(e) {
  e.preventDefault();
  const id = byId("productId").value;
  const title = byId("productTitle").value;
  const price = +byId("productPrice").value;
  const img = byId("productImage").value;
  const desc = byId("productDesc").value;

  const payload = { title, price, img, desc };

  try {
    const res = await fetch(`${API_BASE}/api/products${id ? "/" + id : ""}`, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      await loadProducts();
      byId("productForm").reset();
      byId("productId").value = "";
    }
  } catch (err) {
    alert("Error saving product");
  }
}

function renderAdminProducts(products) {
  const grid = byId("adminProducts");
  if (!grid) return;
  grid.innerHTML = "";
  products.forEach((p) => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h4>${p.title}</h4>
      <p>₦${p.price.toLocaleString()}</p>
      <p>${p.desc}</p>
      <div class="meta">
        <button class="btn" onclick="editProduct('${p.id}')">Edit</button>
        <button class="btn ghost" onclick="deleteProduct('${p.id}')">Delete</button>
      </div>
    `;
    grid.appendChild(el);
  });
}

async function editProduct(id) {
  const res = await fetch(`${API_BASE}/api/products`);
  const products = await res.json();
  const p = products.find((x) => x.id === id);
  if (!p) return;
  byId("productId").value = p.id;
  byId("productTitle").value = p.title;
  byId("productPrice").value = p.price;
  byId("productImage").value = p.img;
  byId("productDesc").value = p.desc;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function deleteProduct(id) {
  if (!confirm("Delete this product?")) return;
  await fetch(`${API_BASE}/api/products/${id}`, { method: "DELETE" });
  await loadProducts();
}

async function loadMessages() {
  const res = await fetch(`${API_BASE}/api/messages`);
  const data = await res.json();
  const box = byId("messagesList");
  box.innerHTML = data.length
    ? data
        .map(
          (m) => `
        <div class="card">
          <strong>${m.name}</strong>
          <div class="text-muted">${new Date(m.at).toLocaleString()}</div>
          <p>${m.message}</p>
        </div>`
        )
        .join("")
    : "<p>No messages</p>";
}
