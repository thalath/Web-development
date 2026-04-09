const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    if (btn.style.backgroundColor === 'rgba(0, 0, 255, 0.6)'){
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
    }
    else {
        btn.style.backgroundColor = 'rgba(0, 0, 255, 0.6)';
        btn.style.color = '#f9f9f9';
    }

});
btn.addEventListener('dblclick', function(){
    btn.style.backgroundColor = 'rgba(0, 0, 255, 0.6)';
    btn.style.color = '#f9f9f9';
});