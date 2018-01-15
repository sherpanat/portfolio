// $('.collapse').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('active');
// });
const collapsingButton = document.querySelector('.collapse-button');
const collapsing = document.querySelector('.collapse');

function openInfo() {
  collapsingButton.addEventListener('click', () => {
    collapsing.classList.toggle('active');
  });
}

openInfo();
// document.addEventListener('DOMContentLoaded', () =>{
// })


//   e.preventDefault();
//   e.classList.toggle("active")
// });
// [].map.call(document.querySelectorAll('.collapse'), function(el) {
//   el.classList.toggle('active');
