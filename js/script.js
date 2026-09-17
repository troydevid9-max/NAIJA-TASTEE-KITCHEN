// === DATA ===
const menuData = {
  "Rice Dishes": {
    icon: "cooking-pot",
    items: [
      {
        id: 1,
        name: "Jollof Rice",
        desc: "Party-style smoky tomato jollof with caramelised edges",
        price: "₦2,500",
        img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1000&q=85",
        spicy: false,
        badge: "Best Seller",
      },
      {
        id: 2,
        name: "Fried Rice",
        desc: "Loaded with veggies, liver and shrimp in savoury soy butter",
        price: "₦2,800",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1000&q=85",
        spicy: false,
        badge: null,
      },
      {
        id: 3,
        name: "Coconut Rice",
        desc: "Fragrant long-grain rice cooked in rich coconut cream",
        price: "₦3,000",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1000&q=85",
        spicy: false,
        badge: "Chef's Pick",
      },
      {
        id: 4,
        name: "Ofada Rice & Stew",
        desc: "Local ofada rice with rich designer ayamase stew",
        price: "₦3,500",
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000&q=85",
        spicy: true,
        badge: null,
      },
    ],
  },
  "Soups & Stews": {
    icon: "soup",
    items: [
      {
        id: 5,
        name: "Egusi Soup",
        desc: "Ground melon seeds cooked with assorted meats and stockfish",
        price: "₦2,000",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1000&q=85",
        spicy: false,
        badge: "Most Ordered",
      },
      {
        id: 6,
        name: "Banga Soup",
        desc: "Palm nut soup with oforija spice and fresh periwinkle",
        price: "₦2,500",
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1000&q=85",
        spicy: false,
        badge: null,
      },
      {
        id: 7,
        name: "Pepper Soup",
        desc: "Aromatic catfish pepper soup — warming and deeply spiced",
        price: "₦2,200",
        img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=1000&q=85",
        spicy: true,
        badge: "Spicy",
      },
      {
        id: 8,
        name: "White Soup",
        desc: "Delicate ofe onugbu with goat meat and uziza leaves",
        price: "₦2,800",
        img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=1000&q=85",
        spicy: false,
        badge: null,
      },
    ],
  },
  "Grills & Sides": {
    icon: "beef",
    items: [
      {
        id: 9,
        name: "Suya Platter",
        desc: "Spiced grilled skewers with yaji dust, onions & tomatoes",
        price: "₦3,500",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&q=85",
        spicy: true,
        badge: "Fan Favourite",
      },
      {
        id: 10,
        name: "Puff Puff (6 pcs)",
        desc: "Pillowy deep-fried golden dough, lightly sugared",
        price: "₦800",
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1000&q=85",
        spicy: false,
        badge: null,
      },
      {
        id: 11,
        name: "Moi Moi",
        desc: "Steamed bean pudding with egg, fish and peppers",
        price: "₦700",
        img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1000&q=85",
        spicy: false,
        badge: null,
      },
      {
        id: 12,
        name: "Plantain (Dodo)",
        desc: "Sweet ripe plantain slices, perfectly golden-fried",
        price: "₦600",
        img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=1000&q=85",
        spicy: false,
        badge: null,
      },
    ],
  },
  "Fast Food": {
    icon: "sandwich",
    items: [
      {
        id: 13,
        name: "Shawarma",
        desc: "Spiced chicken wrap with creamy garlic sauce and coleslaw",
        price: "₦2,500",
        img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1000&q=85",
        spicy: false,
        badge: "Today's Special",
      },
      {
        id: 14,
        name: "Beef Burger",
        desc: "Smashed patty with caramelised onion jam and pepper jack",
        price: "₦3,200",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=85",
        spicy: false,
        badge: null,
      },
      {
        id: 15,
        name: "Chicken Wings (8 pcs)",
        desc: "Crispy wings tossed in honey-suya butter glaze",
        price: "₦3,800",
        img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=1000&q=85",
        spicy: true,
        badge: null,
      },
      {
        id: 16,
        name: "Yam & Egg Sauce",
        desc: "Boiled yam with rich tomato and egg sauce",
        price: "₦1,500",
        img: "https://images.unsplash.com/photo-1545518070-1d3f832e3e72?w=1000&q=85",
        spicy: false,
        badge: null,
      },
    ],
  },
  Drinks: {
    icon: "cup-soda",
    items: [
      {
        id: 17,
        name: "Chapman",
        desc: "Refreshing Nigerian cocktail — fanta, grenadine, angostura",
        price: "₦1,200",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&q=85",
        spicy: false,
        badge: null,
      },
      {
        id: 18,
        name: "Zobo Drink",
        desc: "Chilled hibiscus drink with ginger and pineapple notes",
        price: "₦700",
        img: "https://images.unsplash.com/photo-1571006682253-9dbe0c61d93a?w=1000&q=85",
        spicy: false,
        badge: "Homemade",
      },
      {
        id: 19,
        name: "Fresh Juice",
        desc: "Seasonal fruit blend — watermelon, pineapple or orange",
        price: "₦900",
        img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=1000&q=85",
        spicy: false,
        badge: null,
      },
      {
        id: 20,
        name: "Malta Guinness",
        desc: "Rich non-alcoholic malt drink, chilled to perfection",
        price: "₦600",
        img: "https://images.unsplash.com/photo-1565620551932-4d5f3081f5b5?w=1000&q=85",
        spicy: false,
        badge: null,
      },
    ],
  },
};

