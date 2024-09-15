// Grab the form and the resume display section
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Add an event listener for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Check if the resume already exists
    var resumeSection = document.querySelector('.resume-section');
    if (!resumeSection) {
        // Create a new resume if it doesn't exist
        resumeSection = document.createElement('div');
        resumeSection.classList.add('resume-section');
        resumeSection.setAttribute('contenteditable', 'true');
        resumeDisplay.appendChild(resumeSection);
    }
    // Update the resume content
    resumeSection.innerHTML = "\n    <h2>Personal Information</h2>\n    <p><strong>Name: </strong><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><strong>Email: </strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><strong>Phone: </strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n  ");
});
