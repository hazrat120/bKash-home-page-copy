AOS.init();

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  speed: 800,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
    slideChange: function () {
      const activeIndex = swiper.activeIndex;
      console.log("Current active slide index:", swiper.realIndex);
      console.log("Current real index:", swiper.realIndex);
      const headText = document.getElementsByClassName("haed_text");

      for (let item of headText) {
        item.classList.remove("show-head");
      }

      // const prevHead =
      //   headText[activeIndex === 0 ? headText.length - 1 : activeIndex - 1];

      // console.log(activeIndex);

      // prevHead.classList.remove("show-head");
      const activeItem = headText[activeIndex];
      activeItem.classList.add("show-head");
    },
  },
});

// ===== second swiper
var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 7,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper1.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}

let intervalId;

function mokeupSlide() {
  clearInterval(intervalId);
  const textBoxes = document.getElementsByClassName("mokeup-block-item");

  const boxSlides = document.getElementsByClassName("box-image");
  let count = 0;

  setInterval(() => {
    if (count === 3) count = 0;

    for (let box of textBoxes) {
      const textBoxTitle = box.querySelector("h3");
      const textBoxDot = box.querySelector(".rounded-circle");

      textBoxTitle.classList.remove("box-underline");
      textBoxDot.classList.remove("dot-animation");
    }

    for (let slide of boxSlides) {
      slide.classList.remove("box-slide-show");
    }

    const textBox = textBoxes[count];
    const slide = boxSlides[count];

    console.log(slide);

    slide.classList.add("box-slide-show");

    const textBoxTitle = textBox.querySelector("h3");
    const textBoxDot = textBox.querySelector(".rounded-circle");

    textBoxTitle.classList.add("box-underline");
    textBoxDot.classList.add("dot-animation");

    count++;
  }, 3000);
}

mokeupSlide();
