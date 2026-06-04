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
    title: "Крылья, которые залетают",
    subtitle: "Хруст, соус и жар прямо в твоём боксе",
    video: "/assets/category-hero/kling-test-hero.mp4",
    poster: "/assets/category-hero/wings.png",
  },
  wings: {
    title: "Выбирай остроту",
    subtitle: "Classic, boneless или tenders с соусом на максимум",
    video: "/assets/category-hero/kling-test-hero.mp4",
    poster: "/assets/category-hero/wings.png",
  },
  combo: {
    title: "Бокс на компанию",
    subtitle: "Крылья, закуски, дипы и напиток без лишних решений",
    video: "/assets/category-hero/hero-combo.mp4",
    poster: "/assets/category-hero/combo.png",
  },
  burgers: {
    title: "Сэндвич с характером",
    subtitle: "Сочная курица, соус и мягкая булка в один укус",
    video: "/assets/category-hero/hero-burgers.mp4",
    poster: "/assets/category-hero/burgers.png",
  },
  sides: {
    title: "Добавь хруст",
    subtitle: "Waffle fries, сырные палочки и кольца к любым крыльям",
    video: "/assets/category-hero/hero-sides.mp4",
    poster: "/assets/category-hero/snacks.png",
  },
  sauces: {
    title: "Соус решает",
    subtitle: "От Honey BBQ до Nuclear: собери свой вкус",
    video: "/assets/category-hero/hero-sauces.mp4",
    poster: "/assets/category-hero/sauces.png",
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
        desc: "Boneless wings, закуски, дип и напиток. Удобно есть на ходу.",
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
    title: "Закуски",
    items: [
      {
        id: "waffle-fries",
        name: "Famous Waffle Fries",
        desc: "Рифлёная картошка, которая держит соус лучше обычной фри.",
        price: 1290,
        spice: "snack",
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

const tabItems = [
  { title: "для тебя", target: "for-you" },
  { title: "крылья", target: "wings" },
  { title: "комбо", target: "combo" },
  { title: "бургеры", target: "burgers" },
  { title: "закуски", target: "sides" },
  { title: "соусы", target: "sauces" },
];

const spotlightIds = ["classic-wings", "classic-combo", "aw-sandwich", "mango-habanero"];
const newForYouIds = ["boneless-wings", "party-box", "bbq-sandwich", "mozzarella-sticks"];

const formatPrice = (value) => `${value.toLocaleString("ru-RU")} ₸`;

const state = {
  activeTab: "for-you",
  selectedProduct: null,
  selectedSize: null,
  selectedSauce: sauces[0],
  qty: 1,
  cart: [],
};

const menuList = document.querySelector("#menuList");
const tabs = document.querySelector(".category-tabs");
const productModal = document.querySelector("#productModal");
const checkoutModal = document.querySelector("#checkoutModal");
const cartBar = document.querySelector("#cartBar");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const checkoutTotal = document.querySelector("#checkoutTotal");
const checkoutItems = document.querySelector("#checkoutItems");
const heroVideo = document.querySelector("#heroVideo");
const heroFallback = document.querySelector("#heroFallback");
const heroTitle = document.querySelector("#heroTitle");
const heroSubtitle = document.querySelector("#heroSubtitle");
const modalImage = document.querySelector("#modalImage");

function findProduct(id) {
  for (const category of categories) {
    const product = category.items.find((item) => item.id === id);
    if (product) return { category, product };
  }
  return null;
}

function setHeroScene(sceneId) {
  const scene = heroScenes[sceneId] ?? heroScenes["for-you"];
  heroTitle.textContent = scene.title;
  heroSubtitle.textContent = scene.subtitle;

  if (!heroVideo) return;
  const source = heroVideo.querySelector("source");
  if (heroFallback) heroFallback.src = scene.poster;
  heroVideo.poster = scene.poster;

  if (source && source.getAttribute("src") !== scene.video) {
    source.setAttribute("src", scene.video);
    heroVideo.load();
  }

  playHeroVideo();
}

function playHeroVideo() {
  const playPromise = heroVideo?.play();
  if (playPromise?.catch) playPromise.catch(() => {});
}

function renderTabs() {
  tabs.innerHTML = tabItems
    .map(
      (item) =>
        `<button class="${state.activeTab === item.target ? "active" : ""}" data-target="${item.target}" type="button">${item.title}</button>`
    )
    .join("");
}

function renderMenu() {
  const html = state.activeTab === "for-you" ? renderForYou() : renderCategory(state.activeTab);
  menuList.classList.toggle("category-mode", state.activeTab !== "for-you");
  menuList.classList.remove("is-swapping");
  void menuList.offsetWidth;
  menuList.classList.add("is-swapping");
  menuList.innerHTML = html;
  lucide.createIcons();
}

function renderForYou() {
  const spotlight = spotlightIds.map((id) => findProduct(id)?.product).filter(Boolean);
  const newForYou = newForYouIds.map((id) => findProduct(id)?.product).filter(Boolean);

  return `
    <section class="menu-section menu-panel" data-panel="for-you">
      <h2 class="section-title">популярное сейчас</h2>
      <div class="product-row compact-row">
        ${spotlight.map((item) => renderProductCard(item, "compact")).join("")}
      </div>
    </section>

    <section class="promo-strip">
      <div>
        <strong>Соус в подарок</strong>
        <span>к заказу от 8 000 ₸ до конца дня</span>
      </div>
      <i data-lucide="flame"></i>
    </section>

    <section class="menu-section menu-panel">
      <h2 class="section-title">новое для тебя</h2>
      <div class="product-row feature-row">
        ${newForYou.map((item) => renderProductCard(item, "feature")).join("")}
      </div>
    </section>
  `;
}

function renderCategory(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return renderForYou();
  return `
    <section class="menu-section menu-panel category-page" data-panel="${category.id}">
      <h2 class="section-title">${category.title.toLowerCase()}</h2>
      <div class="category-grid">
        ${category.items.map((item) => renderProductCard(item, "catalog")).join("")}
      </div>
    </section>
  `;
}

function renderProductCard(item, variant) {
  const isFeature = variant === "feature";
  const isCatalog = variant === "catalog";
  return `
    <article class="product-card ${isFeature ? "feature-card" : "compact-card"} ${isCatalog ? "catalog-card" : ""}" data-card-product="${item.id}">
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

function activateTab(target) {
  if (state.activeTab === target) return;
  const keepHeroInView = window.scrollY < 220;
  state.activeTab = target;
  renderTabs();
  setHeroScene(target);
  renderMenu();
  menuList.scrollLeft = 0;
  if (keepHeroInView) window.scrollTo(0, 0);
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
heroVideo?.addEventListener("canplay", playHeroVideo);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) playHeroVideo();
});
window.addEventListener("pageshow", playHeroVideo);

renderTabs();
setHeroScene(state.activeTab);
renderMenu();
renderCart();
lucide.createIcons();
