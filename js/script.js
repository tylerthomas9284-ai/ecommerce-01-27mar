const SITE = "Ornava";
const KEY = {
  cart: "ornava-cart",
  wishlist: "ornava-wishlist",
  consent: "ornava-consent",
  forms: "ornava-forms",
  orders: "ornava-orders"
};

const NAV = [
  ["Home", "index.html"],
  ["Shop", "shop.html"],
  ["About", "about.html"],
  ["Services", "services.html"],
  ["FAQ", "faq.html"],
  ["Help", "help.html"],
  ["Contact", "contact.html"]
];

const FOOTER = [
  {
    title: "Shop",
    links: [
      ["Watches", "shop.html?category=Watches"],
      ["Sunglasses", "shop.html?category=Sunglasses"],
      ["Bags", "shop.html?category=Bags"],
      ["Jewelry", "shop.html?category=Jewelry"]
    ]
  },
  {
    title: "Support",
    links: [
      ["Help", "help.html"],
      ["Return Policy", "return-policy.html"],
      ["Feedback", "feedback.html"],
      ["Contact", "contact.html"]
    ]
  },
  {
    title: "Legal",
    links: [
      ["Terms", "terms.html"],
      ["Privacy", "privacy-policy.html"],
      ["Disclaimer", "disclaimer.html"],
      ["Cookies", "cookies.html"]
    ]
  }
];

