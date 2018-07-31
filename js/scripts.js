let slides = document.querySelectorAll('.slide'),
    leftArrow = document.querySelector('#arrow-left'),
    rightArrow = document.querySelector('#arrow-right'),
    current = 0;

// clear
function reset() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

// init
function start() {
  reset();
  slides[0].style.display = 'block';
}

// show prev
function goLeft() {
  reset();
  if(current === 0) {
    current = slides.length;
  }
  current--;
  slides[current].style.display = 'block';
}

// show next
function goRight() {
  reset();
  if(current === slides.length - 1) {
    current = -1;
  }
  current++;
  slides[current].style.display = 'block';
}

leftArrow.addEventListener('click', goLeft);

rightArrow.addEventListener('click', goRight);

start();
