window.onload = function() {

  let i = 0;
  let speed = 80;

  (function typeWriter() {

    let txt = 'I strive to create solution-driven applications.';
    let el = document.querySelector(".content");

    if (i < txt.length) {
      el.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  })()
}