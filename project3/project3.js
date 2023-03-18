// Variables

const accordion = document.getElementsByClassName('content-container');
const sign = document.querySelector('.question');

for (i = 0; i < accordion.length; i++){
    
accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');
})

};


sign.addEventListener('click', function(){
    sign.classList.toggle('active');
});