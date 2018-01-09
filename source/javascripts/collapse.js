// $('.collapse').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('active');
// });
function openInfo() {
  const collapsing = document.querySelector('.collapse')
  collapsing.addEventListener('click', (event) => {
    // event.preventDefault();
    console.log(event);
    // event.classList.toggle('active');
  });
}
openInfo();


//   e.preventDefault();
//   e.classList.toggle("active")
// });
// [].map.call(document.querySelectorAll('.collapse'), function(el) {
//   el.classList.toggle('active');
