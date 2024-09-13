/*==================== SHOW MENU ====================*/
var show_Menu = function (toggleId, navId) {
    var toggle = document.getElementById(toggleId);
    var nav = document.getElementById(navId);
    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle("show-menu");
        });
    }
};
show_Menu("nav-toggle", "nav-menu");
/*==================== REMOVE MENU MOBILE ====================*/
var nav_Link = document.querySelectorAll(".nav__link");
function link_Action() {
    var navMenu = document.getElementById("nav-menu");
    // Ensure navMenu exists before attempting to remove the class
    if (navMenu) {
        navMenu.classList.remove("show-menu");
    }
}
// Add the event listener to each nav__link
nav_Link.forEach(function (n) { return n.addEventListener("click", link_Action); });
/*==================== SCROLL TOP ====================*/
function scrollTop() {
    var scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (window.scrollY >= 200) {
        scrollTop.classList.add('show-scroll');
    }
    else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);
/*==================== DARK LIGHT THEME ====================*/
var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'bx-sun';
// Previously selected topic (if user selected)
var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon');
// We obtain the current theme that the interface has by validating the dark-theme class
var getCurrentTheme = function () {
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};
var getCurrentIcon = function () {
    return themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
};
// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', function () {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
    document.body.classList.add("scale-cv");
}
/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOAD ====================*/
function removeScale() {
    document.body.classList.remove("scale-cv");
}
/*==================== GENERATE PDF ====================*/
// PDF Generate area
var areaCv = document.getElementById("area-cv");
if (areaCv) {
    // Your logic here
}
var resumeButton = document.getElementById("resume-button");
var opt = {
    margin: 0,
    filename: 'myResume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
};
// Function to call areaCv and Html2pdf options
function generateResume() {
    var areaCv = document.getElementById("area-cv");
    if (areaCv) {
        html2pdf(areaCv, opt);
    }
    else {
        console.error("Element with ID 'area-cv' not found.");
    }
}
// When the button is clicked, it executes the three functions
resumeButton === null || resumeButton === void 0 ? void 0 : resumeButton.addEventListener("click", function () {
    //1. The class .scale-cv is added to the body, where it reduces the size of the  
    scaleCv();
    //2. The PDF is generated
    generateResume();
    // 3. The .scale-cv class is removed from the body after 5 second to return noraml size
    // Use setTimeout with the function
    setTimeout(removeScale, 5000);
});
/*==================== SCROLL REVEAL ANIMATION ====================*/
var sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal(".home_data, .home_img,\n   .about_data, .about_img,\n   .services_content, .menu_content,\n   .app_data, .app_img,\n   .contact_data, .contact_button,\n   .footer__content", {
    interval: 200
});
