const sauces = [
  "Mild Buffalo",
  "Hot Buffalo",
  "Atomic",
  "Mango Habanero",
  "Garlic Parmesan",
  "Honey BBQ",
  "Thai Chili",
  "Сырный чеснок",
  "Аджика BBQ",
  "Корея spicy",
  "Ранч",
  "Blue Cheese",
];

const categories = [
  {
    id: "wings",
    title: "Крылья",
    items: [
      {
        id: "classic-wings",
        name: "Классические крылья",
        desc: "Хрустящие крылья на кости, соус на выбор и дип.",
        price: 2390,
        spice: "острота 2",
        sizes: [
          { label: "6 шт", price: 2390 },
          { label: "10 шт", price: 3690 },
          { label: "15 шт", price: 5290 },
        ],
      },
      {
        id: "boneless",
        name: "Boneless крылья",
        desc: "Сочное куриное филе без кости в хрустящей панировке.",
        price: 2490,
        spice: "острота 1",
        sizes: [
          { label: "8 шт", price: 2490 },
          { label: "12 шт", price: 3490 },
          { label: "18 шт", price: 4890 },
        ],
      },
      {
        id: "tenders",
        name: "Chicken tenders",
        desc: "Большие стрипсы из филе, идеально к ранчу и BBQ.",
        price: 2590,
        spice: "0",
        sizes: [
          { label: "4 шт", price: 2590 },
          { label: "6 шт", price: 3490 },
          { label: "9 шт", price: 4890 },
        ],
      },
    ],
  },
  {
    id: "combo",
    title: "Комбо",
    items: [
      {
        id: "zaletit-box",
        name: "Zaletit Box",
        desc: "10 крыльев, фри, 2 дипа и напиток. Самый быстрый выбор.",
        price: 4990,
        spice: "хит",
      },
      {
        id: "duo-box",
        name: "Duo Box",
        desc: "20 крыльев, большая фри, 4 дипа и два напитка.",
        price: 8990,
        spice: "на двоих",
      },
      {
        id: "lunch-combo",
        name: "Lunch Combo",
        desc: "6 boneless, фри и напиток для быстрого обеда.",
        price: 3290,
        spice: "15 мин",
      },
    ],
  },
  {
    id: "burgers",
    title: "Бургеры",
    items: [
      {
        id: "spicy-burger",
        name: "Spicy Chicken Burger",
        desc: "Куриное филе, острый баффало, салат, маринованный огурец.",
        price: 2790,
        spice: "острота 3",
      },
      {
        id: "bbq-burger",
        name: "BBQ Chicken Burger",
        desc: "Хрустящая курица, Honey BBQ, сыр, коул-слоу.",
        price: 2890,
        spice: "sweet",
      },
    ],
  },
  {
    id: "sides",
    title: "Гарниры",
    items: [
      {
        id: "fries",
        name: "Картофель фри",
        desc: "Золотистая фри с фирменной солью.",
        price: 990,
        spice: "side",
      },
      {
        id: "waffle-fries",
        name: "Вафельная картошка",
        desc: "Плотная вафельная нарезка, хорошо держит соус.",
        price: 1290,
        spice: "side",
      },
      {
        id: "mozzarella",
        name: "Сырные палочки",
        desc: "Тянущаяся моцарелла в хрустящей корочке.",
        price: 1690,
        spice: "cheese",
      },
    ],
  },
  {
    id: "drinks",
    title: "Напитки",
    items: [
      {
        id: "cola",
        name: "Cola 0.5",
        desc: "Холодная классика к острым крыльям.",
        price: 690,
        spice: "cold",
      },
      {
        id: "lemonade",
        name: "Манго-лимонад",
        desc: "Фирменный освежающий лимонад.",
        price: 1190,
        spice: "fresh",
      },
    ],
  },
];

const spotlightIds = ["classic-wings", "zaletit-box", "spicy-burger", "fries"];
const newForYouIds = ["duo-box", "bbq-burger", "waffle-fries", "lemonade"];
const sauceCards = ["Hot Buffalo", "Mango Habanero", "Garlic Parmesan", "Аджика BBQ"];

const formatPrice = (value) => `${value.toLocaleString("ru-RU")} ₸`;

