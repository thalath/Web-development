
// navbar active clicked block
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove active from all
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add active to clicked one
        this.classList.add('active');
    });
});


// flex block clicked
const all = document.querySelectorAll('.flex-items')

all.forEach(e => {
    e.addEventListener('click', function() {
        const originalText = this.innerText;
        const originalColor = this.style.backgroundColor;

        this.innerText = "You have Clicked me!";
        this.style.backgroundColor = "tomato";

        setTimeout(() => {
            this.innerText = originalText;
            this.style.backgroundColor = originalColor;
        }, 3000);
    })
});


// grid event 

const gridItems = document.querySelectorAll('.grid-items')
gridItems.forEach(e => {
    e.addEventListener('click', function() {
        const originalColors = this.style.backgroundColor;
    
        this.style.backgroundColor = "tomato";
        setTimeout(() => {
            this.style.backgroundColor = originalColors;
        }, 3000);
    });
});
