// variable

const accord = document.getElementsByClassName('faq-item');

for(i =0; i < accord.length; i++){
    accord[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};