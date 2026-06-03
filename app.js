const media = {
  wings: "/assets/clean-wings.png",
  tenders: "/assets/tenders.webp",
  sandwich: "/assets/clean-sandwich.png",
  bbqSandwich: "/assets/clean-bbq-sandwich.png",
  fries: "/assets/clean-fries.png",
  mozzarella: "/assets/clean-mozzarella.png",
  onionRings: "/assets/clean-onion-rings.png",
  atomic: "/assets/clean-atomic-sauce.png",
  mango: "/assets/clean-mango-habanero.png",
  garlic: "/assets/clean-garlic-parmesan.png",
  honey: "/assets/clean-honey-bbq.png",
  nuclear: "/assets/clean-nuclear.png",
  ranch: "/assets/clean-ranch.png",
  blueCheese: "/assets/clean-blue-cheese.png",
};

const heroScenes = {
  "for-you": {
    video: "/assets/hero-for-you.mp4",
    poster: media.wings,
    title: "Крылья, которые залетают",
    subtitle: "Хруст, соус и жар прямо в твоём боксе",
  },
  wings: {
    video: "/assets/hero-wings.mp4",
    poster: media.wings,
    title: "Выбирай остроту",
    subtitle: "Classic, boneless или tenders с соусом на максимум",
  },
  combo: {
    video: "/assets/hero-combo.mp4",
    poster: media.tenders,
    title: "Бокс на компанию",
    subtitle: "Крылья, фри, дипы и напиток без лишних решений",
  },
  burgers: {
    video: "/assets/hero-burgers.mp4",
    poster: media.sandwich,
    title: "Сэндвич с характером",
    subtitle: "Сочная курица, соус и мягкая булка в один укус",
  },
  sides: {
    video: "/assets/hero-sides.mp4",
    poster: media.fries,
    title: "Добавь хруст",
    subtitle: "Waffle fries, сырные палочки и кольца к любым крыльям",
  },
  sauces: {
    video: "/assets/hero-sauces.mp4",
    poster: media.mango,
    title: "Соус решает",
    subtitle: "От Honey BBQ до Nuclear: собери свой вкус",
  },
};

const sauces = [
  "Mild",
  "Medium",
  "Hot",
  "Atomic",
  "Nuclear",
  "Mango Habanero",
  "Garlic Parmesan",
  "Honey BBQ",
  "Thai Chili",
  "Lemon Pepper",
  "Ranch",
  "Blue Cheese",
];

