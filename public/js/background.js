(function () {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  window.requestAnimationFrame = requestAnimationFrame;
})();

const colors = {
  sky: "#0A0310",
  stars: "#EBD7FF",
  mountain1: "#260C40",
  mountain2: "#130620",
  mountain3: "#000000",
};

// Terrain stuff.
const background = document.getElementById("bgCanvas"),
  bgCtx = background.getContext("2d"),
  width = window.innerWidth,
  height = window.innerHeight;

background.width = width;
background.height = height;

class Terrain {
  constructor(options) {
    options = options || {};
    this.terrain = document.createElement("canvas");
    this.terCtx = this.terrain.getContext("2d");
    this.scrollDelay = options.scrollDelay || 90;
    this.lastScroll = new Date().getTime();

    this.terrain.width = width;
    this.terrain.height = height;
    this.terrain.className = "bgCanvas";
    this.fillStyle = options.fillStyle || colors.mountain1;
    this.mHeight = options.mHeight || height;

    // generate
    this.points = [];

    let displacement = options.displacement || 140,
      power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)));

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
bgCtx.fillStyle = colors.stars;
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
      if (this.x < 0 || this.y >= height) {
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
    fillStyle: colors.mountain2,
    mHeight: height / 2 - 60,
  })
);
entities.push(
  new Terrain({
    displacement: 100,
    scrollDelay: 20,
    fillStyle: colors.mountain3,
    mHeight: height / 2,
  })
);

//animate background
function animate() {
  bgCtx.fillStyle = colors.sky;
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = colors.stars;
  bgCtx.strokeStyle = colors.stars;

  let entLen = entities.length;

  while (entLen--) {
    entities[entLen].update();
  }
  requestAnimationFrame(animate);
}

animate();
