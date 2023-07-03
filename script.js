// script.js

// Sample articles with title, image URL, and content
const articles = [
  {
    title: "Exploring the Serene Beaches",
    imageUrl: "https://curlytales.com/wp-content/uploads/2021/03/Untitled-2021-03-30T150616.181-1170x614.jpg",
    content: "Exploring the serene beaches can be a rejuvenating experience. The calming sound of the waves, the soft sand beneath your feet, and the gentle breeze on your face provide a sense of tranquility and escape from the hustle and bustle of everyday life. These peaceful havens offer the perfect opportunity to relax and unwind."
  },
  {
    title: "Discovering Historical Landmarks",
    imageUrl: "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-c3635d7/images/best-historical-places-in-the-world-machu-picchu.jpg",
    content: "Historical landmarks play a significant role in preserving the cultural, architectural, and social heritage of a nation. Discovering these landmarks can be an enriching experience for individuals as they provide insights into the past and the development of societies over time."
  },
  {
    title: "Adventures in the Wilderness",
    imageUrl: "https://res.cloudinary.com/wilderness-travel/image/upload/c_scale,dpr_3.0,w_500/f_auto,q_auto/v1/trips/latin-america/argentina/great-hikes-and-estancias-of-patagonia/1-slide-hikers-at-lago-azul-patagonia-pano",
    content: "Adventures in the wilderness offer a unique and exhilarating experience for those willing to embark on them. Firstly, they provide an escape from the hustle and bustle of daily life, allowing individuals to reconnect with nature and recharge their minds. The serene beauty and vastness of the wilderness can be awe-inspiring, creating a sense of peace and tranquility. Additionally, these adventures offer a chance to develop new skills and push personal boundaries. Whether it's hiking, camping, rock climbing, or river rafting, each activity requires perseverance, determination, and problem-solving skills. Moreover, wilderness adventures foster a deeper appreciation for the environment and encourage sustainable practices."
  }
];

// Function to create article cards dynamically
function createArticleCards() {
  const articleList = document.getElementById("article-list");

  articles.forEach((article) => {
    // Create article card container
    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    // Create article title
    const title = document.createElement("h2");
    title.textContent = article.title;

    // Create article image
    const image = document.createElement("img");
    image.src = article.imageUrl;
    image.alt = article.title;

    // Create article content
    const content = document.createElement("p");
    content.textContent = article.content;

    // Append elements to article card
    articleCard.appendChild(title);
    articleCard.appendChild(image);
    articleCard.appendChild(content);

    // Append article card to the article list
    articleList.appendChild(articleCard);
  });
}

// Call the function to create article cards
createArticleCards();


// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send form data to the server (You can customize this part with your preferred method)

  // Display confirmation message
  alert("Thank you for your message! We will get back to you soon.");
  document.getElementById("contact-form").reset(); // Reset form fields
}

// Add event listener to the contact form
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", handleSubmit);


const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  navbarLinks.classList.toggle('open');
}