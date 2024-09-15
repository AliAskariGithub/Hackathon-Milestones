var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var downloadBtn = document.getElementById('download-pdf');
var shareableLink = document.getElementById('shareable-link');
var generateBtn = document.getElementById('generate-btn');
// Prevent default form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Gather form data
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Display the resume in the editable area
    resumeDisplay.innerHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Username: </strong> ").concat(username, "</p>\n        <p><strong>Email: </strong> ").concat(email, "</p>\n        <p><strong>Phone: </strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Generate a unique shareable URL (this is just a placeholder, you would need backend logic for real URLs)
    var uniqueURL = "https://".concat(username, hackathon-milestone-05-lovat.vercel.app/);
    shareableLink.href = uniqueURL;
    shareableLink.textContent = uniqueURL;
});
// Download resume as PDF using html2pdf
downloadBtn.addEventListener('click', function () {
    var opt = {
        margin: 0,
        filename: 'myResume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeDisplay).set(opt).save();
});
