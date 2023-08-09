function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberDiv = document.getElementById("memberDiv");
    var skillsDiv = document.getElementById("skillsDiv");
    var projectsDiv = document.getElementById("projectsDiv");
    var contactDiv = document.getElementById("contactDiv");
    var aboutDiv = document.getElementById("aboutDiv");
    member.style.color = "#ffffff";
    skills.style.color = "#000000";
    projects.style.color = "#000000";
    contact.style.color = "#000000";
    about.style.color = "#000000";
    memberDiv.style.display = "block";
    skillsDiv.style.display = "none";
    projectsDiv.style.display = "none";
    contactDiv.style.display = "none";
    aboutDiv.style.display = "none";
}