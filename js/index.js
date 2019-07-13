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


// Header
// Navigation
let nav = Array.from(document.querySelectorAll('a'));

nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

// Logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CTA
const cta_text = document.querySelector('h1');
cta_text.textContent = siteContent["cta"]["h1"];

const cta_btn = document.querySelector('button');
cta_btn.textContent = siteContent["cta"]["button"];

let cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content
// Top Content
let top_title = document.querySelectorAll('.top-content .text-content h4');
top_title[0].textContent = siteContent["main-content"]["features-h4"];
top_title[1].textContent = siteContent["main-content"]["about-h4"];

let top_text = document.querySelectorAll('.top-content .text-content p');
top_text[0].textContent = siteContent["main-content"]["features-content"];
top_text[1].textContent = siteContent["main-content"]["about-content"];

// Image
let middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content
let bottom_title = document.querySelectorAll('.bottom-content .text-content h4');
bottom_title[0].textContent = siteContent["main-content"]["services-h4"];
bottom_title[1].textContent = siteContent["main-content"]["product-h4"];
bottom_title[2].textContent = siteContent["main-content"]["vision-h4"];

let bottom_text = document.querySelectorAll('.bottom-content .text-content p');
bottom_text[0].textContent = siteContent["main-content"]["services-content"];
bottom_text[1].textContent = siteContent["main-content"]["product-content"];
bottom_text[2].textContent = siteContent["main-content"]["vision-content"];

// Contact
let contact_title = document.querySelectorAll('.contant h4');
contact_title.textContent = siteContent["contact"]["contact-h4"];

let contact_info = document.querySelectorAll('.contact p');
contact_info[0].textContent = siteContent["contact"]["address"];
contact_info[1].textContent = siteContent["contact"]["phone"];
contact_info[2].textContent = siteContent["contact"]["email"];

// Footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];
