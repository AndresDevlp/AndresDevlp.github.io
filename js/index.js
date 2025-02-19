
const mainContainer = document.getElementById('container');
const hero = document.getElementById('hero-container');
const header = document.getElementById('header');


const resize = window.addEventListener('resize', () => {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    

    mainContainer.style.width = innerWidth;
    mainContainer.style.height = innerHeight;
    hero.style.width = innerWidth;
    hero.style.height = innerHeight;

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






