const educationClick   = document.querySelector('.educationClick');
educationClick.addEventListener('click', edClik);

function edClik() {
    $('#S1 , #S2').toggle();
    $('#S1').css("display", "block;");
}

const skillClick   = document.querySelector('.skillClick');
skillClick.addEventListener('click', skillClik);

function skillClik() {
    $('#S3, #S6').toggle();
    
}
const workClick   = document.querySelector('.workClick');
workClick.addEventListener('click', workCl);

function workCl() {
    $('#S4 , #S5').toggle();
}