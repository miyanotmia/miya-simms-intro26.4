const footer = document.createElement("footer");
document.body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML=`&copy; ${thisYear} Miya Simms`;
footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub","Google Analytics"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector("ul");

for (let i =0; i <skills.length; i++){
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}