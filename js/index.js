let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
const mainContainer = document.getElementById('container');


const resize = window.addEventListener('resize', () => {
    console.log("working 1");
    mainContainer.style.width = innerWidth;
    mainContainer.style.height = innerHeight;
    console.log("working 2");
    
})








//Animacion para mientras se scrollea, vaya apareciendo todo//

const hiddenElements = document.querySelectorAll('.hidden');



const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('mostrar')
        }
    })
});


hiddenElements.forEach((el) => observer.observe (el));
/////////////