const featuredItems = [
  {
    name: "Jollof Rice + Chicken",
    desc: "Our signature smoky jollof with a full chicken quarter and coleslaw — the crowd's number one choice.",
    price: "₦3,500",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1200&q=90",
    badge: "Best Seller",
  },
  {
    name: "Suya Platter",
    desc: "Spiced beef skewers, fire-grilled to perfection with yaji spice, fresh onions and tomato salsa.",
    price: "₦3,500",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=90",
    badge: "Fan Favourite",
  },
  {
    name: "Shawarma Special",
    desc: "Loaded chicken shawarma with house garlic sauce, pickled cabbage and fresh tomatoes.",
    price: "₦2,500",
    img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200&q=90",
    badge: "Today's Special",
  },
  {
    name: "Egusi Soup + Pounded Yam",
    desc: "Our richly-made egusi with assorted meat and pounded yam — the true Nigerian classic.",
    price: "₦4,000",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&q=90",
    badge: "Most Ordered",
  },
  {
    name: "Catfish Pepper Soup",
    desc: "Deeply aromatic pepper soup with fresh point-and-kill catfish, warming spices and uziza.",
    price: "₦2,200",
    img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=1200&q=90",
    badge: "Chef's Pick",
  },
  {
    name: "Chapman Cocktail",
    desc: "Our vibrant in-house Chapman made with citrus, grenadine and angostura bitters. Refreshing!",
    price: "₦1,200",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1200&q=90",
    badge: "Must Try",
  },
];

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    loc: "GRA, Benin City",
    stars: 5,
    text: "Best jollof rice in Benin! The smoky flavour is exactly like mama's party jollof. I order every weekend!",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=85",
  },
  {
    name: "Emeka Eze",
    loc: "Ugbowo, Benin City",
    stars: 5,
    text: "The suya platter is absolutely fire — literally. The yaji spice blend is elite, and it arrives fresh every time.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85",
  },
  {
    name: "Titi Fashola",
    loc: "Ring Road, Benin",
    stars: 5,
    text: "Ordered via WhatsApp and they responded in 2 minutes! Food was at my door in 40 minutes. Still hot. 10/10!",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=85",
  },
  {
    name: "Chidi Nwosu",
    loc: "Uselu, Benin City",
    stars: 5,
    text: "The egusi soup here is the real deal. Rich, full of assorted, and the pounded yam is smooth like silk.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=85",
  },
  {
    name: "Ngozi Bello",
    loc: "Ikpoba Hill, Benin",
    stars: 5,
    text: "Discovered Naija Tastee Kitchen 6 months ago and I have not cooked since! The pepper soup alone is worth it.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=85",
  },
  {
    name: "Osas Osagie",
    loc: "New Benin",
    stars: 5,
    text: "The shawarma is HUGE and the garlic sauce is different. Friends from Lagos came to visit and I took them here — they were stunned.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=85",
  },
  {
    name: "Blessing Igbinoba",
    loc: "Egor, Benin City",
    stars: 5,
    text: "Clean environment, fast service, authentic food. This is my family's go-to for Sunday takeout. We love it here!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85",
  },
  {
    name: "Musa Danladi",
    loc: "Forestry Road, Benin",
    stars: 5,
    text: "The zobo here tastes homemade because it IS. You can taste the ginger and pineapple. Nothing like the bottled versions.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85",
  },
];

