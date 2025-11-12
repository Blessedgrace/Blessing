/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Roboto:wght@400;500&display=swap');

/* Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: #F9F9F9;
  color: #333333;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 2rem 0;
}

/* Header */
.site-header {
  background-color: #006400;
  color: #fff;
  padding: 1rem 0;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
}

.brand span {
  color: #FFD700;
}

.nav a {
  color: #fff;
  margin-left: 1.5rem;
  text-decoration: none;
  font-weight: 500;
}

.nav a:hover {
  color: #FF7A00;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #fff;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0,100,0,0.6), rgba(0,100,0,0.6)), url('https://images.unsplash.com/photo-1581091012184-7a66a2f7f6c5') center/cover no-repeat;
  color: #fff;
  text-align: center;
  padding: 6rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn.primary {
  background-color: #FF7A00;
  color: #fff;
}

.btn.primary:hover {
  background-color: #e06b00;
}

.btn.ghost {
  background-color: transparent;
  border: 2px solid #FF7A00;
  color: #FF7A00;
}

.btn.ghost:hover {
  background-color: #FF7A00;
  color: #fff;
}

/* Products */
.products-section h2,
.about h2,
.contact h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #006400;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h4 {
  font-family: 'Montserrat', sans-serif;
  margin: 1rem;
  font-size: 1.2rem;
  color: #006400;
}

.card p {
  margin: 0 1rem 1rem 1rem;
  color: #666;
}

/* About */
.about p {
  font-size: 1rem;
  color: #444;
}

/* Contact */
.contact .form {
  display: flex;
  flex-direction: column;
}

.contact .form label {
  margin-bottom: 1rem;
  font-weight: 500;
}

.contact input,
.contact textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  margin-top: 0.25rem;
  transition: border 0.3s;
}

.contact input:focus,
.contact textarea:focus {
  border-color: #FF7A00;
  outline: none;
}

.form-actions {
  margin-top: 1rem;
}

.notice {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 8px;
}

.hidden {
  display: none;
}

/* Footer */
.site-footer {
  background-color: #006400;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
}

.site-footer a {
  color: #FFD700;
  text-decoration: none;
}

.site-footer a:hover {
  color: #FF7A00;
}

/* Responsive */
@media(max-width:768px) {
  .nav {
    display: none;
    flex-direction: column;
    background-color: #006400;
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
    padding: 1rem;
    border-radius: 8px;
  }
  .nav.open {
    display: flex;
  }
  .nav a {
    margin: 0.5rem 0;
  }
  .nav-toggle {
    display: block;
  }
  .hero h1 {
    font-size: 2rem;
  }
  .hero p {
    font-size: 1rem;
  }
}