const categories = [
  {
    id: "wings",
    title: "Крылья",
    items: [
      {
        id: "classic-wings",
        name: "Classic Wings",
        desc: "Крылья на кости, приготовленные под заказ. Выбери количество и фирменный соус.",
        price: 2390,
        spice: "classic",
        image: media.wings,
        sizes: [
          { label: "5 шт", price: 2390 },
          { label: "10 шт", price: 4190 },
          { label: "15 шт", price: 5990 },
        ],
      },
      {
        id: "boneless-wings",
        name: "Boneless Wings",
        desc: "Кусочки куриного филе без кости в хрустящей панировке и соусе на выбор.",
        price: 2490,
        spice: "без кости",
        image: media.tenders,
        sizes: [
          { label: "8 шт", price: 2490 },
          { label: "12 шт", price: 3590 },
          { label: "18 шт", price: 4990 },
        ],
      },
      {
        id: "chicken-tenders",
        name: "Chicken Tenders",
        desc: "Сочные стрипсы из белого мяса. Хорошо заходят с Ranch, Honey BBQ и Garlic Parmesan.",
        price: 2690,
        spice: "tenders",
        image: media.tenders,
        sizes: [
          { label: "4 шт", price: 2690 },
          { label: "6 шт", price: 3690 },
          { label: "9 шт", price: 5190 },
        ],
      },
    ],
  },
  {
    id: "combo",
    title: "Комбо",
    items: [
      {
        id: "classic-combo",
        name: "Classic Wings Combo",
        desc: "Крылья на кости, waffle fries, дип и напиток. Самый понятный заказ.",
        price: 3990,
        spice: "хит",
        image: media.wings,
      },
      {
        id: "boneless-combo",
        name: "Boneless Combo",
        desc: "Boneless wings, фри, дип и напиток. Удобно есть на ходу.",
        price: 3890,
        spice: "15 мин",
        image: media.tenders,
      },
      {
        id: "party-box",
        name: "Party Box",
        desc: "20 крыльев, большая порция waffle fries и 4 дипа для компании.",
        price: 9990,
        spice: "на всех",
        image: media.wings,
      },
    ],
  },
  {
    id: "burgers",
    title: "Бургеры",
    items: [
      {
        id: "aw-sandwich",
        name: "AW Chicken Sandwich",
        desc: "Хрустящее куриное филе, салат, солёные огурцы и фирменный соус.",
        price: 2890,
        spice: "crispy",
        image: media.sandwich,
      },
      {
        id: "buffalo-ranch",
        name: "Buffalo Ranch Sandwich",
        desc: "Курица в Buffalo, сливочный Ranch, свежий салат и мягкая булка.",
        price: 2990,
        spice: "spicy",
        image: media.sandwich,
      },
      {
        id: "bbq-sandwich",
        name: "Honey BBQ Sandwich",
        desc: "Сладко-дымный Honey BBQ, хрустящая курица и сочная начинка.",
        price: 3090,
        spice: "sweet",
        image: media.bbqSandwich,
      },
    ],
  },
  {
    id: "sides",
    title: "Гарниры",
    items: [
      {
        id: "waffle-fries",
        name: "Famous Waffle Fries",
        desc: "Рифлёная картошка, которая держит соус лучше обычной фри.",
        price: 1290,
        spice: "side",
        image: media.fries,
      },
      {
        id: "mozzarella-sticks",
        name: "Mozzarella Sticks",
        desc: "Тянущаяся моцарелла в хрустящей корочке. Бери с Ranch.",
        price: 1790,
        spice: "cheese",
        image: media.mozzarella,
      },
      {
        id: "onion-rings",
        name: "Onion Rings",
        desc: "Золотистые луковые кольца к крыльям и сэндвичам.",
        price: 1390,
        spice: "crispy",
        image: media.onionRings,
      },
    ],
  },
  {
    id: "sauces",
    title: "Соусы",
    items: [
      {
        id: "mango-habanero",
        name: "Mango Habanero",
        desc: "Манго-сладость и острый хабанеро. Самый яркий соус.",
        price: 390,
        spice: "hot",
        image: media.mango,
      },
      {
        id: "atomic-sauce",
        name: "Atomic Sauce",
        desc: "Фирменная острота для тех, кто хочет почувствовать жар.",
        price: 390,
        spice: "atomic",
        image: media.atomic,
      },
      {
        id: "garlic-parmesan",
        name: "Garlic Parmesan",
        desc: "Сливочный чеснок и пармезан. Мягко, насыщенно, очень к крыльям.",
        price: 390,
        spice: "creamy",
        image: media.garlic,
      },
      {
        id: "honey-bbq",
        name: "Honey BBQ",
        desc: "Сладко-дымный BBQ для крыльев, tenders и сэндвичей.",
        price: 390,
        spice: "sweet",
        image: media.honey,
      },
    ],
  },
];

const spotlightIds = ["classic-wings", "classic-combo", "aw-sandwich", "mango-habanero"];
const newForYouIds = ["boneless-wings", "party-box", "bbq-sandwich", "mozzarella-sticks"];

const formatPrice = (value) => `${value.toLocaleString("ru-RU")} ₸`;

const state = {
  selectedProduct: null,
  selectedSize: null,
  selectedSauce: sauces[0],
  qty: 1,
  cart: [],
  activeHero: "for-you",
};

let heroScrollLockUntil = 0;

const menuList = document.querySelector("#menuList");
const tabs = document.querySelector(".category-tabs");
const productModal = document.querySelector("#productModal");
const checkoutModal = document.querySelector("#checkoutModal");
const cartBar = document.querySelector("#cartBar");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const checkoutTotal = document.querySelector("#checkoutTotal");
const checkoutItems = document.querySelector("#checkoutItems");
const heroVideo = document.querySelector(".hero-video");
const heroFallback = document.querySelector(".hero-fallback");
const heroTitle = document.querySelector("#heroTitle");
const heroSubtitle = document.querySelector("#heroSubtitle");
const modalImage = document.querySelector("#modalImage");

function playHeroVideo() {
  if (!heroVideo) return;
  const attempt = heroVideo.play();
  if (attempt && typeof attempt.catch === "function") {
    attempt.catch(() => {});
  }
}

