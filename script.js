const back = document.querySelector('#back');
const next = document.querySelector('#next');

const picture = ['grand.jpg', 'olympic.jpg', 'Yellowstone.jpg', 'yosemite.jpg', 'zion.jpg'];
let i = 0;
next.addEventListener('click', ()=> {
  i++;
  document.querySelector('#picture').src = picture[0];
})