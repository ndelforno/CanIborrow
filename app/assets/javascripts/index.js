document.addEventListener("turbolinks:load", function(event) {
  $('#navbarDropdown').dropdown();


  $(document).ready(function(){
   $("form#login_form").on('ajax:success', function(event, data, status, xhr) {
     console.log("Great!");
   });

   $("form#login_form").on('ajax:error', function(event, xhr, status, error) {
     console.log("sorry mate!");
   });
 })

});
