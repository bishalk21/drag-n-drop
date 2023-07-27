const cards = document.querySelectorAll(".card");
const box = document.querySelector(".container");

const startDragging = (card) => {
  card.classList.add("dragging");
};

const stopDragging = (card) => {
  card.classList.remove("dragging");
};

cards.forEach((card) => {
  card.addEventListener("dragstart", () => {
    setTimeout(() => {
      startDragging(card);
    }, 0);
  });

  card.addEventListener("dragend", () => {
    stopDragging(card);
  });

  // Touch events for mobile
  card.addEventListener("touchstart", (e) => {
    startDragging(card);
    // Prevent default touchmove behavior to disable scrolling while dragging
    e.preventDefault();
  });

  card.addEventListener("touchend", () => {
    stopDragging(card);
  });
});

const sort = (e) => {
  e.preventDefault();
  const draggingItem = box.querySelector(".dragging");
  const otherItems = [...box.querySelectorAll(".card:not(.dragging)")];

  const mouseY = e.clientY || e.touches[0].clientY; // Handle both mouse and touch events

  let replaceOverItem = otherItems.find((item) => {
    return mouseY <= item.offsetTop + item.offsetHeight / 2;
  });

  box.insertBefore(draggingItem, replaceOverItem);
};

box.addEventListener("dragover", sort);
box.addEventListener("touchmove", sort); // Add touchmove event listener for mobile