const PRODUCTS = [
  {
    id: "manhattan-gold-watch",
    name: "Manhattan Gold Watch",
    category: "Watches",
    price: 148,
    rating: 4.9,
    reviews: 214,
    badge: "Best Seller",
    image: "https://unsplash.com/photos/V4764v5QvYs/download?force=true&w=1200",
    short: "Minimal gold-tone watch with a polished bracelet.",
    description: "A clean premium watch made for workdays, dinners, and gifting.",
    features: ["Quartz movement", "Gold-tone bracelet", "Everyday splash resistance"],
    specs: ["36 mm case", "Stainless-steel band", "Fold-over clasp"]
  },
  {
    id: "heritage-black-watch",
    name: "Heritage Black Watch",
    category: "Watches",
    price: 132,
    rating: 4.8,
    reviews: 167,
    badge: "Staff Pick",
    image: "https://unsplash.com/photos/zGL-ArgFYB0/download?force=true&w=1200",
    short: "Dress watch with a black dial and classic strap.",
    description: "A versatile formal-leaning watch with a refined profile.",
    features: ["Analog display", "Comfort strap", "Balanced proportions"],
    specs: ["38 mm case", "Leather-style band", "Quartz movement"]
  },
  {
    id: "riviera-aviator-sunglasses",
    name: "Riviera Aviator Sunglasses",
    category: "Sunglasses",
    price: 64,
    rating: 4.8,
    reviews: 121,
    badge: "Trending",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ray-Ban_Aviator_sunglasses.jpg",
    short: "Classic aviator sunglasses with tinted lenses.",
    description: "Lightweight sunglasses designed for daily wear and travel.",
    features: ["UV-protective lenses", "Slim frame", "Protective case"],
    specs: ["Medium fit", "Smoke tint", "Aviator shape"]
  },
  {
    id: "obsidian-square-sunglasses",
    name: "Obsidian Square Sunglasses",
    category: "Sunglasses",
    price: 59,
    rating: 4.7,
    reviews: 104,
    badge: "City Favorite",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aviator_sunglasses_2.jpg",
    short: "Dark square sunglasses for a sharper everyday look.",
    description: "A bold pair of sunglasses made to finish off city outfits and travel looks.",
    features: ["Tinted lenses", "Firm arms", "Structured case"],
    specs: ["Wide fit", "Dark lens", "Square profile"]
  },
  {
    id: "coastline-classic-sunglasses",
    name: "Coastline Classic Sunglasses",
    category: "Sunglasses",
    price: 54,
    rating: 4.6,
    reviews: 87,
    badge: "Summer Edit",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/RayBanAviator.jpg",
    short: "A clean classic frame built for bright days.",
    description: "Balanced proportions and easy styling make this pair a reliable everyday option.",
    features: ["Lightweight frame", "Protective pouch", "Daily wear comfort"],
    specs: ["Medium fit", "Classic frame", "Tinted lens"]
  },
  {
    id: "mercer-leather-handbag",
    name: "Mercer Leather Handbag",
    category: "Bags",
    price: 118,
    rating: 4.9,
    reviews: 193,
    badge: "Top Rated",
    image: "https://unsplash.com/photos/Y1Yjp0zY8ss/download?force=true&w=1200",
    short: "Structured black leather handbag with a clean silhouette.",
    description: "An everyday bag with premium structure and polished storage.",
    features: ["Top-handle shape", "Secure zip compartment", "Smooth finish"],
    specs: ["Leather-look exterior", "Black", "Daily essentials size"]
  },
  {
    id: "soho-structured-tote",
    name: "Soho Structured Tote",
    category: "Bags",
    price: 126,
    rating: 4.9,
    reviews: 176,
    badge: "Best Seller",
    image: "https://unsplash.com/photos/Y1Yjp0zY8ss/download?force=true&w=1200",
    short: "A structured tote with polished edges and daily capacity.",
    description: "Made for office days and elevated casual wear, this tote carries more without looking bulky.",
    features: ["Wide interior", "Structured profile", "Premium top handles"],
    specs: ["Large tote", "Black", "Workday carry"]
  },
  {
    id: "madison-top-handle-bag",
    name: "Madison Top Handle Bag",
    category: "Bags",
    price: 112,
    rating: 4.8,
    reviews: 148,
    badge: "New Arrival",
    image: "https://unsplash.com/photos/Y1Yjp0zY8ss/download?force=true&w=1200",
    short: "Compact top-handle bag with a premium structure.",
    description: "A polished bag that transitions easily from work meetings to evening plans.",
    features: ["Secure closure", "Structured body", "Refined hardware feel"],
    specs: ["Medium size", "Black", "Top handle"]
  },
  {
    id: "hudson-crossbody-bag",
    name: "Hudson Crossbody Bag",
    category: "Bags",
    price: 98,
    rating: 4.7,
    reviews: 133,
    badge: "Everyday Carry",
    image: "https://unsplash.com/photos/Y1Yjp0zY8ss/download?force=true&w=1200",
    short: "A compact crossbody for lighter daily carry.",
    description: "Streamlined and easy to style, this bag is built for errands, travel, and weekends.",
    features: ["Hands-free strap", "Compact interior", "Smooth finish"],
    specs: ["Crossbody", "Black", "Travel-ready"]
  },
  {
    id: "fifth-avenue-satchel",
    name: "Fifth Avenue Satchel",
    category: "Bags",
    price: 134,
    rating: 4.8,
    reviews: 119,
    badge: "Premium Pick",
    image: "https://unsplash.com/photos/Y1Yjp0zY8ss/download?force=true&w=1200",
    short: "A satchel silhouette with polished everyday storage.",
    description: "Sharp lines and reliable carry space make this a strong work-to-evening bag.",
    features: ["Dual handles", "Zip main section", "Clean structure"],
    specs: ["Satchel", "Black", "Daily essentials"]
  },
  {
    id: "gramercy-mini-bag",
    name: "Gramercy Mini Bag",
    category: "Bags",
    price: 88,
    rating: 4.6,
    reviews: 95,
    badge: "Gift Favorite",
    image: "https://unsplash.com/photos/Y1Yjp0zY8ss/download?force=true&w=1200",
    short: "A mini handbag with an upscale silhouette.",
    description: "Small enough for evening wear, refined enough for a premium gift.",
    features: ["Compact shape", "Premium handle", "Secure closure"],
    specs: ["Mini bag", "Black", "Evening carry"]
  },
  {
    id: "celeste-pendant-necklace",
    name: "Celeste Pendant Necklace",
    category: "Jewelry",
    price: 52,
    rating: 4.8,
    reviews: 132,
    badge: "Gift Favorite",
    image: "https://unsplash.com/photos/yhmDX4HQb6I/download?force=true&w=1200",
    short: "Delicate gold-tone pendant necklace.",
    description: "A lightweight necklace for layered or stand-alone styling.",
    features: ["Adjustable chain", "Daily-wear weight", "Gift pouch"],
    specs: ["18 in chain", "Gold tone", "Pendant style"]
  },
  {
    id: "solara-gold-bracelet",
    name: "Solara Gold Bracelet",
    category: "Jewelry",
    price: 46,
    rating: 4.7,
    reviews: 89,
    badge: "Everyday Edit",
    image: "https://unsplash.com/photos/0j5pnr2TGMs/download?force=true&w=1200",
    short: "Slim gold bracelet designed for easy stacking.",
    description: "A polished bracelet that pairs naturally with watches and rings.",
    features: ["Slim profile", "Secure clasp", "Stack-friendly"],
    specs: ["Adjustable fit", "Gold tone", "Bracelet style"]
  },
  {
    id: "luna-chain-necklace",
    name: "Luna Chain Necklace",
    category: "Jewelry",
    price: 58,
    rating: 4.8,
    reviews: 141,
    badge: "Layering Favorite",
    image: "https://unsplash.com/photos/yhmDX4HQb6I/download?force=true&w=1200",
    short: "A polished chain necklace for layered styling.",
    description: "Designed to sit cleanly at the collarbone and pair easily with other jewelry.",
    features: ["Adjustable chain", "Smooth finish", "Gift-ready pouch"],
    specs: ["Gold tone", "18 in", "Chain style"]
  },
  {
    id: "sienna-drop-necklace",
    name: "Sienna Drop Necklace",
    category: "Jewelry",
    price: 61,
    rating: 4.7,
    reviews: 113,
    badge: "New Arrival",
    image: "https://unsplash.com/photos/yhmDX4HQb6I/download?force=true&w=1200",
    short: "A pendant necklace with a slightly longer elegant drop.",
    description: "An easy dress-up piece that works for gifting and occasion styling.",
    features: ["Longer pendant drop", "Soft gold tone", "Lightweight wear"],
    specs: ["20 in chain", "Pendant", "Gold finish"]
  },
  {
    id: "marina-link-bracelet",
    name: "Marina Link Bracelet",
    category: "Jewelry",
    price: 49,
    rating: 4.6,
    reviews: 97,
    badge: "Stack Edit",
    image: "https://unsplash.com/photos/0j5pnr2TGMs/download?force=true&w=1200",
    short: "A slim link bracelet with polished shine.",
    description: "A refined bracelet that adds subtle shine without overpowering a look.",
    features: ["Link design", "Secure clasp", "Easy to stack"],
    specs: ["Adjustable", "Gold tone", "Bracelet"]
  },
  {
    id: "aria-cuff-bracelet",
    name: "Aria Cuff Bracelet",
    category: "Jewelry",
    price: 55,
    rating: 4.7,
    reviews: 106,
    badge: "Customer Favorite",
    image: "https://unsplash.com/photos/0j5pnr2TGMs/download?force=true&w=1200",
    short: "An open cuff bracelet with a clean premium finish.",
    description: "Simple and polished, this cuff is built for minimal styling and gifting.",
    features: ["Open cuff style", "Smooth finish", "All-day comfort"],
    specs: ["Cuff bracelet", "Gold tone", "Slip-on fit"]
  },
  {
    id: "regent-silver-watch",
    name: "Regent Silver Watch",
    category: "Watches",
    price: 139,
    rating: 4.8,
    reviews: 158,
    badge: "Refined Pick",
    image: "https://unsplash.com/photos/V4764v5QvYs/download?force=true&w=1200",
    short: "A polished silver-tone watch with a minimal dial.",
    description: "Clean proportions and a brushed dial make this a versatile everyday watch.",
    features: ["Quartz movement", "Silver-tone finish", "Easy clasp"],
    specs: ["36 mm case", "Metal bracelet", "Silver tone"]
  },
  {
    id: "brooklyn-classic-watch",
    name: "Brooklyn Classic Watch",
    category: "Watches",
    price: 128,
    rating: 4.7,
    reviews: 134,
    badge: "Daily Essential",
    image: "https://unsplash.com/photos/zGL-ArgFYB0/download?force=true&w=1200",
    short: "A clean dress watch with versatile everyday appeal.",
    description: "A dependable classic designed to work with office wear and smart casual outfits.",
    features: ["Clean dial", "Comfort strap", "Slim profile"],
    specs: ["38 mm case", "Black strap", "Quartz"]
  },
  {
    id: "lexington-chrono-watch",
    name: "Lexington Chrono Watch",
    category: "Watches",
    price: 156,
    rating: 4.8,
    reviews: 147,
    badge: "Premium Pick",
    image: "https://unsplash.com/photos/V4764v5QvYs/download?force=true&w=1200",
    short: "A larger premium watch with stronger wrist presence.",
    description: "Designed for shoppers who want a more assertive watch without losing elegance.",
    features: ["Larger dial", "Premium bracelet feel", "Reliable movement"],
    specs: ["40 mm case", "Gold tone", "Bracelet closure"]
  },
  {
    id: "chelsea-petite-watch",
    name: "Chelsea Petite Watch",
    category: "Watches",
    price: 122,
    rating: 4.6,
    reviews: 102,
    badge: "Petite Fit",
    image: "https://unsplash.com/photos/V4764v5QvYs/download?force=true&w=1200",
    short: "A smaller watch with a refined premium finish.",
    description: "A compact timepiece built for understated elegance and daily wear.",
    features: ["Petite profile", "Minimal dial", "Lightweight bracelet"],
    specs: ["32 mm case", "Gold tone", "Quartz"]
  },
  {
    id: "uptown-dress-watch",
    name: "Uptown Dress Watch",
    category: "Watches",
    price: 144,
    rating: 4.8,
    reviews: 126,
    badge: "Formal Favorite",
    image: "https://unsplash.com/photos/zGL-ArgFYB0/download?force=true&w=1200",
    short: "A dress-focused watch with a dark dial and sharp finish.",
    description: "Ideal for dinners, formal events, and sharper wardrobe pairings.",
    features: ["Formal styling", "Slim case", "Clean strap finish"],
    specs: ["39 mm case", "Dark dial", "Leather-style strap"]
  },
  {
    id: "hudson-pilot-sunglasses",
    name: "Hudson Pilot Sunglasses",
    category: "Sunglasses",
    price: 62,
    rating: 4.7,
    reviews: 92,
    badge: "Travel Favorite",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ray-Ban_Aviator_sunglasses.jpg",
    short: "Pilot-style sunglasses with clean metal lines.",
    description: "A travel-ready pair with a classic aviator-inspired profile and lightweight feel.",
    features: ["Pilot frame", "Tinted lens", "Structured case"],
    specs: ["Medium fit", "Metal frame", "Tinted lens"]
  },
  {
    id: "marina-tint-sunglasses",
    name: "Marina Tint Sunglasses",
    category: "Sunglasses",
    price: 57,
    rating: 4.6,
    reviews: 84,
    badge: "Weekend Edit",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/RayBanAviator.jpg",
    short: "A soft classic sunglass frame for coastal and city wear.",
    description: "An easy-wearing pair built for warm-weather outfits and lighter styling.",
    features: ["Classic frame", "Tinted lens", "Lightweight build"],
    specs: ["Medium fit", "Tinted lens", "Classic profile"]
  }
];

