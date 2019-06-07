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
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((currentObj, i) => {
  currentObj.innerHTML = siteContent.nav[nav-item-${i + 1}]
})

// Logo Image
let logo = document.getElementById('logo-img');
logo.src = siteContent["nav"]["img-src"];

// CTA
let cta = document.getElementsByClassName('cta');

let ctaText = document.getElementsByClassName('cta-text');
let h1 = document.getElementsByTagName('h1');
let button = document.getElementsByTagName('button');

let ctaImg = document.getElementsByIdName('cta-img')
ctaImg.src = siteContent["cta"]["img-src"];
ctaImg.alt = "Image of a code snippet.";

// Main Content
let mainContent = document.getElementsByClassName('main-content');
let featuresH4 = document.getElementsByTagName('h4 p');
let 

// Middle Image
let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];
middleImg.alt = "Image of code snippets across the screen";

// Bottom Content
let btmContent = document.getElementsByClassName('bottom-content');

// Contact
let contact = document.getElementsByClassName('contact');

// Footer
let footer = document.getElementsByTagName('footer');
