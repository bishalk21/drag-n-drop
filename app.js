const cards = document.querySelectorAll(".card");
const box = document.querySelector(".container");

cards.forEach((card) => {
  card.addEventListener("dragstart", () => {
    setTimeout(() => {
      //   console.log("dragged");
      card.classList.add("dragging"), 0;
    });
  });
  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
});

const sort = (e) => {
  e.preventDefault();
  const draggingItem = box.querySelector(".dragging");
  const otherItems = [...box.querySelectorAll(".card:not(.dragging)")];

  let replaceOverItem = otherItems.find((item) => {
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });

  box.insertBefore(draggingItem, replaceOverItem);
};

box.addEventListener("dragover", sort);
