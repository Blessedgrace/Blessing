/* ------------------------- script.js ------------------------- */
<button class="btn ghost" onclick="deleteProduct('${p.id}')">Delete</button>
</div>
`
container.appendChild(el)
})
}


function editProduct(id){
const prod = getProducts().find(p=>p.id===id)
if(!prod) return
openAdminSection()
showDashboard()
byId('productId').value = prod.id
byId('productTitle').value = prod.title
byId('productPrice').value = prod.price
byId('productImage').value = prod.img
byId('productDesc').value = prod.desc
window.scrollTo({top:0,behavior:'smooth'})
}
function deleteProduct(id){
if(!confirm('Delete this product?')) return
const products = getProducts().filter(p=>p.id!==id)
saveProducts(products)
renderProducts()
}


function openAdminAndEdit(id){
openAdminSection(); showDashboard(); editProduct(id)
}


// --- Messages ---
function getMessages(){return JSON.parse(localStorage.getItem(CONTACT_KEY) || '[]')}
function renderMessages(){
const box = byId('messagesList')
const arr = getMessages()
box.innerHTML = arr.length? arr.map(m=>`<div class="card"><strong>${escapeHtml(m.name)}</strong> <div class="text-muted">${new Date(m.at).toLocaleString()}</div><p>${escapeHtml(m.message)}</p><div class="meta"><button class='btn ghost' onclick="deleteMessage('${m.id}')">Delete</button></div></div>`).join('') : '<div class="text-muted">No messages</div>'
}
function renderMessagesIfOpen(){ if(!byId('admin').classList.contains('hidden')) renderMessages() }
function deleteMessage(id){ if(!confirm('Delete message?')) return; const arr = getMessages().filter(m=>m.id!==id); localStorage.setItem(CONTACT_KEY,JSON.stringify(arr)); renderMessages(); }


// --- small utilities ---
function escapeHtml(s){ return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])) }