const active = document.querySelectorAll('.navbar ul li');

active.forEach(links => {
    links.addEventListener('click', function(){
        active.forEach(x => x.classList.remove('active'));

        this.classList.add('active');
    });
});