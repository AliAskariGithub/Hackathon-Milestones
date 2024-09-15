// Select the form and the resume display section
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resumeDisplay');
// Event listener for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    // Capture the form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create a copy of the resume with the input data and append it to resumeDisplay
    var resumeTemplate = "\n    <div class=\"resume-section\">\n      <h2>".concat(name, "</h2>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    </div>\n  ");
    // Append the generated resume to the resumeDisplay section
    resumeDisplay.innerHTML += resumeTemplate;
});
