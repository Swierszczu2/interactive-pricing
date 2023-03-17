const toggleButton = document.querySelector(".activate-button");
const discountEl = document.querySelector(".discount");
const slider = document.querySelector(".range");
const pageViewsEl = document.querySelector(".pageviews");
const priceEl = document.querySelector(".price");

const priceList = [
  {
    views: "10K",
    price: "8",
  },
  {
    views: "50K",
    price: "12",
  },
  {
    views: "100K",
    price: "16",
  },
  {
    views: "500K",
    price: "24",
  },
  {
    views: "1M",
    price: "36",
  },
];

function setTariff() {
  priceList.forEach((element) => {
    if (priceList[slider.value] === element) {
      priceEl.textContent = `$${element.price}.00`;
      pageViewsEl.textContent = element.views;
    }
  });
}

function activeDiscount() {
  priceList.forEach((element) => {
    if (priceList[slider.value] === element) {
      priceEl.textContent = `$${element.price * 0.75}.00`;
      pageViewsEl.textContent = element.views;
    }
  });
}

toggleButton.addEventListener("change", () => {
  if (toggleButton.checked === true) {
    activeDiscount();
  } else {
    setTariff();
  }
});

slider.addEventListener("change", () => {
  if (toggleButton.checked === true) {
    activeDiscount();
  } else {
    setTariff();
  }
  const fill = document.querySelector(".fill");
  const maxVal = slider.getAttribute("max");
  const val = (slider.value / maxVal) * 100 + "%";
  fill.style.width = val;
});

//on load
window.addEventListener("load", () => {
  if (screen.width > 375) {
    discountEl.textContent = "25% discount";
  }
  setTariff();
});
