const projectImage1 = document.getElementById("project1")
const projectImage2 = document.getElementById("project2")
const projectImage3 = document.getElementById("project3")


projectImage1.addEventListener("mouseout",function(){
    projectImage1.style.opacity = 1.0;
})
projectImage1.addEventListener('mouseover',function(){
    projectImage1.style.opacity = .5;
})