const galleryImgs = [
  "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=85",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=85",
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=85",
  "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=85",
  "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=85",
  "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=85",
  "https://images.unsplash.com/photo-1562802378-063ec186a863?w=800&q=85",
  "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=85",
  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=85",
  "https://images.unsplash.com/photo-1545518070-1d3f832e3e72?w=800&q=85",
];

const WHATSAPP_NUMBER = "2348012345678";

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// === ORDER VIA WHATSAPP ===
function orderOnWhatsApp(itemName = null) {
  const msg = itemName
    ? `Hello Naija Tastee Kitchen! I'd like to order *${itemName}*. Please share your full menu and delivery details. Thank you!`
    : `Hello Naija Tastee Kitchen! I'd like to place an order. Please share your menu and delivery options. Thank you!`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// === RENDER: NAVBAR ===
function renderNavbar() {
  const nav = document.getElementById("navbar");
  nav.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <a href="#hero" class="nav-logo">
          <div class="nav-logo-icon"><i data-lucide="chef-hat"></i></div>
          <div class="nav-logo-text">
            <span class="nav-logo-name">Naija Tastee Kitchen</span>
            <span class="nav-logo-tagline">Authentic Nigerian Flavours</span>
          </div>
        </a>
        <ul class="nav-links">
          <li><a href="#featured">Featured</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <li class="nav-links nav-cta" style="list-style:none">
          <a href="#" data-order-whatsapp><i data-lucide="message-circle"></i>Order Now</a>
        </li>
        <button class="hamburger" id="hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;

  // Scroll effect
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });

  // Hamburger
  const ham = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("mobileOverlay");
  ham.addEventListener("click", () => {
    ham.classList.toggle("open");
    mobileNav.classList.toggle("open");
    overlay.classList.toggle("active");
  });
  overlay.addEventListener("click", closeMobileNav);
  mobileNav
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", closeMobileNav));
  function closeMobileNav() {
    ham.classList.remove("open");
    mobileNav.classList.remove("open");
    overlay.classList.remove("active");
  }
}

function renderHero() {
  document.getElementById("hero").innerHTML = `
    <div class="hero-bg"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">Benin City's finest kitchen</div>
        <h1 class="hero-title">
          Taste the heart
          <em>of Nigeria.</em>
        </h1>
        <p class="hero-desc">
          Rich, generous food made with local ingredients, family recipes and
          the kind of warmth you can taste in every plate.
        </p>
        <div class="hero-actions">
          <a href="#menu" class="btn btn-primary">Explore the menu</a>
          <a href="#" class="btn btn-whatsapp" data-order-whatsapp>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
    <div class="hero-contact-strip">
      <div class="container">
        <div class="hero-contact-mark"><i data-lucide="phone"></i></div>
        <div class="hero-contact-copy">
          <strong>+234 801 234 5678</strong>
          <span>Call or WhatsApp to order</span>
        </div>
        <div class="hero-contact-divider"></div>
        <p class="hero-contact-note">Fresh Nigerian meals, prepared daily and delivered across Benin City.</p>
      </div>
    </div>
  `;
}

