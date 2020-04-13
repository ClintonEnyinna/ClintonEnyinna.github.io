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

  function getSectionHeight() {
    let sections = document.querySelectorAll("section");
    let height = 0;
    let sectionPos = [];

    sections.forEach((section) => {
      height =
        section.clientHeight + height - (section.clientHeight + height) * 0.05;

      let pos = {
        height: height,
      };
      sectionPos.push(pos);
    });
    return sectionPos;
  }

  window.onscroll = function () {
    let sections = getSectionHeight();
    let current = document.querySelector(".active");
    let currentHeight =
      document.documentElement.scrollTop || document.body.scrollTop;

    function setActive(section) {
      current.className = current.className.replace(" active", "");
      document.querySelector(section).className += " active";
    }

    if (currentHeight < sections[0].height) {
      setActive("a[href='#hero']");
    } else if (
      currentHeight > sections[0].height &&
      currentHeight < sections[1].height
    ) {
      setActive("a[href='#about']");
    } else if (
      currentHeight > sections[1].height &&
      currentHeight < sections[2].height
    ) {
      setActive("a[href='#skills']");
    } else if (
      currentHeight > sections[2].height &&
      currentHeight < sections[3].height
    ) {
      setActive("a[href='#projects']");
    } else {
      setActive("a[href='#contact']");
    }
  };
};
