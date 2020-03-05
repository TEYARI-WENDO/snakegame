$(document).ready(function () {

$("#Loader").fadeOut(7000);
$("#head").addClass("onLoad").fadeIn(8000);
$("html, body").scrollTop(100);
});

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }