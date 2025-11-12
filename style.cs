/* ------------------------- style.css ------------------------- */
:root{
--bg:#fff;
--text:#333;
--accent:#FFD700; /* solar yellow */
--muted:#666;
--max-width:1100px;
}
*{box-sizing:border-box}
body{font-family:Inter,system-ui,Segoe UI,Roboto,"Helvetica Neue",Arial;margin:0;color:var(--text);background:var(--bg);-webkit-font-smoothing:antialiased}
.container{max-width:var(--max-width);margin:0 auto;padding:1rem}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0}
.brand{font-weight:700;font-size:1.2rem}
.brand span{color:var(--accent)}
.nav{display:flex;gap:1rem}
.nav a{color:var(--text);text-decoration:none}
.nav-toggle{display:none;background:none;border:0;font-size:1.2rem}
.hero{background:linear-gradient(180deg, #f7fbff, #fff);padding:3rem 0;text-align:center}
.hero h1{font-size:2rem;margin:0 0 .5rem}
.btn{display:inline-block;padding:.6rem 1rem;border-radius:8px;text-decoration:none;border:1px solid transparent;cursor:pointer}
.btn.primary{background:var(--accent);color:#111;border-color:rgba(0,0,0,.08)}
.btn.ghost{background:transparent;border:1px solid #ddd}
.products-section{padding:2rem 0}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
.card{background:#fff;border:1px solid #eee;padding:1rem;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.03)}
.card img{width:100%;height:150px;object-fit:cover;border-radius:6px}
.card h4{margin:.5rem 0}
.about{padding:2rem 0}
.contact{padding:2rem 0}
.form label{display:block;margin-bottom:.6rem}
.form input,.form textarea{width:100%;padding:.5rem;border:1px solid #ddd;border-radius:6px}
.form-actions{margin-top:.6rem;display:flex;gap:.5rem}
.notice{padding:.6rem;border-radius:6px;background:#e6ffed;border:1px solid #b7f0c1;color:#1b6b2b}
.hidden{display:none}
.site-footer{border-top:1px solid #f0f0f0;padding:1rem 0;margin-top:2rem}
.footer-inner{display:flex;justify-content:space-between;align-items:center}
.admin{background:#fafafa;border-left:4px solid var(--accent);padding:1rem;margin-top:1rem}
.admin-login{max-width:480px;margin:0 auto}
.dash-header{display:flex;justify-content:space-between;align-items:center}
.admin-grid{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.admin .card{display:flex;flex-direction:column}
.admin .card .meta{margin-top:auto;display:flex;gap:.5rem}
.messages-list{display:flex;flex-direction:column;gap:.5rem}
@media(max-width:800px){
.nav{display:none}
.nav-toggle{display:block}
.hero h1{font-size:1.5rem}
.footer-inner{flex-direction:column;gap:.5rem}
}


/* small utilities */
.text-muted{color:var(--muted);font-size:.9rem}