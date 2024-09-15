// Grab the form and the resume display section
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

// Add an event listener for form submission
resumeForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();  // Prevent form from reloading the page

  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Check if the resume already exists
  let resumeSection = document.querySelector('.resume-section');
  
  if (!resumeSection) {
    // Create a new resume if it doesn't exist
    resumeSection = document.createElement('div');
    resumeSection.classList.add('resume-section');
    resumeSection.setAttribute('contenteditable', 'true');
    resumeDisplay.appendChild(resumeSection);
  }

  // Update the resume content
  resumeSection.innerHTML = `
    <h2>Personal Information</h2>
    <p><strong>Name: </strong><span contenteditable="true">${name}</span></p>
    <p><strong>Email: </strong> <span contenteditable="true">${email}</span></p>
    <p><strong>Phone: </strong> <span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
  `;
});
