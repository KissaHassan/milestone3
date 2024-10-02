var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
//function to generate the resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        //generate HTML for the resume
        var resumeHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>name:</strong>".concat(name, "</p>\n        <p><strong>email:</strong>").concat(email, "</p>\n        <p><strong>phone:</strong>").concat(phone, "</p>\n        <p><strong>education:</strong>").concat(education, "</p>\n        <p><strong>experience:</strong>").concat(experience, "</p>\n        <p><strong>skills:</strong>").concat(skills, "</p>\n        <p><strong>description:</strong>").concat(description, "</p>\n        \n        ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.log("Form or Output div no found in the DOM");
}
