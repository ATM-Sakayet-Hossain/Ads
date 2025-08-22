// JavaScript for Product Popup Animation
window.onload = () => {
  capAnimation();
  setTimeout(closePopup, 30000); // Auto-close after 30 seconds
};

function capAnimation() {
  const cap = document.querySelector(".product-cap");
  gsap.fromTo(
    cap,
    { opacity: 1, x: 1200, scale: 1.5, rotate: -360 },
    {
      x: 100,
      y: 100,
      rotate: 360,
      duration: 1.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(cap, {
          opacity: 0,
          scale: 0,
          duration: 2,
          delay: 1,
          onComplete: () => ballAnimation(),
        });
      },
    }
  );
}

function ballAnimation() {
  const ball = document.querySelector(".product-ball");
  gsap.fromTo(
    ball,
    { opacity: 1, x: 0, scale: 0 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "bounce.out",
      onComplete: () => {
        gsap.to(ball, {
          x: 100,
          y: 100,
          repeat: 1,
          yoyo: true,
          duration: 0.4,
          ease: "power1.inOut",
          delay: 0.5,
        });
        gsap.to(ball, {
          opacity: 0,
          scale: 0,
          duration: 0.8,
          delay: 1.5,
          onComplete: () => giftBoxAnimation(),
        });
      },
    }
  );
}

function giftBoxAnimation() {
  const box = document.querySelector(".gift-box");
  const lid = document.querySelector(".box-lid");
  const items = document.querySelectorAll(".product-item");
  const fridge = document.querySelectorAll(".product-fridge");
  const cola = document.querySelectorAll(".product-cola");
  const mobile = document.querySelectorAll(".product-mobile");
  const tv = document.querySelectorAll(".product-tv");

  gsap.to(box, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" });
  gsap.to(lid, {
    rotateX: 120,
    duration: 1,
    delay: 1,
    transformOrigin: "bottom center",
    ease: "power2.out",
  });
  gsap.to(fridge, {
    x: 0,
    y: 0,
    scale: 0,
    rotate: 6,
    duration: 0.5,
    ease: "power1.inOut",
  });
  gsap.to(cola, {
    x: 0,
    y: 0,
    scale: 0,
    rotate: 5,
    duration: 0.5,
    ease: "power1.inOut",
  });
  gsap.to(mobile, {
    x: 0,
    y: 0,
    scale: 0,
    rotate: -3,
    duration: 0.5,
    ease: "power1.inOut",
  });
  gsap.to(tv, {
    x: 0,
    y: 0,
    scale: 0,
    rotate: 6,
    duration: 0.5,
    ease: "power1.inOut",
  });
  gsap.to(items, {
    opacity: 1,
    scale: 1,
    y: -40,
    duration: 0.8,
    delay: 1.2,
    stagger: 0.25,
    ease: "back.out(1.7)",
    onComplete: () => launchConfetti(),
  });
}

function launchConfetti() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6, x: 0.5 },
    colors: [
      "#ff0000",
      "#ffa500",
      "#ffff00",
      "#008000",
      "#0000ff",
      "#4b0082",
      "#ee82ee",
    ],
  });
}

function closePopup() {
  document.getElementById("ppm_container").style.display = "none";
}
