// Basic interactivity: mobile menu toggle + product rendering + "View" modal
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  if(nav.classList.contains('open')) nav.style.display = 'flex';
  else nav.style.display = '';
});

// Year footer
document.getElementById('year').textContent = new Date().getFullYear();

// Sample product data (you can replace images/text with your own)
const products = [
  { id:1, title: "Regal Gold", price: "₹4,299", img: "assests/watchimg1.jpg", desc: "A sophisticated gold-tone timepiece with a champagne dial, luminous hands, and a polished bezel. Designed for those who appreciate classic luxury."},
  { id:2, title: "Classic Steel", price: "₹5,499", img: "assests/watchimg2.jpg", desc: "A minimalist silver watch featuring a brushed steel case and a soft gradient dial. Refined, understated, and timeless."},
  { id:3, title: "Midnight Chronograph", price: "₹6,199", img: "assests/watchimg3.jpg", desc: "Matte black chronograph with precision sub-dials and a textured leather strap. Built for performance with a sleek, stealth look."},
  { id:4, title: "Sportline", price: "₹3,999", img: "assests/watchimg4.jpg", desc: "Stainless steel sport watch with a black dial and silver accents. Combines durability and elegance for everyday wear."},
  { id:5, title: "Imperial Blue", price: "₹4,899", img: "assests/watchimg5.jpg", desc: "Deep navy dial with gold Roman numerals, framed in a polished gold bracelet. A statement piece that exudes confidence."},
  { id:6, title: "Rose Luxe", price: "₹6,999", img: "assests/watchimg6.jpg", desc: "All black stealth looExquisite rose-gold timepiece adorned with crystal accents around the bezel. A perfect blend of elegance and sophistication."}
];

const grid = document.getElementById('productsGrid');
const template = document.getElementById('productTemplate');

function renderProducts() {
  products.forEach(p => {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector('.product-card');
    clone.querySelector('img').src = p.img;
    clone.querySelector('img').alt = p.title;
    clone.querySelector('.p-title').textContent = p.title;
    clone.querySelector('.p-desc').textContent = p.desc;
    clone.querySelector('.price').textContent = p.price;
    const viewBtn = clone.querySelector('.view-btn');
    viewBtn.addEventListener('click', () => openModal(p));
    grid.appendChild(clone);
  });
}

function openModal(product) {
  // Simple modal using window.alert for minimalism (no extra libs or DOM insertion)
  const message = `${product.title}\n\n${product.desc}\n\nPrice: ${product.price}\n\n(Replace this alert with a custom modal if required)`;
  alert(message);
}

renderProducts();
