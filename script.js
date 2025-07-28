// script.js

// --- Sample Data ---
const destinations = [
  {
    title: "Misty Mountains",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    type: "mountain",
    description: "Breathtaking mountain views, perfect for hiking and adventure.",
    link: "#"
  },
  {
    title: "Sunny Beach",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    type: "beach",
    description: "Relax on golden sands and swim in crystal clear waters.",
    link: "#"
  },
  {
    title: "Enchanted Forest",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    type: "forest",
    description: "Wander through lush green forests and discover hidden wildlife.",
    link: "#"
  },
  {
    title: "Desert Dunes",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    type: "desert",
    description: "Experience the vast beauty and tranquility of the desert.",
    link: "#"
  },
  {
    title: "Mountain Lake",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    type: "mountain",
    description: "A serene lake surrounded by towering peaks.",
    link: "#"
  },
  {
    title: "Tropical Paradise",
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    type: "beach",
    description: "Palm trees, turquoise water, and endless sunshine.",
    link: "#"
  }
];

const travelTips = [
  {
    title: "Pack Light, Travel Far",
    content: "Bring only essentials to make your journey easier and more enjoyable."
  },
  {
    title: "Respect Nature",
    content: "Leave no trace and help preserve the beauty of the places you visit."
  },
  {
    title: "Stay Hydrated",
    content: "Always carry water, especially when exploring remote areas."
  },
  {
    title: "Learn Local Customs",
    content: "Understanding local culture enriches your travel experience."
  }
];

const userReviews = [
  {
    name: "Alice",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Travel Spot helped me find the most amazing hidden gems! Highly recommended."
  },
  {
    name: "Bob",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The site is so easy to use and the destinations are breathtaking."
  },
  {
    name: "Priya",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I love the travel tips section. It made my trip so much smoother!"
  },
  {
    name: "Liam",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "The dark mode is perfect for late-night trip planning."
  }
];

// --- Featured Destinations with Filter ---
function renderDestinations(filterType = "all") {
  const container = document.getElementById("destination-list");
  container.innerHTML = "";
  let filtered = filterType === "all" ? destinations : destinations.filter(d => d.type === filterType);
  filtered.forEach((dest, i) => {
    const card = document.createElement("div");
    card.className = "destination-card";
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <img src="${dest.imageUrl}" alt="${dest.title}">
      <div class="card-content">
        <h3>${dest.title}</h3>
        <p>${dest.description}</p>
        <a href="${dest.link}" class="learn-more">Learn More</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filter button logic
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderDestinations(this.dataset.type);
  });
});
renderDestinations();

// --- Travel Tips & Blog ---
function renderTips() {
  const tipsList = document.getElementById("tips-list");
  tipsList.innerHTML = "";
  travelTips.forEach((tip, i) => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <h4>${tip.title}</h4>
      <p>${tip.content}</p>
    `;
    tipsList.appendChild(card);
  });
}
renderTips();

// --- User Reviews Carousel ---
function renderReviews() {
  const carousel = document.getElementById("reviews-carousel");
  carousel.innerHTML = "";
  userReviews.forEach((review, i) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="reviewer">
        <img src="${review.avatar}" alt="${review.name}">
        <span class="reviewer-name">${review.name}</span>
      </div>
      <div class="review-text">${review.text}</div>
    `;
    carousel.appendChild(card);
  });
  // Duplicate for infinite effect
  userReviews.forEach((review, i) => {
    const card = document.createElement("div");
    card.className = "review-card clone";
    card.style.animationDelay = `${(i + userReviews.length) * 0.1}s`;
    card.innerHTML = `
      <div class="reviewer">
        <img src="${review.avatar}" alt="${review.name}">
        <span class="reviewer-name">${review.name}</span>
      </div>
      <div class="review-text">${review.text}</div>
    `;
    carousel.appendChild(card);
  });
}
renderReviews();

// Infinite auto-scroll animation for reviews
function startReviewAutoScroll() {
  const carousel = document.getElementById("reviews-carousel");
  let scrollAmount = 0;
  let cardWidth = carousel.querySelector('.review-card').offsetWidth + 24; // 24px gap
  let isHovered = false;

  carousel.addEventListener('mouseenter', () => { isHovered = true; });
  carousel.addEventListener('mouseleave', () => { isHovered = false; });

  function scrollStep() {
    if (!isHovered) {
      scrollAmount += 1;
      if (scrollAmount >= cardWidth * userReviews.length) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft = scrollAmount;
      }
    }
    requestAnimationFrame(scrollStep);
  }
  scrollStep();
}
window.addEventListener('DOMContentLoaded', startReviewAutoScroll);

// --- Newsletter Signup ---
const newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("newsletter-email").value;
  alert("Thank you for subscribing, " + email + "!");
  newsletterForm.reset();
});

// --- Modern Toast for Contact Form ---
function showToast(message) {
  let toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.add('show'); }, 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// --- Contact Form ---
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  showToast("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// --- Navbar Toggle ---
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');
navbarToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('open');
});

// --- Dark/Light Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
function setTheme(dark) {
  if (dark) {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}
// Save theme preference
const darkPref = localStorage.getItem('travelspot-dark-mode') === 'true';
setTheme(darkPref);
themeToggle.addEventListener('click', function() {
  const isDark = body.classList.toggle('dark-mode');
  setTheme(isDark);
  localStorage.setItem('travelspot-dark-mode', isDark);
});