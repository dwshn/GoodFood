// navbar
const navButton = document.getElementById('navButton');
const navMenu = document.querySelector('nav');

navButton.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
});


// menu makanan
const mybutton = document.getElementById('myButton');
const myContent = document.getElementById('myContent');
const tutup = document.getElementById('tutup');

mybutton.addEventListener('click', function () {
    myContent.classList.remove('hidden');
});
tutup.addEventListener('click', function () {
    myContent.classList.add('hidden');
});

// menu minuman
const mybuttons = document.getElementById('myButtons');
const myContents = document.getElementById('myContents');
const tutups = document.getElementById('tutups');

mybuttons.addEventListener('click', function () {
    myContents.classList.remove('hidden');
});
tutups.addEventListener('click', function () {
    myContents.classList.add('hidden');
});

// menu jajanan
const mybuttont = document.getElementById('myButtont');
const myContentt = document.getElementById('myContentt');
const tutupt = document.getElementById('tutupt');

mybuttont.addEventListener('click', function () {
    myContentt.classList.remove('hidden');
});
tutupt.addEventListener('click', function () {
    myContentt.classList.add('hidden');
});
