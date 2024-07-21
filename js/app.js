const parentElements = document.querySelectorAll('.playlist-item');

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


  parentElement.addEventListener("dblclick", function (event) {
    window.open(parentElement.getAttribute("data-link"), '_blank');
  })

  let lastTap = 0;
  const doubleTapDelay = 300;

  parentElement.addEventListener('touchend', function (event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < doubleTapDelay && tapLength > 0) {
      window.open(parentElement.getAttribute("data-link"), '_blank');
    }
    lastTap = currentTime;
  });

});


tippy('#help', {
  content: 'Click to copy link, double click to get redirected',
  arrow: true,
});



