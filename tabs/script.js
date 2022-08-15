// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
  let tabcontent = document.getElementsByClassName("tabcontent");
  let tablinks = document.getElementsByClassName("tablinks");

  // Get all elements with class="tabcontent" and hide them
  for(var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  for(var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
};