var parentElements = document.querySelectorAll('.playlist-item');

// Iterate over each parent element
parentElements.forEach(function (parentElement) {
  parentElement.addEventListener('click', function (event) {
    const parentElement = this
    const x = event.pageX;
    const y = event.pageY;
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    clon.getElementById("popup");
    let popup = clon.getElementById("popup");
    document.body.appendChild(popup)
    popup.style.left = x + "px";
    popup.style.top = y + "px";
    popup.style.display = "flex"
    const link = parentElement.getAttribute("data-link");
    navigator.clipboard.writeText(link);
    setTimeout(function () {
      popup.style.opacity = "0";
    }, 2000)
    setTimeout(function () {
      document.body.removeChild(popup)
    }, 2100)
  });
});

