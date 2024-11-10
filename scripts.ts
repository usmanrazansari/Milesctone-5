// Function to generate the resume and display it
function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduationYear') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const workDates = (document.getElementById('workDates') as HTMLInputElement).value;
    const jobDescription = (document.getElementById('jobDescription') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
  
    // Create a container for the resume preview
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    resumeOutput.innerHTML = `
      <h2 contenteditable="true">${name}</h2>
      <p contenteditable="true">Email: ${email}</p>
      <p contenteditable="true">Phone: ${phone}</p>
      <p contenteditable="true">Address: ${address}</p>
      <h3 contenteditable="true">Education</h3>
      <p contenteditable="true">${degree}, ${school}, Class of ${graduationYear}</p>
      <h3 contenteditable="true">Work Experience</h3>
      <p contenteditable="true">${jobTitle} at ${company} (${workDates})</p>
      <p contenteditable="true">${jobDescription}</p>
      <h3 contenteditable="true">Skills</h3>
      <p contenteditable="true">${skills}</p>
    `;
  
    // Show the resume output container
    resumeOutput.style.display = "block";
  
    // Generate and display the shareable link
    generateShareableLink((document.getElementById('username') as HTMLInputElement).value);
  }
  
  // Function to generate a unique URL for the resume
  function generateShareableLink(username: string) {
    const baseUrl = "https://username.vercel.app/resume"; // Customize the URL as needed
    const shareableUrl = `${baseUrl}/${encodeURIComponent(username)}`;
    const resumeLink = document.getElementById("resumeLink") as HTMLInputElement;
    resumeLink.value = shareableUrl;
  
    const shareLinkContainer = document.getElementById("shareLink") as HTMLDivElement;
    shareLinkContainer.style.display = "block";
  }
  
  // Function to copy the shareable link using Clipboard API
  function copyLink() {
    const resumeLink = (document.getElementById('resumeLink') as HTMLInputElement).value;
    navigator.clipboard.writeText(resumeLink)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        alert("Unable to copy link. Please copy it manually.");
      });
  }
  
  // Function to download the resume as a simple HTML file
  function downloadResume() {
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    const resumeContent = resumeOutput.innerHTML;
    const blob = new Blob([resumeContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
  
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "resume.html";
    downloadLink.click();
  
    URL.revokeObjectURL(url); // Clean up the URL object
  }
  
  // Event listeners for form submission and buttons
  document.getElementById("resumeForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    generateResume();
  });
  
  document.getElementById("copyLink")?.addEventListener("click", copyLink);
  document.getElementById("downloadResume")?.addEventListener("click", downloadResume);
  