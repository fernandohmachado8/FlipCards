// Fictional demo characters. Edit this collection to make the company your own.
const people = [
  {
    id: "alex",
    name: "Alex Rivera",
    role: "Visual designer & daydreamer",
    category: "creative",
    label: "The creative",
    color: "#e9bc9f",
    quote: "Collects records. And unfinished ideas.",
    description:
      "Sees a color palette in every sunset. Will absolutely judge a café by its typography, then stay for a second coffee.",
    detailLabel: "Currently on repeat",
    detail: "Jazz records on a Sunday morning",
    icon: "♫",
  },
  {
    id: "maya",
    name: "Maya Chen",
    role: "Photographer & light chaser",
    category: "creative",
    label: "The creative",
    color: "#d4dcb7",
    quote: "Always takes the scenic route.",
    description:
      "Believes the best photos happen between the planned ones. Usually found chasing golden hour with a very full camera roll.",
    detailLabel: "Never leaves without",
    detail: "A film camera and a little curiosity",
    icon: "☼",
  },
  {
    id: "leo",
    name: "Leo Brooks",
    role: "Trail finder & weekend wanderer",
    category: "explorer",
    label: "The explorer",
    color: "#c7c5de",
    quote: "“One more trail” is never one more.",
    description:
      "Turns a short walk into a small adventure. Makes a truly excellent campfire breakfast and a very questionable trail playlist.",
    detailLabel: "Happy place",
    detail: "Somewhere with no phone signal",
    icon: "↟",
  },
  {
    id: "nina",
    name: "Nina Patel",
    role: "Ceramic artist & happy maker",
    category: "maker",
    label: "The maker",
    color: "#e8c77e",
    quote: "Perfectly happy with imperfect.",
    description:
      "Makes mugs with personality and bread with a mind of its own. Thinks a little mess is usually the start of something good.",
    detailLabel: "Small daily ritual",
    detail: "Tea in a slightly wonky handmade mug",
    icon: "◒",
  },
  {
    id: "sam",
    name: "Sam Taylor",
    role: "City explorer & story collector",
    category: "explorer",
    label: "The explorer",
    color: "#b9cecf",
    quote: "Has a favorite spot in every city.",
    description:
      "A walking collection of tiny bookshops, late-night diners, and very specific recommendations. Gets lost on purpose.",
    detailLabel: "Always in the bag",
    detail: "A notebook full of almost-plans",
    icon: "↗",
  },
  {
    id: "zoe",
    name: "Zoe Martins",
    role: "Plant lover & things-from-scratch person",
    category: "maker",
    label: "The maker",
    color: "#d9c3ce",
    quote: "It started with just one plant.",
    description:
      "Now shares a home with a small jungle. Can fix a loose button, grow a new cutting, and make you feel instantly at home.",
    detailLabel: "Current side project",
    detail: "Making room for one more monstera",
    icon: "❋",
  },
];

const grid = document.querySelector("#card-grid");
const filters = [...document.querySelectorAll("[data-filter]")];
const flipAll = document.querySelector("#flip-all");
const status = document.querySelector("#gallery-status");
const flipIcon =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8a8 8 0 0 1 14-2l2 2M20 3v5h-5M20 16a8 8 0 0 1-14 2l-2-2M4 21v-5h5" /></svg>';

// All content is local, trusted project copy; no visitor input is inserted as HTML.
grid.innerHTML = people
  .map(
    (person, index) => `
  <button type="button" class="flip-card" data-person="${person.id}" data-category="${person.category}" style="--card-color:${person.color}" aria-pressed="false">
    <span class="card-inner">
      <span class="card-face card-front" aria-hidden="false">
        <span class="portrait-stage"><span class="card-topline"><span class="category-label">${person.label}</span><span class="card-number">NO. 0${index + 1}</span></span><img src="assets/portraits/${person.id}.svg" alt="" width="600" height="520" ${index > 2 ? 'loading="lazy"' : ""} /></span>
        <span class="card-caption"><span><span class="card-name">${person.name}</span><span class="card-role">${person.role}</span></span><span class="card-flip-icon" aria-hidden="true">${flipIcon}</span></span>
      </span>
      <span class="card-face card-back" aria-hidden="true">
        <span class="back-topline"><span>The other side of ${person.name.split(" ")[0]}</span><span class="back-star" aria-hidden="true">✳</span></span>
        <span class="back-quote">${person.quote}</span><span class="back-description">${person.description}</span>
        <span class="back-detail"><span class="detail-icon" aria-hidden="true">${person.icon}</span><span><span class="detail-label">${person.detailLabel}</span><span class="detail-value">${person.detail}</span></span></span>
        <span class="back-bottom"><span>A little more ${person.name.split(" ")[0]}. <span aria-hidden="true">♡</span></span><span class="card-flip-icon" aria-hidden="true">${flipIcon}</span></span>
      </span>
    </span>
  </button>
`,
  )
  .join("");

const cards = [...grid.querySelectorAll(".flip-card")];

function setFlipped(card, flipped) {
  const person = people.find((item) => item.id === card.dataset.person);
  card.classList.toggle("is-flipped", flipped);
  card.setAttribute("aria-pressed", String(flipped));
  card
    .querySelector(".card-front")
    .setAttribute("aria-hidden", String(flipped));
  card
    .querySelector(".card-back")
    .setAttribute("aria-hidden", String(!flipped));
  card.setAttribute(
    "aria-label",
    flipped
      ? `${person.name}. ${person.quote} ${person.description} ${person.detailLabel}: ${person.detail}. Flip back.`
      : `${person.name}, ${person.role}. Flip to discover their other side.`,
  );
}

function updateFlipAll() {
  const visibleCards = cards.filter((card) => !card.hidden);
  const allFlipped = visibleCards.every((card) =>
    card.classList.contains("is-flipped"),
  );
  flipAll.querySelector("span").textContent = allFlipped
    ? "Flip everyone back"
    : "Flip everyone";
}

cards.forEach((card) => {
  setFlipped(card, false);
  card.addEventListener("click", () => {
    setFlipped(card, !card.classList.contains("is-flipped"));
    updateFlipAll();
  });
});

filters.forEach((filter) =>
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    filters.forEach((button) => {
      const active = button === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
    const count = cards.filter((card) => !card.hidden).length;
    document.querySelector("#crew-count").textContent = String(count).padStart(
      2,
      "0",
    );
    status.textContent = `Showing ${count} ${category === "all" ? "people" : `${category}s`}.`;
    updateFlipAll();
  }),
);

flipAll.addEventListener("click", () => {
  const visibleCards = cards.filter((card) => !card.hidden);
  const shouldFlip = !visibleCards.every((card) =>
    card.classList.contains("is-flipped"),
  );
  visibleCards.forEach((card) => setFlipped(card, shouldFlip));
  updateFlipAll();
  status.textContent = `${visibleCards.length} cards turned to their ${shouldFlip ? "other sides" : "fronts"}.`;
});
