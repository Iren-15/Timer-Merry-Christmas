function ChristmasCountdown() {
  const ChristmasDay = new Date("December 25, 2024 00:00:00");
  const myDay = new Date();
  const diff = ChristmasDay - myDay;

  const msInSeecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

  const displayDays = diff / msInDay;
  document.querySelector(".days").textContent = Math.floor(displayDays);
  const displayHours = (diff % msInDay) / msInHour;
  document.querySelector(".hours").textContent = Math.floor(displayHours);
  const displayMinutes = (diff % msInHour) / msInMinute;
  document.querySelector(".minutes").textContent = Math.floor(displayMinutes);
  const displaySeconds = (diff % msInMinute) / msInSeecond;
  document.querySelector(".seconds").textContent = Math.floor(displaySeconds);

  if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    merryChristmas();
  }
}

let timerID = setInterval(ChristmasCountdown, 1000);

function merryChristmas() {
  const heading = document.querySelector("h1");
  heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!!!";
  heading.classList.add("red");
  const christmasBox = document.querySelectorAll(".block");
  christmasBox.forEach((item) => {
    item.classList.add("red-box");
  });
}

const btn = document.querySelector("#myBtn");
const audio = document.querySelector("#myAudio");
btn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    btn.classList.toggle("pause");
  } else {
    audio.pause();
    btn.classList.toggle("pause");
  }
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 2000,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      //type: "image",
      stroke: {
        width: 2,
        color: "#fff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 30,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 50,
      color: "#ffffff",
      opacity: 0.6,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.2,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
