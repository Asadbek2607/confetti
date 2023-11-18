// Confetti Effects
function checkAndFireAutoClick() {
  var currentDate = new Date();
  // test
  if ((currentDate.getMonth() === 10 && (currentDate.getDate() === 18 || currentDate.getDate() === 19))) {
    autoClickButton();
  }


  // Constitution day (7 and 8 December)
  if ((currentDate.getMonth() === 11 && (currentDate.getDate() === 7 || currentDate.getDate() === 8))) {
    autoClickButton();
  }

  // Happy New Year (28-31 December and 1-5 January)
  else if (
    ((currentDate.getMonth() === 11 && currentDate.getDate() >= 28) || (currentDate.getMonth() === 0 && currentDate.getDate() <= 5))
  ) {
    autoClickButton();
  }

  // Defenders Day (13 and 14 January)
  else if (currentDate.getMonth() === 0 && (currentDate.getDate() === 13 || currentDate.getDate() === 14)) {
    autoClickButton();
  }

  // Woman's day (7 and 8 March)
  else if (currentDate.getMonth() === 2 && (currentDate.getDate() === 7 || currentDate.getDate() === 8)) {
    autoClickButton();
  }

  // Navruz (21 March)
  else if (currentDate.getMonth() === 2 && currentDate.getDate() === 21) {
    autoClickButton();
  }

  // Ramazon (8-10 April)
  else if (
    (currentDate.getMonth() === 3 && (currentDate.getDate() === 8 || currentDate.getDate() === 9 || currentDate.getDate() === 10))
  ) {
    autoClickButton();
  }
}

function autoClickButton() {
  // Simulate a click on the desired button (adjust the index as needed)
  document.getElementsByClassName("confetti-button")[5].click();

}

// Function to set up the timer
function setupAutoClickTimer() {
  // Run the checkAndFireAutoClick function initially
  checkAndFireAutoClick();

  // Set up an interval to run the checkAndFireAutoClick function every 10 minutes
  setInterval(checkAndFireAutoClick, 1 * 60 * 1000); // 10 minutes in milliseconds
}

// Call the setupAutoClickTimer function to start the timer
setupAutoClickTimer();


// Fireworks Effect
var fireworksEffect = function() {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
};

// School Pride Effect
var schoolprideEffect = function() {
  var end = Date.now() + (5 * 1000);

  // go Buckeyes!
  var colors = ['#bb0000', '#ffffff'];
  
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};  

// Realistic Look Effect  
var realisticlookEffect = function() {
var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
};

// Stars Effect
var starsEffect = function() {
  var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['star'],
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    });
  }
  
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};

// Snow Effect   
var snowEffect = function() {
var duration = 5 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());
};

// button functions
document.getElementsByClassName("confetti-button")[0].addEventListener("click", fireworksEffect, false);
document.getElementsByClassName("confetti-button")[1].addEventListener("click", schoolprideEffect, false);
document.getElementsByClassName("confetti-button")[2].addEventListener("click", realisticlookEffect, false);
document.getElementsByClassName("confetti-button")[3].addEventListener("click", starsEffect, false);
document.getElementsByClassName("confetti-button")[4].addEventListener("click", snowEffect, false);

// All Mix Effect   
document.getElementsByClassName("confetti-button")[5].addEventListener("click", () => {
  fireworksEffect();
  schoolprideEffect();
  realisticlookEffect();
  starsEffect();
  snowEffect();
});  
