// **
// Initialize Element Variables
// **

var adFrame = document.getElementsByClassName("ad")[0];
var logo = document.getElementsByClassName("nm-logo")[0];
var animationContainer = document.getElementsByClassName("animation-container")[0];
var textContainer = document.getElementsByClassName("text-container")[0];
var guaranteedViewability = document.createElement("div");
var guaranteedSafety = document.createElement("div");
var guaranteedPlacement = document.createElement("div");
var guaranteesContainer = document.createElement("div");
var letsTalk = document.createElement("div");
var logo_final = document.createElement("img");

// **
// Add Styles and Content
// **

$(guaranteesContainer).addClass("guarantees-container");
$(guaranteedViewability).addClass("guaranteed-viewability");
$(guaranteedSafety).addClass("guaranteed-safety");
$(guaranteedPlacement).addClass("guaranteed-placement");
var guaranteedHero = '<div class="guaranteed-hero"><h1>Guaranteed</h1></div>';
var guarantees = [{
    element: guaranteedViewability,
    text: "Viewability",
    subtext: "Up to 90% viewability",
    image: "images/eye.svg"
  },
  {
    element: guaranteedSafety,
    text: "Safety",
    subtext: "With leading ad verication partners",
    image: "images/skull.svg"
  },
  {
    element: guaranteedPlacement,
    text: "Placement",
    subtext: "Whitelists, PMP packages, and integrations with the leading SSPs",
    image: "images/placement.svg"
  }
];
$.each(guarantees, function(i) {
  $(guarantees[i].element).addClass("guaranteed")
    .html('<div class="guarantee-icon">' +
      '<img src="' + guarantees[i].image + '""></img></div>' +
      '<span class="checkbox"><span class="fa fa-check"></span></span>' +
      '<h2>' + guarantees[i].text + '</h2><br><p>' + guarantees[i].subtext + '</p>');
  $(guaranteesContainer).append(guarantees[i].element);
});
$(letsTalk).addClass("btn");
$(letsTalk).html('Let\'s Talk&nbsp;<span class="fa fa-chevron-right"></span>');
logo_final.src = "images/nm-logo-white.svg";
$(logo_final).addClass("logo-white");
$(adFrame).on("click", function() {
  var destinationLink = window.open("http://netmining.com/lets-talk/");
  destinationLink.opener = null;
});

// **
// Create Animation Functions
// **

function animation_1() {

  $(animationContainer).addClass("eyes");

  for (var i = 0; i < 46; i++) {
    var img = document.createElement('img');
    img.src = "images/eye.svg";
    if (i < 9) {
      img.style.marginTop = "20px";
    }
    if (i === 22) {
      img.classList.add("eye-main");
    }
    img.classList.add("eye");
    animationContainer.appendChild(img);
  }

  $(textContainer).html('<h1 class="real-eyes">Real Eyes.&nbsp;<span class="real-results">Real results.</span></h1>');

  setTimeout(function() {

    $(animationContainer).html("");
    $(textContainer).html("");
    $(animationContainer).removeClass("eyes");
    animation_2();

  }, 6000);
}

function animation_2() {
  $(animationContainer)
    .addClass("guaranteed-animation")
    .append(guaranteedHero)
    .append(guaranteesContainer);

  $(textContainer).html('<h1 class="leverage-netmining">Guaranteed&nbsp;<span>performance.</span></h1>');

  setTimeout(function() {
    $(animationContainer).html("");
    $(animationContainer).removeClass("guaranteed-animation");
    animation_3();
  }, 10000);
}

function animation_3() {
  $(adFrame).addClass("final-background");
  $(logo).addClass("logo-fadeout");
  $(textContainer).addClass("leverage-final");
  $(animationContainer)
    .addClass("learn-more")
    .append(logo_final)
    .append(letsTalk);
}
