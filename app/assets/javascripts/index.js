document.addEventListener("turbolinks:load", function(event) {
  $('#navbarDropdown').dropdown()

  $(“#helpBlock”).append(‘<div class=”notice”><%= escape_javascript(@errorMessage[0])%></div>’);
});
