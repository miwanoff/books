window.onload = function () {
  const titles = document.getElementsByClassName("title");
  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", showBook, false);
  }
};

function showBook(event) {
  let title = event.target;
  let toHide = title.nextElementSibling;
  if (toHide) {
    if (!toHide.classList.contains("open")) {
      toHide.classList.add("open");
    }
    else{
        toHide.classList.remove("open");
    }
  }
}