function setHeroScene(sceneId) {
  const scene = heroScenes[sceneId] ?? heroScenes["for-you"];
  if (state.activeHero === sceneId && heroVideo?.currentSrc.includes(scene.video)) {
    playHeroVideo();
    return;
  }
  state.activeHero = sceneId;
  heroTitle.textContent = scene.title;
  heroSubtitle.textContent = scene.subtitle;
  heroFallback.src = scene.poster;
  heroVideo.poster = scene.poster;
  const source = heroVideo.querySelector("source");
  if (source.getAttribute("src") !== scene.video) {
    source.setAttribute("src", scene.video);
    heroVideo.load();
  }
  playHeroVideo();
}

function findProduct(id) {
  for (const category of categories) {
    const product = category.items.find((item) => item.id === id);
    if (product) return { category, product };
  }
  return null;
}

function renderTabs() {
  const labels = [
    { title: "для тебя", target: "for-you" },
    { title: "крылья", target: "wings" },
    { title: "комбо", target: "combo" },
    { title: "бургеры", target: "burgers" },
    { title: "гарниры", target: "sides" },
    { title: "соусы", target: "sauces" },
  ];
  tabs.innerHTML = labels
    .map(
      (item, index) =>
        `<button class="${index === 0 ? "active" : ""}" data-target="${item.target}" type="button">${item.title}</button>`
    )
    .join("");
}

function renderMenu() {
  const spotlight = spotlightIds.map((id) => findProduct(id)?.product).filter(Boolean);
  const newForYou = newForYouIds.map((id) => findProduct(id)?.product).filter(Boolean);

  menuList.innerHTML = `
    <section class="menu-section" id="for-you" data-hero="for-you">
      <h2 class="section-title">популярное сейчас</h2>
      <div class="product-row compact-row">
        ${spotlight.map((item) => renderProductCard(item, "compact")).join("")}
      </div>
    </section>

    <section class="promo-strip" data-hero="for-you">
      <div>
        <strong>Соус в подарок</strong>
        <span>к заказу от 8 000 ₸ до конца дня</span>
      </div>
      <i data-lucide="flame"></i>
    </section>

    <section class="menu-section feature-section" data-hero="for-you">
      <h2 class="section-title">новое для тебя</h2>
      <div class="product-row feature-row">
        ${newForYou.map((item) => renderProductCard(item, "feature")).join("")}
      </div>
    </section>

    ${categories
      .map(
        (category) => `
          <section class="menu-section" id="${category.id}" data-hero="${category.id}">
            <h2 class="section-title">${category.title.toLowerCase()}</h2>
            <div class="product-row compact-row">
              ${category.items.map((item) => renderProductCard(item, "compact")).join("")}
            </div>
          </section>
        `
      )
      .join("")}
  `;
  setupHeroObserver();
}

function renderProductCard(item, variant) {
  const isFeature = variant === "feature";
  return `
    <article class="product-card ${isFeature ? "feature-card" : "compact-card"}" data-card-product="${item.id}">
      <div class="product-visual">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        ${isFeature ? `<button class="add-button" data-product="${item.id}" type="button" aria-label="Добавить ${item.name}"><i data-lucide="plus"></i></button>` : ""}
      </div>
      <div class="product-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="product-meta">
          <strong class="price">${formatPrice(item.price)}</strong>
          <span class="spice">${item.spice}</span>
        </div>
      </div>
    </article>
  `;
}

function setupHeroObserver() {
  const sections = [...document.querySelectorAll(".menu-section[data-hero]")];
  let ticking = false;
  const update = () => {
    ticking = false;
    if (Date.now() < heroScrollLockUntil) return;
    const marker = tabs.getBoundingClientRect().bottom + 48;
    const current =
      sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      }) ?? sections.sort((a, b) => Math.abs(a.getBoundingClientRect().top - marker) - Math.abs(b.getBoundingClientRect().top - marker))[0];
    if (current) activateTab(current.dataset.hero, false);
  };
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );
  update();
}