function renderFeatured() {
  const el = document.getElementById("featured");
  el.innerHTML = `
    <div class="container">
      <div class="featured-header reveal">
        <div class="section-label"><i data-lucide="star"></i>Our Specials</div>
        <h2 class="section-title">Crowd Favourites &amp; Chef's Picks</h2>
        <p class="section-subtitle" style="margin:0 auto">Handpicked dishes our customers can't stop ordering. Fresh, bold and unforgettable.</p>
        <div class="featured-tabs">
          <button class="tab-btn active" data-featured-filter="all">All</button>
          <button class="tab-btn" data-featured-filter="Best Seller">Best Sellers</button>
          <button class="tab-btn" data-featured-filter="Most Ordered">Most Ordered</button>
          <button class="tab-btn" data-featured-filter="Today's Special">Today's Special</button>
          <button class="tab-btn" data-featured-filter="Chef's Pick">Chef's Pick</button>
        </div>
      </div>
      <div class="featured-grid" id="featuredGrid">
        ${featuredItems
          .map(
            (item, i) => `
          <div class="featured-card reveal" style="transition-delay:${i * 0.1}s" data-badge="${item.badge}">
            <div style="overflow:hidden">
              <img class="featured-card-img" src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
            <div class="featured-card-badge">${item.badge}</div>
            <div class="featured-card-body">
              <div class="featured-card-name">${item.name}</div>
              <div class="featured-card-desc">${item.desc}</div>
              <div class="featured-card-footer">
                <span class="featured-card-price">${item.price}</span>
                <button class="card-order-btn" data-order-item="${item.name}" title="Order via WhatsApp">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </button>
              </div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

window.filterFeatured = function (btn, filter) {
  document
    .querySelectorAll(".featured-tabs .tab-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll("#featuredGrid .featured-card").forEach((card) => {
    const badge = card.dataset.badge;
    const show = filter === "all" || badge === filter;
    card.style.display = show ? "" : "none";
  });
};

// === RENDER: MENU ===
let activeCategory = "Rice Dishes";