const TESTIMONIALS = [
  ["Avery Collins", "Austin, TX", "The handbag quality felt premium and shipping was quick."],
  ["Jordan Brooks", "Seattle, WA", "The watch looks more expensive than it is and checkout was smooth."],
  ["Mia Reynolds", "Miami, FL", "The listing photos matched what arrived, which matters."]
];

const SERVICES = [
  ["Fast USA Delivery", "Orders ship quickly across the United States with tracking updates."],
  ["Easy Returns", "Eligible unused items can be returned within 7 to 10 days."],
  ["24/7 Customer Support", "Support is available for order help, returns, and product questions."],
  ["Secure Payments", "Checkout supports cards, PayPal, UPI, and COD on eligible orders."]
];

const FAQS = [
  ["How long does shipping take?", "Most USA orders arrive within 3 to 7 business days."],
  ["What is the return window?", "Eligible unused items can be returned within 7 to 10 days of delivery."],
  ["Which payment methods do you accept?", "Cards, PayPal, UPI where available, and Cash on Delivery."],
  ["Do you offer weekend support?", "Yes. Ornava customer support is available 24/7."]
];

const HELP = [
  ["Order Tracking", "Monitor shipment progress and delivery estimates."],
  ["Returns and Refunds", "Review return steps, timelines, and eligibility."],
  ["Payment Assistance", "Get help with cards, PayPal, UPI, or COD."],
  ["Product Guidance", "Ask for help choosing a gift or matching an accessory."]
];

