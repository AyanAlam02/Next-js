document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeContent = document.getElementById('resumeContent');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Capture form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Generate resume HTML
        var resumeHTML = "\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display the resume
        resumeContent.innerHTML = resumeHTML;
        resumeOutput.classList.remove('hidden');
    });
});