function renderMenu() {
  const categories = Object.keys(menuData);
  document.getElementById("menu").innerHTML = `
    <div class="container">
      <div class="reveal" style="margin-bottom:48px">
        <div class="section-label"><i data-lucide="utensils"></i>Full Menu</div>
        <h2 class="section-title">Everything We Cook</h2>
        <p class="section-subtitle">Bold Nigerian flavours, made fresh daily. Browse by category or search below.</p>
      </div>
      <div class="menu-layout">
        <aside class="menu-sidebar reveal-left">
          <div class="menu-sidebar-title">Categories</div>
          <ul class="menu-categories">
            ${categories
              .map(
                (cat) => `
              <li>
                <button class="menu-cat-btn ${cat === activeCategory ? "active" : ""}" data-menu-category="${cat}">
                  <span class="cat-icon">${menuData[cat].icon}</span>
                  <span>${cat}</span>
                </button>
              </li>
            `,
              )
              .join("")}
          </ul>
        </aside>
        <div>
          <div class="menu-content-header reveal">
            <h3 class="menu-active-title" id="menuActiveTitle">Rice Dishes</h3>
            <div class="menu-search">
              <span><i data-lucide="search"></i></span>
              <input type="text" placeholder="Search menu..." id="menuSearch">
            </div>
          </div>
          <div class="menu-grid" id="menuGrid">
            ${renderMenuItems(menuData[activeCategory].items)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMenuItems(items) {
  return items
    .map(
      (item, i) => `
    <div class="menu-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="menu-card-img-wrap">
        <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="menu-card-overlay">
          <button class="menu-card-overlay-btn" data-order-item="${item.name}">
            <i data-lucide="message-circle"></i>Order via WhatsApp
          </button>
        </div>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">${item.price}</span>
          ${item.spicy ? '<span class="spicy-tag"><i data-lucide="flame"></i> Spicy</span>' : item.badge ? `<span class="spicy-tag" style="background:#e8f5e9;color:#2d6a4f">${item.badge}</span>` : ""}
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

window.switchCategory = function (cat, btn) {
  activeCategory = cat;
  document
    .querySelectorAll(".menu-cat-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const grid = document.getElementById("menuGrid");
  const title = document.getElementById("menuActiveTitle");
  title.textContent = cat;
  grid.style.opacity = "0";
  setTimeout(() => {
    grid.innerHTML = renderMenuItems(menuData[cat].items);
    grid.style.opacity = "1";
    refreshIcons();
    initReveal();
  }, 200);
};

window.searchMenu = function (query) {
  const q = query.toLowerCase();
  const allItems = Object.values(menuData).flatMap((c) => c.items);
  const results = q
    ? allItems.filter(
        (i) =>
          i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q),
      )
    : menuData[activeCategory].items;
  const grid = document.getElementById("menuGrid");
  const title = document.getElementById("menuActiveTitle");
  title.textContent = q ? `Results for "${query}"` : activeCategory;
  grid.style.opacity = "0";
  setTimeout(() => {
    grid.innerHTML = results.length
      ? renderMenuItems(results)
      : '<p style="color:var(--text-light);font-size:.9rem;grid-column:1/-1">No items found. Try a different search.</p>';
    grid.style.opacity = "1";
    refreshIcons();
    initReveal();
  }, 150);
};

// RENDER: ABOUT
function renderAbout() {
  document.getElementById("about").innerHTML = `
    <div class="container">
      <div class="about-layout">
        <div class="about-images reveal-left">
          <img class="about-img-main" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90" alt="Kitchen" loading="lazy">
          <img class="about-img-accent" src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=90" alt="Cooking" loading="lazy">
          <div class="about-badge">
            <span class="about-badge-num">8+</span>
            <span class="about-badge-label">Years of Love</span>
          </div>
        </div>
        <div class="about-content reveal-right">
          <div class="section-label"><i data-lucide="heart-handshake"></i>Our Story</div>
          <h2 class="section-title" style="color:#fff">Born From Mama's Kitchen</h2>
          <p class="about-desc">
            Naija Tastee Kitchen was born in 2016 from one simple truth — <em style="color:var(--gold-light)">home-cooked Nigerian food is irreplaceable.</em>
            What started as a passion project in a small kitchen in Benin City has grown into one of the most beloved restaurants in Edo State.
          </p>
          <p class="about-desc">
            Every pot of jollof, every bowl of pepper soup, every suya skewer is prepared with the same love and quality ingredients we used on day one.
            No shortcuts. No compromises. Just real Nigerian food, made the right way.
          </p>
          <div class="about-pillars">
            <div class="pillar">
              <div class="pillar-icon"><i data-lucide="leaf"></i></div>
              <div class="pillar-title">Fresh Ingredients</div>
              <div class="pillar-text">Sourced fresh daily from local Benin markets</div>
            </div>
            <div class="pillar">
              <div class="pillar-icon"><i data-lucide="chef-hat"></i></div>
              <div class="pillar-title">Expert Hands</div>
              <div class="pillar-text">Cooked by trained chefs with deep roots in Nigerian cuisine</div>
            </div>
            <div class="pillar">
              <div class="pillar-icon"><i data-lucide="zap"></i></div>
              <div class="pillar-title">Fast Delivery</div>
              <div class="pillar-text">Hot food at your door within 45 minutes</div>
            </div>
            <div class="pillar">
              <div class="pillar-icon"><i data-lucide="heart"></i></div>
              <div class="pillar-title">Made With Love</div>
              <div class="pillar-text">Every dish carries the warmth of a home-cooked meal</div>
            </div>
          </div>
          <a href="#" data-order-whatsapp class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderTestimonials() {
  // Duplicate for infinite scroll
  const doubled = [...testimonials, ...testimonials];
  document.getElementById("testimonials").innerHTML = `
    <div class="container">
      <div class="testimonials-header reveal">
        <div class="section-label"><i data-lucide="message-circle"></i>Reviews</div>
        <h2 class="section-title">What Our Customers Say</h2>
        <p class="section-subtitle" style="margin:0 auto">Over 5,000 happy customers — and counting. Don't take our word for it.</p>
      </div>
    </div>
    <div class="testimonials-track-wrap">
      <div class="testimonials-track">
        ${doubled
          .map(
            (t) => `
          <div class="testimonial-card">
            <div class="testimonial-stars" aria-label="${t.stars} out of 5 stars">${Array.from({ length: t.stars }, () => '<i data-lucide="star" fill="currentColor"></i>').join("")}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
              <img class="testimonial-avatar" src="${t.avatar}" alt="${t.name}" loading="lazy">
              <div>
                <div class="testimonial-name">${t.name}</div>
                <div class="testimonial-loc"><i data-lucide="map-pin"></i> ${t.loc}</div>
              </div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderCTA() {
  document.getElementById("cta").innerHTML = `
    <div class="container">
      <div class="cta-content reveal">
        <span class="cta-emoji"><i data-lucide="message-circle"></i></span>
        <h2 class="cta-title">Ready to Order? It's Just a Message Away.</h2>
        <p class="cta-sub">No app needed. No sign-up. Just WhatsApp us your order and we handle the rest.</p>
        <div class="cta-actions">
          <a href="#" data-order-whatsapp class="btn btn-whatsapp" style="font-size:1rem;padding:16px 36px">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat Us on WhatsApp
          </a>
          <a href="tel:+2348012345678" class="btn btn-outline" style="font-size:1rem;padding:16px 36px"><i data-lucide="phone"></i>Call to Order</a>
        </div>
      </div>
    </div>
  `;
}

function renderGallery() {
  const doubled = [...galleryImgs, ...galleryImgs];
  document.getElementById("gallery").innerHTML = `
    <div class="gallery-label">
      <div class="section-label"><i data-lucide="image"></i>Food Gallery</div>
    </div>
    <div class="gallery-strip">
      <div class="gallery-track">
        ${doubled.map((img, i) => `<img class="gallery-img" src="${img}" alt="Food photo ${i + 1}" loading="lazy">`).join("")}
      </div>
    </div>
  `;
}

function renderContact() {
  document.getElementById("contact").innerHTML = `
    <div class="container">
      <div class="contact-layout">
        <div class="reveal-left">
          <div class="section-label"><i data-lucide="map-pin"></i>Find Us</div>
          <h2 class="contact-info-title">Visit or Order From Us</h2>
          <p class="contact-info-sub">We're open daily, ready to serve you. Walk in, call us, or just send a WhatsApp message.</p>
          <div class="contact-items">
            <div class="contact-item">
              <div class="contact-item-icon"><i data-lucide="map-pin"></i></div>
              <div>
                <div class="contact-item-label">Address</div>
                <div class="contact-item-value">14 Akpakpava Road, GRA, Benin City, Edo State</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon"><i data-lucide="phone"></i></div>
              <div>
                <div class="contact-item-label">Phone / WhatsApp</div>
                <div class="contact-item-value">
                  <a href="tel:+2348012345678" style="color:var(--green);text-decoration:none">+234 801 234 5678</a>
                </div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon"><i data-lucide="mail"></i></div>
              <div>
                <div class="contact-item-label">Email</div>
                <div class="contact-item-value">hello@naijatasteekitchen.ng</div>
              </div>
            </div>
          </div>
          <div class="contact-socials" style="margin-bottom:32px">
            <a href="#" class="social-btn" title="Instagram" aria-label="Instagram"><i data-lucide="camera"></i></a>
            <a href="#" class="social-btn" title="Facebook" aria-label="Facebook"><i data-lucide="facebook"></i></a>
            <a href="#" class="social-btn" title="Twitter" aria-label="Twitter"><i data-lucide="twitter"></i></a>
            <a href="#" data-order-whatsapp class="social-btn" title="WhatsApp" aria-label="WhatsApp"><i data-lucide="message-circle"></i></a>
          </div>
          <div class="hours-card">
            <div class="hours-title"><i data-lucide="clock-3"></i> Opening Hours</div>
            <div class="hours-row"><span class="hours-day">Monday – Friday</span><span class="hours-time">8:00 AM – 10:00 PM</span></div>
            <div class="hours-row"><span class="hours-day">Saturday</span><span class="hours-time">9:00 AM – 11:00 PM</span></div>
            <div class="hours-row"><span class="hours-day">Sunday</span><span class="hours-time">10:00 AM – 9:00 PM</span></div>
          </div>
        </div>
        <div class="reveal-right">
          <div class="map-wrap">
            <div class="map-placeholder">
              <div class="map-placeholder-pin"><i data-lucide="map-pin"></i></div>
              <div class="map-placeholder-text">Naija Tastee Kitchen</div>
              <div class="map-placeholder-sub">14 Akpakpava Road, Benin City</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  document.getElementById("footer").innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:40px;height:40px;background:var(--green);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem"><i data-lucide="chef-hat"></i></div>
            <div>
              <div class="footer-logo-name">Naija Tastee Kitchen</div>
              <div class="footer-logo-tagline">Authentic Nigerian Flavours</div>
            </div>
          </div>
          <p class="footer-desc">Serving Benin City's finest Nigerian meals since 2016. Made fresh, with love, every single day.</p>
          <div class="footer-socials">
            <a href="#" class="footer-social" title="Instagram" aria-label="Instagram"><i data-lucide="camera"></i></a>
            <a href="#" class="footer-social" title="Facebook" aria-label="Facebook"><i data-lucide="facebook"></i></a>
            <a href="#" class="footer-social" title="Twitter" aria-label="Twitter"><i data-lucide="twitter"></i></a>
            <a href="#" data-order-whatsapp class="footer-social" title="WhatsApp" aria-label="WhatsApp"><i data-lucide="message-circle"></i></a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Menu</div>
          <ul class="footer-links">
            <li><a href="#menu">Rice Dishes</a></li>
            <li><a href="#menu">Soups & Stews</a></li>
            <li><a href="#menu">Grills & Sides</a></li>
            <li><a href="#menu">Fast Food</a></li>
            <li><a href="#menu">Drinks</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Quick Links</div>
          <ul class="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Newsletter</div>
          <p class="footer-newsletter-text">Get weekly specials, new dishes and exclusive deals straight to your inbox.</p>
          <div class="newsletter-form">
            <input type="email" class="newsletter-input" placeholder="Your email...">
            <button class="newsletter-btn" data-newsletter>Join</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2024 <span>Naija Tastee Kitchen</span>. All rights reserved. Made with care in Benin City.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Delivery Policy</a>
        </div>
      </div>
    </div>
  `;
}

function initReveal() {
  const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 50);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  els.forEach((el) => observer.observe(el));
}

function hideLoader() {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hidden"), 1900);
}

function initInteractions() {
  document.addEventListener("click", (event) => {
    const orderLink = event.target.closest("[data-order-whatsapp]");
    if (orderLink) {
      event.preventDefault();
      orderOnWhatsApp();
      return;
    }

    const orderButton = event.target.closest("[data-order-item]");
    if (orderButton) {
      orderOnWhatsApp(orderButton.dataset.orderItem);
      return;
    }

    const filterButton = event.target.closest("[data-featured-filter]");
    if (filterButton) {
      filterFeatured(filterButton, filterButton.dataset.featuredFilter);
      return;
    }

    const categoryButton = event.target.closest("[data-menu-category]");
    if (categoryButton) {
      switchCategory(categoryButton.dataset.menuCategory, categoryButton);
      return;
    }

    if (event.target.closest("[data-newsletter]")) {
      alert("Thanks! You're subscribed!");
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.id === "menuSearch") {
      searchMenu(event.target.value);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initInteractions();
  hideLoader();
  renderNavbar();
  renderHero();
  renderFeatured();
  renderMenu();
  renderAbout();
  renderTestimonials();
  renderCTA();
  renderGallery();
  renderContact();
  renderFooter();
  refreshIcons();
  setTimeout(initReveal, 100);
});
