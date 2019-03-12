document.addEventListener("turbolinks:load", function(event) {
  $('#navbarDropdown').dropdown()

  $(document).on("ajax:error", function() {
   console.log(responseJSON);
 })
});
