/*Fill 1 by 1*/
var progressBar = document.querySelectorAll(".skill-progress>div");

function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}
for (var bar of progressBar) {
  initialiseBar(bar);
}

function fillBar(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 10);
}

function checkScroll() {
  for (let bar of progressBar) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}
window.addEventListener("scroll", checkScroll);

/*Percentage Scrolled*/

document.addEventListener("DOMContentLoaded", function () {
  const progressbarinner = document.querySelector(".progress-bar-inner");

  window.addEventListener("scroll", function () {
    let height = document.documentElement;

    let scrollTop = height.scrollTop;
    let scrollHeight = height.scrollHeight;

    let percent = (scrollTop / (scrollHeight - height.clientHeight)) * 100;
    console.log(percent);
    let roundedPercent = Math.round(percent);

    progressbarinner.style.width = percent + "%";
    progressbarinner.innerText = roundedPercent + "%";
  });
});
