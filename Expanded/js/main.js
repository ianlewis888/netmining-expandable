var animationContainer = document.getElementsByClassName("animation-container")[0];

for (var i=0;i<45;i++) {
  var img = document.createElement('img');
  img.src = "images/eye.svg";
  if (i < 9) { img.style.marginTop = "0px"; }
  if (i===22) { img.classList.add("eye-main"); }
  img.classList.add("eye");
  animationContainer.appendChild(img);
}

setTimeout(function() {
  $(".eye").each(function(){ this.remove(); });
  $(animationContainer).removeClass("eyes");
}, 10000);
