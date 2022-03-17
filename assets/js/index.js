const images = document.querySelectorAll(".gallery-container img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        zoomedSrc = e.target.getAttribute("zoomed-src");
        imgSrc = zoomedSrc || e.target.src;
        //run modal function
        imgModal(imgSrc);
    });
});
//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //creating the close button
  const closeBtn = document.createElement("button");
  closeBtn.setAttribute("class", "btn-close btn-close-white closeBtn");
  closeBtn.setAttribute("type", "button");
  closeBtn.setAttribute("aria-label", "Close");
  //close function
  closeBtn.onclick = () => {
      modal.remove();
  };
  modal.onclick = ({ target }) => {
    if (target === modal) {
      modal.remove();
    }
  }
  let isZoomed = false;
  newImage.onclick = () => {
    if (!isZoomed) {
      modal.classList.add("modal-zoomed");
      isZoomed = true;
    } else {
      modal.classList.remove("modal-zoomed");
      isZoomed = false;
    }
  };
  modal.append(newImage, closeBtn);
};
document.addEventListener("keydown", (event) => {
  if (event.keyCode == 27) {
    const modal = document.querySelector(".modal");
    if (modal !== null) {
      modal.remove();
    }
  }
})
