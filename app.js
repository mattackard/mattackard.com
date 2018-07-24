
//get window height and width

let windowHeight = window.screen.height;
let windowWidth = window.screen.width;
let bgImgWidth = $('#bgImg').width();
let bgImgHeight = $('#bgImg').height();
let offset = 0;                                  //initial offset for background image centering
let imgBreakpoint = 800;                         //width in pixels when image changes to wide version
let orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;   //get orientation of screen for mobile

const $about = $('#about');
const $portfolio = $('.project');

function bgImageCenter() {
  if ($('#bgImg').width() -  window.innerWidth > 0) {
    offset = ($('#bgImg').width() -  window.innerWidth) / 2 * -1;
    $('#bgImg').css('right', offset + 'px');
  }
}

function adjustWide() {                                       //changes the background image source for wide(landscape) and thin(portrait) screens
  orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
  if (windowWidth > imgBreakpoint || orientation === 'landscape-primary') {
    $("#bgImg").attr("src", "img/bg_image_wide.jpg");
  }
  else {
    $("#bgImg").attr("src", "img/bg_image_thin.jpg");
  }
}

bgImageCenter();
adjustWide();

$(window).resize(() => {                                            //adjusts the layout anytime the window is resized
  windowHeight = window.screen.height;
  windowWidth = window.screen.width;
  adjustWide();
  bgImageCenter();
});
