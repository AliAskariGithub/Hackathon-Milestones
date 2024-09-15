const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const downloadBtn = document.getElementById('download-pdf') as HTMLButtonElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;

// Prevent default form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Gather form data
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Display the resume in the editable area
    resumeDisplay.innerHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Username: </strong> ${username}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Phone: </strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Generate a unique shareable URL (this is just a placeholder, you would need backend logic for real URLs)
    const uniqueURL = `https://${username}.hackathon-milestone-05-lovat.vercel.app/;`
    shareableLink.href = uniqueURL;
    shareableLink.textContent = uniqueURL;
});

// Download resume as PDF using html2pdf
downloadBtn.addEventListener('click', () => {
    const opt = {
        margin: 0,
        filename: 'myResume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(resumeDisplay).set(opt).save();
});
