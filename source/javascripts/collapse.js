// $('.collapse').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('active');
// });

document.querySelector('.collapse').addEventListener('click', (event) => {
  // event.preventDefault();
  event.classList.toggle('active');
});

//   e.preventDefault();
//   e.classList.toggle("active")
// });
// [].map.call(document.querySelectorAll('.collapse'), function(el) {
//   el.classList.toggle('active');
