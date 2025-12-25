// Animate hero section
setTimeout(() => {
    const hero = document.getElementById("home");
    if (hero) {
        hero.classList.remove("hidden");
    }
}, 2000);

// Skills card click effect
function function2(){
    const skillCards = document.querySelectorAll('#skills .card');

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            skillCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
}
function2();

// Smooth scrolling for nav links
function function3(){
    const skillCards = document.querySelectorAll('#skills .card');

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            skillCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
}
function3();

