//get window height and width

let windowHeight = window.screen.height;
let windowWidth = window.screen.width;
let bgImgWidth = $('#bgImg').width();
let bgImgHeight = $('#bgImg').height();
let imgBreakpoint = 800;                         //width in pixels when image changes to wide version
let orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;

const $nav = $('nav');
const $navAbout = $('#navAbout');
const $navPortfolio = $('#navPortfolio');
const $about = $('#about');
const $portfolio = $('.project');

let offset = 0;

function bgImageCenter() {
  if ($('#bgImg').width() -  window.innerWidth > 0) {
    offset = ($('#bgImg').width() -  window.innerWidth) / 2 * -1;
    $('#bgImg').css('right', offset + 'px');
    console.log(offset);
  }
}

function adjustWide() {
  orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
  if (windowWidth > imgBreakpoint || orientation === 'landscape-primary') {
    $("#bgImg").attr("src", "img/bg_image_wide.jpg");
    $nav.hide();                    //hide nav and show about and portfolio
    $about.show();
    $portfolio.show();
  }
  else {
    $("#bgImg").attr("src", "img/bg_image_thin.jpg");
    $portfolio.hide();         //start with partfolio hidden
    $nav.show();
    $about.show();
  }
}

bgImageCenter();
adjustWide();

$(window).resize(() => {                                            //keeps the background image centered on window resize
  windowHeight = window.screen.height;
  windowWidth = window.screen.width;
  adjustWide();
  bgImageCenter();
});

$('nav').click((e) => {                                       //fade in selected content and hide the unselected content
  if ($(e.target).text() == 'About') {
    $portfolio.hide();
    $about.fadeIn();
  }
  if ($(e.target).text() == 'Portfolio') {
    $about.hide();
    $portfolio.fadeIn();
  }
});
