/*==================== SHOW MENU ====================*/
const show_Menu = (toggleId: string, navId: string): void => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};

show_Menu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const nav_Link: NodeListOf<Element> = document.querySelectorAll(".nav__link");

function link_Action(): void {
  const navMenu = document.getElementById("nav-menu");
  // Ensure navMenu exists before attempting to remove the class
  if (navMenu) {
    navMenu.classList.remove("show-menu");
  }
}

// Add the event listener to each nav__link
nav_Link.forEach((n) => n.addEventListener("click", link_Action));

/*==================== SCROLL TOP ====================*/
function scrollTop(): void {
  const scrollTop = document.getElementById('scroll-top') as HTMLElement;
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (window.scrollY >= 200) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button') as HTMLElement;
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = (): string =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = (): string =>
  themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv(): void {
  document.body.classList.add("scale-cv");
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOAD ====================*/
function removeScale(): void {
  document.body.classList.remove("scale-cv");
}

/*==================== GENERATE PDF ====================*/
// PDF Generate area
let areaCv = document.getElementById("area-cv") as HTMLElement | null;

if (areaCv) {
  // Your logic here
}

let resumeButton = document.getElementById("resume-button") as HTMLElement | null;


// Html2pdf option
interface PdfOptions {
  margin: number;
  filename: string;
  image: {
    type: string;
    quality: number;
  };
  html2canvas: {
    scale: number;
  };
  jsPDF: {
    format: string;
    orientation: string;
  };
}

const opt: PdfOptions = {
  margin: 0,
  filename: 'myResume.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: 'a4', orientation: 'portrait' }
};

// Function to call areaCv and Html2pdf options
function generateResume(): void {
  const areaCv = document.getElementById("area-cv") as HTMLElement | null;

  if (areaCv) {
    html2pdf(areaCv, opt);
  } else {
    console.error("Element with ID 'area-cv' not found.");
  }
}

// When the button is clicked, it executes the three functions
resumeButton?.addEventListener("click", () => {
  //1. The class .scale-cv is added to the body, where it reduces the size of the  
  scaleCv();

  //2. The PDF is generated

  generateResume()
  
  // 3. The .scale-cv class is removed from the body after 5 second to return noraml size
  // Use setTimeout with the function
  setTimeout(removeScale, 5000);
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal(
  `.home_data, .home_img,
   .about_data, .about_img,
   .services_content, .menu_content,
   .app_data, .app_img,
   .contact_data, .contact_button,
   .footer__content`,
  {
    interval: 200
  }
);