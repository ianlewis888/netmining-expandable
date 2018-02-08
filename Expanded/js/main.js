var animationContainer = document.getElementsByClassName("animation-container")[0];
var textContainer = document.getElementsByClassName("text-container")[0];
var guaranteedViewability = document.createElement("div");
var guaranteedSafety = document.createElement("div");
var guaranteedPlacement = document.createElement("div");
var guaranteesContainer = document.createElement("div");
var guaranteedHero = '<div class="guaranteed-hero"><h1>Guaranteed</h1></div>';

var guarantees = [
  {
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

$(guaranteesContainer).addClass("guarantees-container");
$(guaranteedViewability).addClass("guaranteed-viewability");
$(guaranteedSafety).addClass("guaranteed-safety");
$(guaranteedPlacement).addClass("guaranteed-placement");

$.each(guarantees, function(i){
    $(guarantees[i].element).addClass("guaranteed")
      .html('<div class="guarantee-icon">'
        + '<img src="'+guarantees[i].image+'""></img></div>'
        + '<span class="checkbox"><span class="fa fa-check"></span></span>'
        + '<h2>'+guarantees[i].text+'</h2><br><p>'+guarantees[i].subtext+'</p>');
    $(guaranteesContainer).append(guarantees[i].element);
});

animation_1();

function animation_1() {

  $(animationContainer).addClass("eyes");

  for (var i=0;i<45;i++) {
    var img = document.createElement('img');
    img.src = "images/eye.svg";
    if (i < 9) { img.style.marginTop = "20px"; }
    if (i===22) { img.classList.add("eye-main"); }
    img.classList.add("eye");
    animationContainer.appendChild(img);
  }

  $(textContainer).html('<h1 class="real-eyes">Get real eyes to view your ads for&nbsp;<span>real results.</span></h1>');

  setTimeout(function() {

    $(".eye").each(function(){ this.remove(); });
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
}
