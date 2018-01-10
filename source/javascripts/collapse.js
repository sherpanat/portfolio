// $('.collapse').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('active');
// });
function openInfo() {
  const collapsing = document.querySelector('.collapse')
  collapsing.addEventListener('click', () => {
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
