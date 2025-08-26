window.onload = () => {
  capAnimation();
  setTimeout(closePopup, 30000);
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
  const solaiman = document.querySelectorAll(".solaiman-lipi");

  // Animate gift box and lid
  gsap.to(box, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" });
  gsap.to(lid, {
    rotateX: 120,
    duration: 1,
    delay: 1,
    transformOrigin: "bottom center",
    ease: "power2.out",
    onComplete: () => {
      startCircleSpin();
      gsap.to(items, {
        opacity: 1,
        scale: 1,
        y: -40,
        duration: 0.8,
        stagger: 0.25,
        ease: "back.out(1.7)",
        onComplete: () => launchConfetti(),
      });
    },
  });
  gsap.to(solaiman, {
    opacity: 0,
    scale: 1,
    y: -20,
    delay: 0,
    stagger: 0,
    ease: "back.out(1.7)",
    onComplete: () => {
      startCircleSpin();
      gsap.to(solaiman, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,

        stagger: 0.25,
        ease: "back.out(1.7)",
      });
    },
  });
}

//circle animation
const circle = document.querySelector(".main-circle"),
  imageURLs = [
    "../image/product-1.png",
    "../image/product-2.png",
    "../image/product-3.png",
    "../image/product-4.png",
    "../image/product-5.png",
    "../image/product-1.png",
    "../image/product-2.png",
    "../image/product-3.png",
    "../image/product-4.png",
    "../image/product-5.png",
  ];

let spin;

function startCircleSpin() {
  const images = placeImages(imageURLs);

  if (!spin) {
    spin = gsap
      .timeline({ repeat: -1, defaults: { duration: 50, ease: "none" } })
      .to(circle, { rotation: 360 })
      .to(images, { rotation: -360 }, 0);
  }
}

function placeImages(imageURLs) {
  let angleIncrement = (Math.PI * 2) / imageURLs.length,
    radius = circle.offsetWidth / 2,
    images = [],
    image,
    angle,
    i;

  for (i = 0; i < imageURLs.length; i++) {
    image = new Image();
    images.push(image);
    circle.appendChild(image);
    angle = angleIncrement * i;
    gsap.set(image, {
      attr: { src: imageURLs[i] },
      position: "absolute",
      top: 0,
      left: 0,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
      x: radius + Math.cos(angle) * radius,
      y: radius + Math.sin(angle) * radius,
      width: 140,
      borderRadius: "50%",
      pointerEvents: "auto",
    });
    image.style.cursor = "pointer";
    (function (img) {
      img.addEventListener("click", function (e) {
        window.open("https://www.teashop.com.bd/", "_blank");
        e.stopPropagation();
      });
    })(image);
  }
  return images;
}

function launchConfetti() {
  confetti({
    particleCount: 3000,
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

// function closePopup() {
//   document.getElementById("ppm_container").style.display = "none";
// }
