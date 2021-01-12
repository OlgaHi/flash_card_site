$(document).ready(function () {
  $("h1").click(function () {
    $("#definition").show();
  });

  $("#definition").click(function () {
    $("#definition").toggle();
  });
});