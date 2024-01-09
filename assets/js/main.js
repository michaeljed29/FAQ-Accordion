const accordionTiles = document.querySelectorAll(".accordion__tile");

accordionTiles.forEach((accordionTile) => {
  accordionTile.addEventListener("click", () => {
    accordionTile.classList.toggle("active");

    const content = accordionTile.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
