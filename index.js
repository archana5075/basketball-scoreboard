let scoreHome = 0;
let scoreGuest = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");


function add1HomePoint() {
  scoreHome += 1;
  homeScoreEl.textContent = scoreHome;
}
function add2HomePoint() {
    scoreHome += 2;
    homeScoreEl.textContent = scoreHome;
}
function add3HomePoint() {
  scoreHome += 3;
  homeScoreEl.textContent = scoreHome;
}
function add1GuestPoint() {
    scoreGuest += 1;
    guestScoreEl.textContent = scoreGuest;
}
function add2GuestPoint() {
    scoreGuest += 2;
    guestScoreEl.textContent = scoreGuest;
}
function add3GuestPoint() {
    scoreGuest += 3;
    guestScoreEl.textContent = scoreGuest;
}
