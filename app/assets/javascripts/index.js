document.addEventListener("turbolinks:load", function(event) {
  $('#navbarDropdown').dropdown()

//open signin
  function displayModal() {
    var modal = document.querySelector('.modal')
    modal.style.display = "block"
  };
  var buttonSignin = document.querySelector('.signin');
  buttonSignin.addEventListener('click', displayModal)

//close signin

  var buttonClose = document.querySelector('.close')
  buttonClose.addEventListener('click', closeSignin)
  function closeSignin(){
    var modal = document.querySelector('.modal')
    modal.style.display = "none"
  }

});
