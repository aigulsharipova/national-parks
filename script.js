const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ['./style/grand.jpg', './style/olympic.jpg', './style/Yellowstone.jpg', './style/yosemite.jpg', './style/zion.jpg'];
let i = 0;
next.addEventListener('click', () => {
  i++;
  document.querySelector('#picture').src = photos[i];
})

back.addEventListener('click', () => {
  i--;
  document.querySelector('#picture').src = photos[i];
})
