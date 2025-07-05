gsap.registerPlugin(ScrollTrigger);

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navContent = document.querySelector('.nav-content');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navContent.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.header a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navContent.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !navContent.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navContent.classList.remove('active');
    }
});

// Logo animation on load
gsap.from(".logo", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

// Header links animate in on scroll
gsap.utils.toArray(".header a").forEach((link, i) => {
  gsap.from(link, {
    scrollTrigger: {
      trigger: link,
      start: "top 90%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: "back.out(1.7)"
  });
});

// Nav buttons animate in on scroll
gsap.utils.toArray(".btn button").forEach((btn, i) => {
  gsap.from(btn, {
    scrollTrigger: {
      trigger: btn,
      start: "top 95%",
    },
    y: 30,
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: i * 0.1,
    ease: "elastic.out(1, 0.6)"
  });
});

// Section1 left h1 and p animate on scroll
gsap.from([".section1 .left p"], {
  scrollTrigger: {
    trigger: ".section1 .left h1",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.18
});

// Animate #btn buttons in section1
gsap.from(".section1 .left #btn button", {
  scrollTrigger: {
    trigger: ".section1 .left #btn",
    start: "top 85%",
  },
  y: 30,
  opacity: 0,
  scale: 0.8,
  duration: 0.7,
  stagger: 0.15,
  ease: "back.out(1.7)"
});

// Animate .heroleft stats
gsap.from(".heroleft span", {
  scrollTrigger: {
    trigger: ".heroleft",
    start: "top 90%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
});

// Animate .leftlast users
gsap.from(".leftlast .user", {
  scrollTrigger: {
    trigger: ".leftlast",
    start: "top 95%",
  },
  x: -40,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
  ease: "power2.out"
});

// Animate .activeuser
gsap.from(".activeuser", {
  scrollTrigger: {
    trigger: ".activeuser",
    start: "top 95%",
  },
  scale: 0.7,
  opacity: 0,
  duration: 0.7,
  ease: "back.out(1.7)"
});

// Animate section1 .right .card
gsap.from(".section1 .right .card", {
  scrollTrigger: {
    trigger: ".section1 .right .card",
    start: "top 90%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Animate section3 slider images
gsap.utils.toArray(".slider .img").forEach((img, i) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 95%",
    },
    y: 60,
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power3.out"
  });
});

// Animate section4 usercards
gsap.utils.toArray(".usercard").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 95%",
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    delay: i * 0.05,
    ease: "power2.out"
  });
});

// Animate section5 artwork cards
gsap.utils.toArray(".artwork-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 95%",
    },
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 0.7,
    delay: i * 0.07,
    ease: "power3.out"
  });
});

// Animate join banner with proper initial state
gsap.set(".join-banner", { opacity: 1, visibility: "visible" });

gsap.from(".join-banner", {
  scrollTrigger: {
    trigger: ".join-banner",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  },
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

// Animate banner stats (only if banner-stats exists)
if (document.querySelector(".banner-stats")) {
  gsap.from(".banner-stats .stat-item", {
    scrollTrigger: {
      trigger: ".banner-stats",
      start: "top 85%",
    },
    y: 30,
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });
}

// Animate footer
gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 95%",
  },
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Animate footer brand
gsap.from(".footer-brand", {
  scrollTrigger: {
    trigger: ".footer-brand",
    start: "top 90%",
  },
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Animate footer links
gsap.from(".footer-links .link-group", {
  scrollTrigger: {
    trigger: ".footer-links",
    start: "top 90%",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "power3.out"
});

// Artwork card hover pop effect
document.querySelectorAll('.artwork-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { scale: 1.05, rotate: -2, duration: 0.3, ease: "power2.out" });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.in" });
  });
});

// Usercard hover pop effect
document.querySelectorAll('.usercard').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { scale: 1.04, rotate: 1, duration: 0.3, ease: "power2.out" });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.in" });
  });
});

// Slider image hover pop effect
document.querySelectorAll('.slider .img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    gsap.to(img, { scale: 1.05, rotate: 1, duration: 0.3, ease: "power2.out" });
  });
  img.addEventListener('mouseleave', () => {
    gsap.to(img, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.in" });
  });
});

// Section titles fade-in with line
gsap.utils.toArray("h1, h2").forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });
});

// Marquee text subtle left-right movement
if (document.querySelector('.section2 marquee')) {
  gsap.to('.section2 marquee', {
    x: 20,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
  });
}

// Footer social icons pop
document.querySelectorAll('.footer-social a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    gsap.to(icon, { scale: 1.15, duration: 0.2, ease: "power2.out" });
  });
  icon.addEventListener('mouseleave', () => {
    gsap.to(icon, { scale: 1, duration: 0.2, ease: "power2.in" });
  });
});

// Animate the bottom footer bar
gsap.to(".footer-bar", {
  scrollTrigger: {
    trigger: ".footer-bar",
    start: "top 98%",
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  y: 0,
  duration: 1.1,
  ease: "power3.out"
});