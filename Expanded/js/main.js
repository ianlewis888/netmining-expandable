var animationContainer = document.getElementsByClassName("animation-container")[0];
var textContainer = document.getElementsByClassName("text-container")[0];

var guaranteedViewability = document.createElement("div");
var guaranteedSafety = document.createElement("div");
var guaranteedPlacement = document.createElement("div");

var guarantees = [guaranteedViewability, guaranteedSafety, guaranteedPlacement];

$(guaranteedViewability).addClass("guaranteed-viewability")
$(guaranteedSafety).addClass("guaranteed-safety");
$(guaranteedPlacement).addClass("guaranteed-placement");

$.each(guarantees, function(i){
    $(guarantees[i]).addClass("guaranteed")
    .html('<span class="fa fa-square"></span><span class="fa fa-check"></span>');
});

animation_2();

function animation_1() {
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
    $(animationContainer).removeClass("eyes");
    animation2();
  }, 6000);
}
$(animationContainer).removeClass("eyes");
function animation_2() {
  $(animationContainer)
    .addClass("guaranteed")
    .append(guaranteedViewability)
    .append(guaranteedSafety)
    .append(guaranteedPlacement);

  $(textContainer).html('<h1 class="leverage-netmining">Leverage Netmining for&nbsp;<span>guaranteed performance.</span></h1>');
}
