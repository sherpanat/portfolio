// $('.collapse').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('active');
// });
const collapsingButton = document.querySelectorAll('.collapse-button');
const collapsing = document.querySelectorAll('.collapse');

function openInfo(element) {
  element.addEventListener('click', () => {
    console.log(element);
    collapsing.forEach(elem => elem.classList.toggle('active'));
  });
}

collapsingButton.forEach(button => openInfo(button));
// collapsing.forEach( => )

// document.addEventListener('DOMContentLoaded', () =>{
// })


//   e.preventDefault();
//   e.classList.toggle("active")
// });
// [].map.call(document.querySelectorAll('.collapse'), function(el) {
//   el.classList.toggle('active');
