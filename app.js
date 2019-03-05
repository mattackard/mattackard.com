let windowHeight = window.screen.height;
let windowWidth = window.screen.width;
let bgImg = document.querySelector("#bgImg");

//width in pixels when image changes to wide version
let imgBreakpoint = 800;

//get orientation of screen for mobile
let orientation =
	screen.msOrientation ||
	(screen.orientation || screen.mozOrientation || {}).type;
window.sr = ScrollReveal({ duration: 700, distance: "100px" });

//changes the background image source for wide(landscape) and thin(portrait) screens
function adjustWide() {
	orientation =
		screen.msOrientation ||
		(screen.orientation || screen.mozOrientation || {}).type;
	if (windowWidth > imgBreakpoint || orientation === "landscape-primary") {
		bgImg.src = "img/bg_image_wide.jpg";
	} else {
		bgImg.src = "img/bg_image_thin.jpg";
	}
}

adjustWide();

//adjusts the layout anytime the window is resized
window.addEventListener("resize", () => {
	windowHeight = window.screen.height;
	windowWidth = window.screen.width;
	adjustWide();
	console.log("resized");
});

sr.reveal(".fadeLeft", { origin: "left" });
sr.reveal(".fadeRight", { origin: "right" });
