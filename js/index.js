// Your code goes here
// 1 -- resize
const viewPort = document.querySelector('body');
window.addEventListener('resize', () => {
 viewPort.style.backgroundColor = 'lightblue'
});

// 2/3 -- mouseenter/mouseleave
const navLinks = document.querySelectorAll('a');
 navLinks.forEach(element => {
  element.addEventListener('mouseenter', () => {
   element.style.color = 'green'
  })
  element.addEventListener('mouseleave', () => {
   element.style.color = 'black';
  })
 });

 // 4 --click
 const mySchool = document.querySelector('.intro img');
 mySchool.addEventListener('click', (event) => {
  mySchool.setAttribute('src', 'https://images.unsplash.com/photo-1490380169520-0a4b88d52565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')

  event.stopPropagation();
 });

 const body = document.querySelector('.intro');
 body.addEventListener('click', () => {
  body.style.backgroundColor = 'red';
 });


 // 5/6 --keydown/keypress
 const darkMode = document.querySelector('*');
 document.addEventListener('keydown', () => {
  if(darkMode.style.backgroundColor != 'black'){
   darkMode.style.backgroundColor = 'black';
   darkMode.style.color = 'whitesmoke';
  }
 });

document.addEventListener('keypress', () => {
 if (darkMode.style.backgroundColor != 'white') {
  darkMode.style.backgroundColor = 'white';
  darkMode.style.color = 'black';
 }
})

// 7 --double-click

const popPicture = document.querySelector('.content-destination img');
popPicture.addEventListener('dblclick', () => {
 popPicture.style.transform = 'scale(1.2)';
});

// 8 -- mouseover
const blueText = document.querySelectorAll('.destination p').forEach(item => {
 item.addEventListener('mouseover', () => {
  item.style.color = 'blue';
 })
});

const headerText = document.querySelectorAll('.destination h4').forEach(item => {
 item.addEventListener('mouseover', () => {
  item.style.color = 'green';
 });
});

const contentPick = document.querySelectorAll('.content-pick').forEach(item => {
 item.addEventListener('mouseover', () => {
  item.style.backgroundColor = 'papayawhip';
 });
});


// 9 --mouseout

const normalText = document.querySelectorAll('.destination p').forEach(item => {
 item.addEventListener('mouseout', () => {
  item.style.color = 'black';
 })
});

const headerTextBlack = document.querySelectorAll('.destination h4').forEach(item => {
 item.addEventListener('mouseout', () => {
  item.style.color = 'black'
 })
 
});

// 10 
const emailField = document.querySelector('#email');
emailField.addEventListener('focus', () => {
 emailField.style.backgroundColor = 'hotpink';
});


// stretch goal gsap
const introsec = document.querySelector('.intro').addEventListener("contextmenu", (event) => {
 gsap.to('.intro', {
  duration: 1,
  rotateY: 180,
  ease: "elastic(1, 0.75)"
 })

})

Draggable.create(document.querySelector('.logo-heading'), {type: 'x,y'});