const state = {
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
const heroVideo = document.querySelector(".hero-video");

function playHeroVideo() {
  if (!heroVideo) return;
  const attempt = heroVideo.play();
  if (attempt && typeof attempt.catch === "function") {
    attempt.catch(() => {});
  }
}

function renderTabs() {
  const labels = ["для тебя", "крылья", "комбо", "бургеры", "гарниры", "соусы"];
  tabs.innerHTML = labels
    .map((label, index) => {
      const targets = ["for-you", "wings", "combo", "burgers", "sides", "sauces"];
      const target = targets[index] ?? "for-you";
      return `<button class="${index === 0 ? "active" : ""}" data-target="${target}" type="button">${label}</button>`;
    })
    .join("");
}

function renderMenu() {
  const spotlight = spotlightIds.map((id) => findProduct(id)?.product).filter(Boolean);
  const newForYou = newForYouIds.map((id) => findProduct(id)?.product).filter(Boolean);

  menuList.innerHTML = `
    <section class="menu-section" id="for-you">
      <h2 class="section-title">популярное сейчас</h2>
      <div class="product-row compact-row">
        ${spotlight.map((item) => renderProductCard(item, "compact")).join("")}
      </div>
    </section>

    <section class="promo-strip">
      <div>
        <strong>Закажи на 8 000 ₸</strong>
        <span>и получи фирменный дип к крыльям</span>
      </div>
      <i data-lucide="gift"></i>
    </section>

    <section class="menu-section feature-section">
      <h2 class="section-title">новое для тебя</h2>
      <div class="product-row feature-row">
        ${newForYou.map((item) => renderProductCard(item, "feature")).join("")}
      </div>
    </section>

    ${categories
      .filter((category) => category.id !== "drinks")
      .map(
        (category) => `
          <section class="menu-section" id="${category.id}">
            <h2 class="section-title">${category.title.toLowerCase()}</h2>
            <div class="product-row compact-row">
              ${category.items.map((item) => renderProductCard(item, "compact")).join("")}
            </div>
          </section>
        `
      )
      .join("")}

    <section class="menu-section" id="sauces">
      <h2 class="section-title">соусы</h2>
      <div class="sauce-card-row">
        ${sauceCards
          .map(
            (sauce) => `
              <button class="sauce-card" data-sauce-card="${sauce}" type="button">
                <span>${sauce}</span>
                <small>к крыльям</small>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderProductCard(item, variant) {
  const isFeature = variant === "feature";
  return `
    <article class="product-card ${isFeature ? "feature-card" : "compact-card"}" data-card-product="${item.id}">
      <div class="product-visual">
        <img src="/zaletit-wings.jpg" alt="${item.name}" loading="lazy" />
        ${isFeature ? `<button class="add-button" data-product="${item.id}" type="button" aria-label="Добавить ${item.name}"><i data-lucide="plus"></i></button>` : ""}
      </div>
      <div class="product-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="product-meta">
          <strong class="price">${formatPrice(item.price)}</strong>
          ${isFeature ? `<span class="spice">${item.spice}</span>` : `<i data-lucide="chevron-right"></i>`}
        </div>
      </div>
    </article>
  `;
}

function findProduct(productId) {
  for (const category of categories) {
    const product = category.items.find((item) => item.id === productId);
    if (product) {
      return { product, category };
    }
  }
  return null;
}

function openProduct(productId) {
  const match = findProduct(productId);
  if (!match) return;

  state.selectedProduct = match.product;
  state.selectedSize = match.product.sizes?.[0] ?? { label: "1 порция", price: match.product.price };
  state.selectedSauce = sauces[0];
  state.qty = 1;

  document.querySelector("#modalCategory").textContent = match.category.title;
  document.querySelector("#modalTitle").textContent = match.product.name;
  document.querySelector("#modalDescription").textContent = match.product.desc;
  document.querySelector("#qtyValue").textContent = state.qty;
  renderSizeOptions();
  renderSauceOptions();
  updateAddButton();
  productModal.showModal();
  lucide.createIcons();
}

function renderSizeOptions() {
  const sizeBlock = document.querySelector("#sizeBlock");
  const sizeOptions = document.querySelector("#sizeOptions");
  const sizes = state.selectedProduct.sizes ?? [{ label: "1 порция", price: state.selectedProduct.price }];
  sizeBlock.hidden = sizes.length <= 1 && !state.selectedProduct.sizes;
  sizeOptions.innerHTML = sizes
    .map(
      (size) => `
        <button class="${size.label === state.selectedSize.label ? "active" : ""}" data-size="${size.label}" type="button">
          ${size.label}<br>${formatPrice(size.price)}
        </button>
      `
    )
    .join("");
}

function renderSauceOptions() {
  document.querySelector("#sauceOptions").innerHTML = sauces
    .map((sauce) => `<button class="${sauce === state.selectedSauce ? "active" : ""}" data-sauce="${sauce}" type="button">${sauce}</button>`)
    .join("");
}

function updateAddButton() {
  const total = state.selectedSize.price * state.qty;
  document.querySelector("#addToCart").textContent = `Добавить за ${formatPrice(total)}`;
}

function addToCart() {
  state.cart.push({
    id: crypto.randomUUID(),
    name: state.selectedProduct.name,
    size: state.selectedSize.label,
    sauce: state.selectedSauce,
    qty: state.qty,
    price: state.selectedSize.price,
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
  tabs.querySelectorAll("button").forEach((tab) => tab.classList.remove("active"));
  button.classList.add("active");
  document.querySelector(`#${button.dataset.target}`).scrollIntoView({ behavior: "smooth", block: "start" });
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
playHeroVideo();
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) playHeroVideo();
});
