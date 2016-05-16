

var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content_close");
var form = popup.querySelector("form");
var modalName = popup.querySelector("[name='name']");
var modalEmail = popup.querySelector("[name='mail']");
var modalLetter = popup.querySelector("[name='letter']");
var storage = localStorage.getItem("modalName");
var reset = popup.querySelector("[name='reset']");




link.addEventListener("click", function(event) { 
  event.preventDefault(); 
  popup.classList.add("modal-content-show");
    if (storage) {
      modalName.value = storage;
      modalEmail.focus();
    } else {
      modalName.focus();
    }
});

close.addEventListener("click", function(event) { 
  event.preventDefault(); 
  popup.classList.remove("modal-content-show"); 
});

form.addEventListener("submit", function(event) {
    if (!(modalName.value && modalEmail.value && modalLetter.value)) {
    event.preventDefault();  
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");  
    } else {
    localStorage.setItem("modalName", modalName.value);
    }
});


reset.addEventListener("click", function(event) { 
  modalName.focus();
});


window.addEventListener("keydown", function(event) { 
  if (event.keyCode == 27) { 
  if (popup.classList.contains("modal-content-show")) { 
  popup.classList.remove("modal-content-show"); 
  } 
  } 
});