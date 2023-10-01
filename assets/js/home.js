// Nav btn click function

const nav_links_tablet = document.querySelector(".nav-links-tablet");
const nav_links_tablet_scroll = document.querySelector(
  ".nav-links-tablet-scroll"
);
const nav_btn = document.querySelector(".nav-btn");
const nav_btn_scroll = document.querySelector(".nav-btn-scroll");

nav_btn.addEventListener("click", () => {
  nav_links_tablet.classList.toggle("open");
});

nav_btn_scroll.addEventListener("click", () => {
  nav_links_tablet_scroll.classList.toggle("open");
});

// Nav scroll function

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("header-nav-scroll").style.top = "0";
  } else {
    document.getElementById("header-nav-scroll").style.top = "-100px";
  }
}

// Nav tablet scroll function

function scrollFunctionTablet() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("header-nav-tablet-scroll").style.top = "0";
  } else {
    document.getElementById("header-nav-tablet-scroll").style.top = "-500px";
  }
}

window.onscroll = function () {
  scrollFunction();
  scrollFunctionTablet();
};

// Customer Details Number Animation

let duration = 7000;

// Value Coffe

  function animateValueyear(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const obj_coffe = document.querySelector(".value-coffe");
  animateValueyear(obj_coffe, 0, 100, duration);

  // Value Number

  function animateValueyear(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const obj_number = document.querySelector(".value-number");
  animateValueyear(obj_number, 0, 85, duration);

    // Value Happy

    function animateValueyear(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    const obj_happy = document.querySelector(".value-happy");
    animateValueyear(obj_happy, 0, 10567, duration);

        // Value Staff

        function animateValueyear(obj, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
        const obj_staf = document.querySelector(".value-staf");
        animateValueyear(obj_staf, 0, 900 , duration);