function activateTab(target, shouldScroll = true) {
  if (shouldScroll) heroScrollLockUntil = Date.now() + 2600;
  tabs.querySelectorAll("button").forEach((tab) => tab.classList.toggle("active", tab.dataset.target === target));
  setHeroScene(target);
  if (shouldScroll) {
    document.querySelector(`#${target}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderSizeOptions() {
  const sizes = state.selectedProduct.sizes ?? [{ label: "1 порция", price: state.selectedProduct.price }];
  document.querySelector("#sizeBlock").classList.toggle("hidden", sizes.length <= 1 && state.selectedProduct.id.includes("sauce"));
  document.querySelector("#sizeOptions").innerHTML = sizes
    .map(
      (size) => `
        <button class="${state.selectedSize?.label === size.label ? "active" : ""}" data-size="${size.label}" type="button">
          ${size.label}<br><span>${formatPrice(size.price)}</span>
        </button>
      `
    )
    .join("");
}

function renderSauceOptions() {
  document.querySelector("#sauceOptions").innerHTML = sauces
    .map(
      (sauce) =>
        `<button class="${state.selectedSauce === sauce ? "active" : ""}" data-sauce="${sauce}" type="button">${sauce}</button>`
    )
    .join("");
}

function updateAddButton() {
  const total = (state.selectedSize?.price ?? state.selectedProduct.price) * state.qty;
  document.querySelector("#addToCart").textContent = `Добавить за ${formatPrice(total)}`;
}

function openProduct(id) {
  const match = findProduct(id);
  if (!match) return;
  state.selectedProduct = match.product;
  state.selectedSize = match.product.sizes?.[0] ?? { label: "1 порция", price: match.product.price };
  state.selectedSauce = sauces[0];
  state.qty = 1;

  modalImage.src = match.product.image;
  modalImage.alt = match.product.name;
  document.querySelector("#modalCategory").textContent = match.category.title;
  document.querySelector("#modalTitle").textContent = match.product.name;
  document.querySelector("#modalDescription").textContent = match.product.desc;
  document.querySelector("#qtyValue").textContent = state.qty;
  renderSizeOptions();
  renderSauceOptions();
  updateAddButton();
  productModal.showModal();
}

function addToCart() {
  if (!state.selectedProduct) return;
  const price = state.selectedSize?.price ?? state.selectedProduct.price;
  state.cart.push({
    id: `${state.selectedProduct.id}-${Date.now()}`,
    name: state.selectedProduct.name,
    size: state.selectedSize?.label ?? "1 порция",
    sauce: state.selectedSauce,
    qty: state.qty,
    price,
  });
  productModal.close();
  renderCart();
}

function renderCart() {
  const qty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartCount.textContent = qty;
  cartTotal.textContent = formatPrice(total);
  checkoutTotal.textContent = formatPrice(total);
  cartBar.classList.toggle("hidden", qty === 0);
  checkoutItems.innerHTML = state.cart.length
    ? state.cart
        .map(
          (item) => `
            <div class="checkout-item">
              <div>
                <strong>${item.name}</strong>
                <span>${item.size}, ${item.sauce} x ${item.qty}</span>
              </div>
              <strong>${formatPrice(item.price * item.qty)}</strong>
            </div>
          `
        )
        .join("")
    : "<p>Корзина пока пустая.</p>";
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  activateTab(button.dataset.target);
});

menuList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  const card = event.target.closest("[data-card-product]");
  if (button) {
    openProduct(button.dataset.product);
    return;
  }
  if (card) openProduct(card.dataset.cardProduct);
});

document.querySelector("#sizeOptions").addEventListener("click", (event) => {
  const button = event.target.closest("[data-size]");
  if (!button) return;
  const sizes = state.selectedProduct.sizes ?? [{ label: "1 порция", price: state.selectedProduct.price }];
  state.selectedSize = sizes.find((size) => size.label === button.dataset.size);
  renderSizeOptions();
  updateAddButton();
});

document.querySelector("#sauceOptions").addEventListener("click", (event) => {
  const button = event.target.closest("[data-sauce]");
  if (!button) return;
  state.selectedSauce = button.dataset.sauce;
  renderSauceOptions();
});

document.querySelector("#qtyMinus").addEventListener("click", () => {
  state.qty = Math.max(1, state.qty - 1);
  document.querySelector("#qtyValue").textContent = state.qty;
  updateAddButton();
});

document.querySelector("#qtyPlus").addEventListener("click", () => {
  state.qty += 1;
  document.querySelector("#qtyValue").textContent = state.qty;
  updateAddButton();
});

document.querySelector("#addToCart").addEventListener("click", addToCart);
cartBar.addEventListener("click", () => checkoutModal.showModal());

renderTabs();
renderMenu();
renderCart();
lucide.createIcons();
setHeroScene("for-you");
heroVideo?.addEventListener("loadeddata", playHeroVideo);
heroVideo?.addEventListener("canplay", playHeroVideo);
window.addEventListener("pageshow", playHeroVideo);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) playHeroVideo();
});
