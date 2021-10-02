const projectImage1 = document.getElementById("project1");
const projectImage2 = document.getElementById("project2");
const projectImage3 = document.getElementById("project3");
const navProject = document.getElementById("projectLink");
const navAbout = document.getElementById("aboutLink");
const navContact = document.getElementById("contactLink");
let currentNavActive = document.getElementsByClassName("active")[0].id;

function replaceImage(item){
    const original = item.getAttribute("src");
    item.src = "images/commingSoon.png";
    
}


projectImage1.addEventListener("mouseout",function(){
    projectImage1.style.opacity = 1.0;
})
projectImage1.addEventListener('mouseover',function(){
    projectImage1.style.opacity = .5;
})

projectImage2.addEventListener("click", function(){
    projectImage2.src = "images/commingSoon.png";
})

projectImage2.addEventListener("mouseout",function(){
    projectImage2.src = "images/mitosis.png";
})

projectImage3.addEventListener("click", function(){
    projectImage3.src = "images/commingSoon.png"
})

projectImage3.addEventListener("mouseout",function(){
    projectImage3.src = "images/BugTracker.jpg";
})

navProject.addEventListener('click',function(){
    navContact.className = '';
    navAbout.className = '';
    navProject.className = 'active';

})

navAbout.addEventListener('click',function(){
    navContact.className = '';
    navProject.className = '';
    navAbout.className = 'active';
})

navContact.addEventListener('click',function(){
    navProject.className = '';
    navAbout.className = '';
    navContact.className = 'active';
})