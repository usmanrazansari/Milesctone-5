var _a, _b, _c;
// Function to generate the resume and display it
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var graduationYear = document.getElementById('graduationYear').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var workDates = document.getElementById('workDates').value;
    var jobDescription = document.getElementById('jobDescription').value;
    var skills = document.getElementById('skills').value;
    // Create a container for the resume preview
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "\n      <h2 contenteditable=\"true\">".concat(name, "</h2>\n      <p contenteditable=\"true\">Email: ").concat(email, "</p>\n      <p contenteditable=\"true\">Phone: ").concat(phone, "</p>\n      <p contenteditable=\"true\">Address: ").concat(address, "</p>\n      <h3 contenteditable=\"true\">Education</h3>\n      <p contenteditable=\"true\">").concat(degree, ", ").concat(school, ", Class of ").concat(graduationYear, "</p>\n      <h3 contenteditable=\"true\">Work Experience</h3>\n      <p contenteditable=\"true\">").concat(jobTitle, " at ").concat(company, " (").concat(workDates, ")</p>\n      <p contenteditable=\"true\">").concat(jobDescription, "</p>\n      <h3 contenteditable=\"true\">Skills</h3>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Show the resume output container
    resumeOutput.style.display = "block";
    // Generate and display the shareable link
    generateShareableLink(document.getElementById('username').value);
}
// Function to generate a unique URL for the resume
function generateShareableLink(username) {
    var baseUrl = "https://username.vercel.app/resume"; // Customize the URL as needed
    var shareableUrl = "".concat(baseUrl, "/").concat(encodeURIComponent(username));
    var resumeLink = document.getElementById("resumeLink");
    resumeLink.value = shareableUrl;
    var shareLinkContainer = document.getElementById("shareLink");
    shareLinkContainer.style.display = "block";
}
// Function to copy the shareable link using Clipboard API
function copyLink() {
    var resumeLink = document.getElementById('resumeLink').value;
    navigator.clipboard.writeText(resumeLink)
        .then(function () {
        alert("Link copied to clipboard!");
    })
        .catch(function (error) {
        console.error("Failed to copy text: ", error);
        alert("Unable to copy link. Please copy it manually.");
    });
}
// Function to download the resume as a simple HTML file
function downloadResume() {
    var resumeOutput = document.getElementById("resumeOutput");
    var resumeContent = resumeOutput.innerHTML;
    var blob = new Blob([resumeContent], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "resume.html";
    downloadLink.click();
    URL.revokeObjectURL(url); // Clean up the URL object
}
// Event listeners for form submission and buttons
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    generateResume();
});
(_b = document.getElementById("copyLink")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", copyLink);
(_c = document.getElementById("downloadResume")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", downloadResume);
