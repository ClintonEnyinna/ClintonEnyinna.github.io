window.onload = function () {
  let i = 0;
  let speed = 60;

  let txt = "I strive to create solution-driven applications.";
  let el = document.querySelector(".content");

  let greet = document.querySelector(".intro p:first-of-type");
  greet.classList.add("animate");

  setTimeout(function typeWriter() {
    if (i < txt.length) {
      el.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }, 1500);
};
