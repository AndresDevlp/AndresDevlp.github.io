

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