const PAYMENT_OPTIONS = ["Credit / Debit Card", "PayPal", "UPI", "Cash on Delivery"];

function $(selector, scope = document) {
  return scope.querySelector(selector);
}

function $$(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

function storeGet(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function storeSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCart() {
  return storeGet(KEY.cart, []);
}

function setCart(items) {
  storeSet(KEY.cart, items);
}

function getWishlist() {
  return storeGet(KEY.wishlist, []);
}

function setWishlist(items) {
  storeSet(KEY.wishlist, items);
}

function getConsent() {
  return storeGet(KEY.consent, null);
}

function setConsent(value) {
  storeSet(KEY.consent, value);
}

function getProduct(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function saveBucket(key, payload) {
  const items = storeGet(key, []);
  items.push({ ...payload, createdAt: new Date().toISOString() });
  storeSet(key, items);
}

function toast(message) {
  let node = $("[data-toast]");
  if (!node) {
    node = document.createElement("div");
    node.className = "toast";
    node.dataset.toast = "true";
    document.body.appendChild(node);
  }
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 2200);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function syncBadges() {
  $$("[data-cart-count]").forEach((node) => {
    const count = cartCount();
    node.textContent = String(count);
    node.hidden = count === 0;
  });
  $$("[data-wishlist-count]").forEach((node) => {
    const count = getWishlist().length;
    node.textContent = String(count);
    node.hidden = count === 0;
  });
}

function syncWishlistButtons() {
  const wishlist = getWishlist();
  $$("[data-wishlist-id]").forEach((button) => {
    const active = wishlist.includes(button.dataset.wishlistId);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === id);
  if (item) item.qty += qty;
  else cart.push({ id, qty });
  setCart(cart.filter((entry) => entry.qty > 0));
  syncBadges();
}

function setQty(id, qty) {
  const cart = getCart().map((item) => item.id === id ? { ...item, qty } : item);
  setCart(cart.filter((item) => item.qty > 0));
  syncBadges();
}

function toggleWishlist(id) {
  const current = getWishlist();
  const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
  setWishlist(next);
  syncBadges();
  syncWishlistButtons();
  return next.includes(id);
}

function totals() {
  const subtotal = getCart().reduce((sum, item) => {
    const product = getProduct(item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 9;
  const tax = subtotal * 0.0825;
  return { subtotal, shipping, tax, total: subtotal + shipping + tax };
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-media" href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" referrerpolicy="no-referrer" />
      </a>
      <div class="product-body">
        <div class="product-head">
          <span class="chip">${product.badge}</span>
          <button class="icon-circle" type="button" data-wishlist-id="${product.id}" aria-label="Save ${product.name}" aria-pressed="false">&#9829;</button>
        </div>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p class="meta-line">${product.category} <span>*</span> ${product.rating} / 5</p>
        <p class="product-copy">${product.short}</p>
        <div class="product-foot">
          <div>
            <strong class="price">${money(product.price)}</strong>
            <span class="review-count">${product.reviews} reviews</span>
          </div>
          <button class="btn" type="button" data-add-cart="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function bindProductButtons(scope = document) {
  $$("[data-add-cart]", scope).forEach((button) => {
    button.onclick = () => {
      const product = getProduct(button.dataset.addCart);
      if (!product) return;
      addToCart(product.id, 1);
      toast(`${product.name} added to cart.`);
    };
  });
  $$("[data-wishlist-id]", scope).forEach((button) => {
    button.onclick = () => {
      const product = getProduct(button.dataset.wishlistId);
      if (!product) return;
      const active = toggleWishlist(product.id);
      toast(active ? `${product.name} saved to wishlist.` : `${product.name} removed from wishlist.`);
    };
  });
}

function renderHeader() {
  const root = $("[data-site-header]");
  if (!root) return;
  const current = document.body.dataset.page || "";
  root.innerHTML = `
    <header class="site-header">
      <div class="utility-bar">
        <div class="container utility-inner">
          <span>Premium accessories for USA shoppers</span>
          <span>Free shipping over $150 * Secure checkout * Easy returns</span>
        </div>
      </div>
      <div class="container">
        <nav class="main-nav" data-nav>
          <a class="brand" href="index.html" aria-label="${SITE} home">
            <span class="brand-mark">O</span>
            <span class="brand-copy">${SITE}</span>
          </a>
          <div class="nav-links">
            ${NAV.map(([label, href]) => `<a class="${current === href ? "active" : ""}" href="${href}">${label}</a>`).join("")}
          </div>
          <div class="nav-tools">
            <form class="search-form" data-site-search>
              <input type="search" name="query" placeholder="Search watches, bags, jewelry..." aria-label="Search products" />
              <button class="icon-circle" type="submit" aria-label="Search">Go</button>
            </form>
            <a class="nav-pill" href="shop.html">
              <span>Wishlist</span>
              <span class="counter" data-wishlist-count hidden>0</span>
            </a>
            <a class="nav-pill" href="cart.html">
              <span>Cart</span>
              <span class="counter" data-cart-count hidden>0</span>
            </a>
            <button class="menu-toggle" type="button" data-nav-toggle>Menu</button>
          </div>
        </nav>
      </div>
    </header>
  `;
  $("[data-nav-toggle]", root)?.addEventListener("click", () => {
    $("[data-nav]", root)?.classList.toggle("open");
  });
}

function renderNewsletter() {
  const root = $("[data-newsletter]");
  if (!root) return;
  root.innerHTML = `
    <section class="newsletter-wrap">
      <div class="container">
        <div class="newsletter-card">
          <div>
            <p class="eyebrow">Newsletter</p>
            <h2>Join Ornava for new drops and first-order perks.</h2>
            <p>Get launch alerts, curated accessory edits, and limited offers.</p>
          </div>
          <form class="newsletter-form" data-newsletter-form data-form-type="newsletter">
            <input class="field" type="email" name="email" placeholder="Email address" required />
            <button class="btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  const root = $("[data-site-footer]");
  if (!root) return;
  root.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand" href="index.html">
            <span class="brand-mark">O</span>
            <span class="brand-copy">${SITE}</span>
          </a>
          <p>Modern accessories with premium presentation, fast USA delivery, and clear policies.</p>
          <p>350 Fifth Avenue, Suite 2100, New York, NY 10118</p>
          <p><a href="mailto:support@ornava.site">support@ornava.site</a> * <a href="tel:+12125550189">(212) 555-0189</a></p>
          <div class="social-row">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
            <a href="#" aria-label="TikTok">TikTok</a>
          </div>
        </div>
        <div class="footer-links">
          ${FOOTER.map((group) => `<div><strong>${group.title}</strong>${group.links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div>`).join("")}
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 ${SITE}. All rights reserved.</span>
        <span>Cards * PayPal * UPI * COD</span>
      </div>
    </footer>
  `;
}

function renderCookieBanner() {
  if (getConsent()) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="cookie-banner" data-cookie-banner>
      <div>
        <strong>Cookie consent</strong>
        <p>Ornava uses cookies for cart persistence, analytics, and a smoother shopping experience.</p>
      </div>
      <div class="cookie-actions">
        <button class="btn-secondary" type="button" data-cookie-action="reject">Reject</button>
        <button class="btn" type="button" data-cookie-action="accept">Accept</button>
      </div>
    </div>
  `);
}

function fillStaticSections() {
  const featured = $("[data-featured-products]");
  if (featured) featured.innerHTML = PRODUCTS.slice(0, 4).map(productCard).join("");

  const grid = $("[data-product-grid]");
  if (grid) {
    const limit = Number(grid.dataset.limit || PRODUCTS.length);
    const category = grid.dataset.category || "";
    const items = category ? PRODUCTS.filter((product) => product.category === category) : PRODUCTS;
    grid.innerHTML = items.slice(0, limit).map(productCard).join("");
  }

  const testimonials = $("[data-testimonials]");
  if (testimonials) {
    testimonials.innerHTML = TESTIMONIALS.map(([name, city, quote]) => `
      <article class="testimonial-card">
        <p>"${quote}"</p>
        <strong>${name}</strong>
        <span>${city}</span>
      </article>
    `).join("");
  }

  const services = $("[data-services-grid]");
  if (services) {
    services.innerHTML = SERVICES.map(([title, copy]) => `<article class="info-card"><h3>${title}</h3><p>${copy}</p></article>`).join("");
  }

  const faqs = $("[data-faq-accordion]");
  if (faqs) {
    faqs.innerHTML = FAQS.map(([question, answer], index) => `
      <details class="faq-item" ${index === 0 ? "open" : ""}>
        <summary>${question}</summary>
        <p>${answer}</p>
      </details>
    `).join("");
  }

  const help = $("[data-help-grid]");
  if (help) {
    help.innerHTML = HELP.map(([title, copy]) => `<article class="info-card"><h3>${title}</h3><p>${copy}</p></article>`).join("");
  }
}

function filterShop() {
  const grid = $("[data-shop-grid]");
  if (!grid) return;
  const term = ($("[data-shop-search]")?.value || "").trim().toLowerCase();
  const activeCategory = $(".filter-btn.active")?.dataset.category || "All";
  const items = PRODUCTS.filter((product) => {
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const haystack = `${product.name} ${product.category} ${product.short} ${product.description}`.toLowerCase();
    return categoryMatch && haystack.includes(term);
  });
  grid.innerHTML = items.length
    ? items.map(productCard).join("")
    : `<div class="empty-state">No products matched that search.</div>`;
  bindProductButtons(grid);
  syncWishlistButtons();
}

function initShop() {
  if (!$("[data-shop-grid]")) return;
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  const category = params.get("category");
  if (query && $("[data-shop-search]")) $("[data-shop-search]").value = query;
  if (category) {
    const button = $(`.filter-btn[data-category="${CSS.escape(category)}"]`);
    if (button) {
      $$(".filter-btn").forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
    }
  }
  $$(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".filter-btn").forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
      filterShop();
    });
  });
  $("[data-shop-search]")?.addEventListener("input", filterShop);
  filterShop();
}

function initProductPage() {
  const root = $("[data-product-detail]");
  if (!root) return;
  const product = getProduct(new URLSearchParams(window.location.search).get("id")) || PRODUCTS[0];
  root.innerHTML = `
    <div class="product-detail-grid">
      <div class="detail-image-card">
        <img src="${product.image}" alt="${product.name}" referrerpolicy="no-referrer" />
      </div>
      <div class="detail-copy-card">
        <p class="eyebrow">Product Detail</p>
        <h1>${product.name}</h1>
        <p class="meta-line">${product.category} <span>*</span> ${product.reviews} reviews</p>
        <p class="detail-price">${money(product.price)}</p>
        <p>${product.description}</p>
        <div class="detail-actions">
          <div class="qty-picker">
            <button type="button" data-qty="minus">-</button>
            <span data-qty-value>1</span>
            <button type="button" data-qty="plus">+</button>
          </div>
          <button class="btn" type="button" data-detail-add="${product.id}">Add to Cart</button>
          <button class="btn-secondary" type="button" data-wishlist-id="${product.id}" aria-pressed="false">Wishlist</button>
        </div>
        <div class="detail-panels">
          <div>
            <h3>Highlights</h3>
            <ul>${product.features.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h3>Specifications</h3>
            <ul>${product.specs.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    </div>
  `;
  let qty = 1;
  $$("[data-qty]", root).forEach((button) => {
    button.addEventListener("click", () => {
      qty = button.dataset.qty === "plus" ? qty + 1 : Math.max(1, qty - 1);
      $("[data-qty-value]", root).textContent = String(qty);
    });
  });
  $("[data-detail-add]", root)?.addEventListener("click", () => {
    addToCart(product.id, qty);
    toast(`${product.name} added to cart.`);
  });
  bindProductButtons(root);
  syncWishlistButtons();
}

function renderCartPage() {
  const list = $("[data-cart-items]");
  const summary = $("[data-cart-summary]");
  if (!list || !summary) return;
  const cart = getCart();
  const total = totals();
  if (!cart.length) {
    list.innerHTML = `<div class="empty-state">Your cart is empty. Start with an Ornava favorite.</div>`;
    summary.innerHTML = `<div class="summary-row"><span>Total</span><strong>${money(0)}</strong></div><a class="btn full" href="shop.html">Continue Shopping</a>`;
    return;
  }
  list.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="${product.name}" referrerpolicy="no-referrer" />
        <div class="cart-copy">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <div class="cart-actions">
            <div class="qty-picker">
              <button type="button" data-cart-qty="${product.id}" data-dir="-1">-</button>
              <span>${item.qty}</span>
              <button type="button" data-cart-qty="${product.id}" data-dir="1">+</button>
            </div>
            <button class="link-btn" type="button" data-cart-remove="${product.id}">Remove</button>
          </div>
        </div>
        <strong>${money(product.price * item.qty)}</strong>
      </article>
    `;
  }).join("");
  summary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><strong>${money(total.subtotal)}</strong></div>
    <div class="summary-row"><span>Shipping</span><strong>${total.shipping ? money(total.shipping) : "Free"}</strong></div>
    <div class="summary-row"><span>Estimated tax</span><strong>${money(total.tax)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>${money(total.total)}</strong></div>
    <a class="btn full" href="checkout.html">Proceed to Checkout</a>
    <a class="btn-secondary full" href="return-policy.html">View Return Policy</a>
  `;
  $$("[data-cart-qty]", list).forEach((button) => {
    button.addEventListener("click", () => {
      const current = getCart().find((item) => item.id === button.dataset.cartQty);
      if (!current) return;
      const next = current.qty + Number(button.dataset.dir);
      setQty(button.dataset.cartQty, next);
      renderCartPage();
    });
  });
  $$("[data-cart-remove]", list).forEach((button) => {
    button.addEventListener("click", () => {
      setQty(button.dataset.cartRemove, 0);
      renderCartPage();
      toast("Item removed from cart.");
    });
  });
}

function renderCheckoutSummary() {
  const root = $("[data-checkout-summary]");
  if (!root) return;
  const total = totals();
  root.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><strong>${money(total.subtotal)}</strong></div>
    <div class="summary-row"><span>Shipping</span><strong>${total.shipping ? money(total.shipping) : "Free"}</strong></div>
    <div class="summary-row"><span>Estimated tax</span><strong>${money(total.tax)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>${money(total.total)}</strong></div>
    <p class="summary-note">Payment methods: ${PAYMENT_OPTIONS.join(", ")}.</p>
  `;
}

function initCheckout() {
  const form = $("[data-checkout-form]");
  if (!form) return;
  renderCheckoutSummary();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!getCart().length) {
      toast("Your cart is empty.");
      return;
    }
    saveBucket(KEY.orders, {
      type: "order",
      payload: Object.fromEntries(new FormData(form).entries()),
      items: getCart(),
      totals: totals()
    });
    setCart([]);
    syncBadges();
    form.reset();
    renderCheckoutSummary();
    if ($("[data-checkout-message]")) {
      $("[data-checkout-message]").textContent = "Order placed successfully. Your order summary has been saved in this browser.";
    }
    toast("Order placed successfully.");
  });
}

function initForms() {
  $$("form[data-newsletter-form], form[data-contact-form], form[data-feedback-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      saveBucket(KEY.forms, {
        type: form.dataset.formType || "form",
        payload: Object.fromEntries(new FormData(form).entries())
      });
      form.reset();
      const status = form.parentElement?.querySelector("[data-form-success]") || form.querySelector("[data-form-success]");
      if (status) status.textContent = "Submission received. Our team will follow up if needed.";
      toast("Submission received.");
    });
  });
}

function initStars() {
  const root = $("[data-rating-stars]");
  if (!root) return;
  $$("button", root).forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.star;
      if ($("[data-rating-value]")) $("[data-rating-value]").value = value;
      $$("button", root).forEach((node) => node.classList.toggle("active", Number(node.dataset.star) <= Number(value)));
    });
  });
}

function initSearch() {
  $$("[data-site-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("query")?.toString().trim() || "";
      window.location.href = query ? `shop.html?q=${encodeURIComponent(query)}` : "shop.html";
    });
  });
}

function initConsent() {
  $$("[data-cookie-action]").forEach((button) => {
    button.addEventListener("click", () => {
      setConsent(button.dataset.cookieAction);
      $("[data-cookie-banner]")?.remove();
      toast("Cookie preference saved.");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderNewsletter();
  renderFooter();
  renderCookieBanner();
  fillStaticSections();
  initShop();
  initProductPage();
  renderCartPage();
  initCheckout();
  initForms();
  initStars();
  initSearch();
  bindProductButtons();
  initConsent();
  syncBadges();
  syncWishlistButtons();
});
