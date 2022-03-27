function registerClasses(element, cssClasses) {
  for (const cls of cssClasses) {
    element.setAttribute("class", cls);
  }
}

function registerStyles(element, styles) {
  for (const [key, value] of Object.entries(styles)) {
    element.setAttribute(key, value);
  }
}


function registerZoom(imgElem, mouseEventElem, initialClickEvent) {
  function mouseMoveHandler (event) {
    x = event.clientX/mouseEventElem.offsetWidth*100
    y = event.clientY/mouseEventElem.offsetHeight*100
    imgElem.style.transformOrigin = x + '% ' + y + '%';
  }
  mouseMoveHandler(initialClickEvent);
  mouseEventElem.onmousemove = mouseMoveHandler;
}

function unregisterZoom(imgElem, mouseEventElem) {
  mouseEventElem.onmousemove = undefined;
}


const imgModal = document.getElementById('imgModal');
imgModal.addEventListener('show.bs.modal', (event) => {
  const imgSrc = event.relatedTarget.getAttribute('data-bs-img-src');
  var imgElem = imgModal.querySelector('.modal-body>img');
  imgElem.src = imgSrc;
  const modalDialog = imgModal.querySelector('.modal-dialog');
  let isZoomed = false;
  imgElem.style.cursor = "zoom-in";
  imgElem.onclick = (e) => {
    if (!isZoomed) {
      modalDialog.classList.add("modal-dialog-zoomed");
      registerZoom(modalDialog, imgModal, e);
      imgElem.style.cursor = "zoom-out";
      isZoomed = true;
    } else {
      modalDialog.classList.remove("modal-dialog-zoomed");
      unregisterZoom(modalDialog, imgModal);
      imgElem.style.cursor = "zoom-in";
      isZoomed = false;
    }
  };
});
imgModal.addEventListener('hidden.bs.modal', (event) => {
  const modalDialog = imgModal.querySelector('.modal-dialog');
  const imgElem = imgModal.querySelector('.modal-body>img');
  modalDialog.classList.remove("modal-dialog-zoomed");
  imgElem.src = "";
  unregisterZoom(modalDialog, imgModal);
});