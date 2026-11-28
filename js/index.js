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

const messageForm = document.querySelector('form[name= "leave_message"]');
console.log(messageForm)
messageForm.addEventListener('submit',(event)=> {
event.preventDefault();
let userName= event.target.usersName.value;
let userEmail = event.target.usersEmail.value;
let userMessage = event.target.usersMessage.value;
console.log(userName,userMessage,userEmail);

const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
console.log(messageList);
const newMessage = document.createElement('li');
newMessage.innerHTML =`<a href='mailto:${userEmail}'> ${userName} </a> <span> ${userMessage}</span>`;
 const removeButton = document.createElement('button');
   removeButton.innerHTML = `Remove`;
    removeButton.type = "button";
    removeButton.addEventListener("click" ,function(event){
        const entry = this.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
   event.target.reset();
})
