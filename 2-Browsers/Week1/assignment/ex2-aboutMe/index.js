/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/


document.querySelector('#nickname').textContent='Sam';
document.querySelector('#fav-food').textContent='Pizza';
document.querySelector('#hometown').textContent='Niewe-Vennep';
const ul=document.querySelector('ul');
liCollection=document.querySelectorAll('ul li');
for(let li of liCollection){
  li.classList.add('list-item');

  
}
