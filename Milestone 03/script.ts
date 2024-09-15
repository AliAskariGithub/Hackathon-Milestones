// Select the form and the resume display section
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLElement;

// Event listener for form submission
resumeForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();  // Prevent form from refreshing the page

  // Capture the form inputs
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Create a copy of the resume with the input data and append it to resumeDisplay
  const resumeTemplate = `
    <div class="resume-section">
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    </div>
  `;

  // Append the generated resume to the resumeDisplay section
  resumeDisplay.innerHTML += resumeTemplate;
});
