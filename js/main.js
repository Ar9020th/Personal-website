$(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar,#content").toggleClass("active");
  });
});
var cd_command = `<h4 style="color: white">cd<br>Usage : cd [dir]<br>Navigate between directories using this command<br></h4>`;
var ls_command = `<h4 style="color: white">ls<br>Usage : ls [dir]<br>List all the files present in dir<br>By default, ls lists files of the present working directory</h4>`;
var clear_command = `<h4 style="color: white">clear<br>Usage : clear<br>Clear contents of the screen</h4>`;
var help_command = `<h4 style="color: white">help<br>Usage : help<br>Displays all the possible commands along with their usages.</h4>`;
$(document).on("keypress", "input", function (e) {
  if (e.which == 13) {
    var x = document.getElementById("textinput").value;
    if (x == "help") {
      document.getElementById("instructions").innerHTML = [
        cd_command,
        ls_command,
        clear_command,
        help_command,
      ].join("<br>");
    }
  }
});
