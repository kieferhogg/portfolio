"use strict";
(function () {
  window.requestAnimationFrame =
    window?.requestAnimationFrame ??
    window?.mozRequestAnimationFrame ??
    window?.webkitRequestAnimationFrame ??
    window?.msRequestAnimationFrame ??
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

const sky = "#0A0310";
const stars = "#EBD7FF";
const mountain1 = "#260C40";
const mountain2 = "#130620";
const mountain3 = "#000000";

// Terrain stuff.
const background = document.getElementById("bgCanvas");
const bgCtx = background.getContext("2d");
const width = screen.width;
const height = screen.height;

background.width = width;
background.height = height;

class Terrain {
  constructor(options) {
    options = options ?? {};
    this.terrain = document.createElement("canvas");
    this.terCtx = this.terrain.getContext("2d");
    this.scrollDelay = options.scrollDelay ?? 90;
    this.lastScroll = new Date().getTime();

    this.terrain.width = width;
    this.terrain.height = height;
    this.terrain.className = `bgCanvas`;
    this.fillStyle = options.fillStyle ?? mountain1;
    this.mHeight = options.mHeight ?? height;

    // generate
    this.points = [];

    let displacement = options.displacement ?? 140;
    const power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)));

    // set the start height and end height for the terrain
    this.points[0] = this.mHeight; //(this.mHeight - (Math.random() * this.mHeight / 2)) - displacement;
    this.points[power] = this.points[0];

    // create the rest of the points
    for (let i = 1; i < power; i *= 2) {
      for (let j = power / i / 2; j < power; j += power / i) {
        this.points[j] =
          (this.points[j - power / i / 2] + this.points[j + power / i / 2]) /
            2 +
          Math.floor(Math.random() * -displacement + displacement);
      }
      displacement *= 0.6;
    }
    document.getElementById("__next").appendChild(this.terrain);
  }
  update() {
    // draw the terrain
    this.terCtx.clearRect(0, 0, width, height);
    this.terCtx.fillStyle = this.fillStyle;

    if (new Date().getTime() > this.lastScroll + this.scrollDelay) {
      this.lastScroll = new Date().getTime();
      this.points.push(this.points.shift());
    }

    this.terCtx.beginPath();
    for (let i = 0; i <= width; i++) {
      if (i === 0) {
        this.terCtx.moveTo(0, this.points[0]);
      } else if (this.points[i] !== undefined) {
        this.terCtx.lineTo(i, this.points[i]);
      }
    }

    this.terCtx.lineTo(width, this.terrain.height);
    this.terCtx.lineTo(0, this.terrain.height);
    this.terCtx.lineTo(0, this.points[0]);
    this.terCtx.fill();
  }
}

// Second canvas used for the stars
bgCtx.fillStyle = stars;
bgCtx.fillRect(0, 0, width, height);

// stars
class Star {
  constructor(options) {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.05;
    this.x = options.x;
    this.y = options.y;
  }
  reset() {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.05;
    this.x = width;
    this.y = Math.random() * height;
  }
  update() {
    this.x -= this.speed;
    if (this.x < 0) {
      this.reset();
    } else {
      bgCtx.fillRect(this.x, this.y, this.size, this.size);
    }
  }
}

class ShootingStar {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = 0;
    this.len = Math.random() * 80 + 10;
    this.speed = Math.random() * 10 + 6;
    this.size = Math.random() * 1 + 0.1;
    // this is used so the shooting stars arent constant
    this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
    this.active = false;
  }
  update() {
    if (this.active) {
      this.x -= this.speed;
      this.y += this.speed;
      if (this.x < 0 ?? this.y >= height) {
        this.reset();
      } else {
        bgCtx.lineWidth = this.size;
        bgCtx.beginPath();
        bgCtx.moveTo(this.x, this.y);
        bgCtx.lineTo(this.x + this.len, this.y - this.len);
        bgCtx.stroke();
      }
    } else {
      if (this.waitTime < new Date().getTime()) {
        this.active = true;
      }
    }
  }
}

const entities = [];

// init the stars
for (let i = 0; i < height; i++) {
  entities.push(
    new Star({
      x: Math.random() * width,
      y: Math.random() * height,
    })
  );
}

// Add 2 shooting stars that just cycle.
entities.push(new ShootingStar());
entities.push(new ShootingStar());
entities.push(new Terrain({ mHeight: height / 2 - 120 }));
entities.push(
  new Terrain({
    displacement: 120,
    scrollDelay: 50,
    fillStyle: mountain2,
    mHeight: height / 2 - 60,
  })
);
entities.push(
  new Terrain({
    displacement: 100,
    scrollDelay: 20,
    fillStyle: mountain3,
    mHeight: height / 2,
  })
);

//animate background
function animate() {
  bgCtx.fillStyle = sky;
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = stars;
  bgCtx.strokeStyle = stars;

  let entLen = entities.length;

  while (entLen--) {
    entities[entLen].update();
  }
  requestAnimationFrame(animate);
}

animate();

//resize
addEventListener("resize", (event) => {
  let resize;
  const resizedw = () => {
    document.querySelectorAll(".bgCanvas").forEach((canvas) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  };

  clearTimeout(resize);
  resize = setTimeout(resizedw, 500);
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let iteration = 0;

      // get the interval for this element from the intervals Map
      const interval = intervals.get(entry.target);
      clearInterval(interval);

      // create a new interval for this element and store it in the intervals Map
      const newInterval = setInterval(() => {
        if (!entry.target.dataset.value) {
          return;
        }
        entry.target.innerText = entry.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return entry.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= entry.target.dataset.value.length) {
          clearInterval(newInterval);
        }

        iteration += 1 / 3;
      }, 10);

      intervals.set(entry.target, newInterval);
    }
  });
});

// observe all h1-3 lements
const elements = [
  ...document.querySelectorAll("h1"),
  ...document.querySelectorAll("h2"),
  ...document.querySelectorAll("h3"),
];
const intervals = new Map();

elements.forEach((element) => {
  intervals.set(element, null); // initialize the intervals Map with null for each element
  observer.observe(element);
});
