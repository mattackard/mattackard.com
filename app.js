
let windowHeight = window.screen.height;
let windowWidth = window.screen.width;
let bgImg = document.querySelector('#bgImg');
let imgBreakpoint = 800;                         //width in pixels when image changes to wide version
let orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;   //get orientation of screen for mobile
window.sr = ScrollReveal({ duration: 700 , distance: '200px' });


function adjustWide() {                                       //changes the background image source for wide(landscape) and thin(portrait) screens
  orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
  if (windowWidth > imgBreakpoint || orientation === 'landscape-primary') {
    bgImg.src = 'img/bg_image_wide.jpg';
  }
  else {
    bgImg.src = 'img/bg_image_thin.jpg';
  }
}


adjustWide();

window.addEventListener('resize', () => {                                            //adjusts the layout anytime the window is resized
  windowHeight = window.screen.height;
  windowWidth = window.screen.width;
  adjustWide();
  console.log('resized');
});

sr.reveal('.fadeLeft', { origin: 'left' });
sr.reveal('.fadeRight', { origin: 'right' });
