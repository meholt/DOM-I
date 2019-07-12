const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Nav Links
let navLinks = Array.from(document.querySelectorAll('nav a'));

navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[0].style.color = "green";
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[1].style.color = "green";
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[2].style.color = "green";
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[3].style.color = "green";

navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[4].style.color = "green";
let about_link = navLinks[4];
const career_link = document.createElement('a');
career_link.textContent = "Join Our Team!";
about_link.prependChild(career_link);

navLinks[5].textContent = siteContent["nav"]["nav-item-6"];
navLinks[5].style.color = "green";
let contact_link = navLinks[5];
const faqs = document.createElement('a');
faqs.textContent = "FAQs";
faqs.style.color = "dodgerblue";
contact_link.appendChild(faqs);


// Logo Image
const logo = document.getElementById('logo-img');
logo.src = siteContent["nav"]["img-src"];
logo.alt = "Great Idea! Company logo.";

// CTA SECTION
const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent["cta"]["h1"];

const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent["cta"]["img-src"];
ctaImg.alt = "Image of a code snippet.";

// Main Content
// Top
const top_title = document.querySelectorAll('.top-content .text-content h4');
top_title[0].textContent = siteContent["main-content"]["features-h4"];
top_title[1].textContent = siteContent["main-content"]["about-h4"];
const top_text = document.querySelectorAll('.top-content .text-content p');
top_text[0].textContent = siteContent["main-content"]["features-content"];
top_text[1].textContent = siteContent["main-content"]["about-content"];


const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];
middleImg.alt = "Image of code snippets across the screen";

// Bottom
const btm_title = document.querySelectorAll('.bottom-content .text-content h4');
btm_title[0].textContent = siteContent["main-content"]["services-h4"];
btm_title[1].textContent = siteContent["main-content"]["product-h4"];
btm_title[2].textContent = siteContent["main-content"]["vision-h4"]

const btm_text = document.querySelectorAll('.bottom-content .text-content p');
btm_text[0].textContent = siteContent["main-content"]["services-content"];
btm_text[1].textContent = siteContent["main-content"]["product-content"];
btm_text[2].textContent = siteContent["main-content"]["vision-content"];





// Contact
const contact_title = document.querySelector('.contact h4');
contact_title.textContent = siteContent["contact"]["contact-h4"];
const contact_info = document.querySelectorAll('.contact p');
contact_info[0].textContent = siteContent["contact"]["address"];
contact_info[1].textContent = siteContent["contact"]["phone"];
contact_info[2].textContent = siteContent["contact"]["email"];

// Footer
const footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];