// variebles

let openbtn = document.getElementById('m-btn');
let modalCon = document.getElementById('model-container');
let closebtn = document.getElementById('close-btn');

// addEventlistner

openbtn.addEventListener('click', function() {
    modalCon.style.display = 'block';
});

closebtn.addEventListener('click', function() {
    modalCon.style.display = 'none';
});

/* by clciking the btn the close function also happens
window.addEventListener('click', function(e) {
    if (e.target == modalCon){
         modalCon.style.display = 'none';
    }
   
});*/