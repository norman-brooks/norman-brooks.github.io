//RECIPE POP UP MODAL SECTION

//SETS UP THE BUTTON THAT WILL OPEN THE RECIPE MODEL
var btns = document.querySelectorAll("input.modal-button");

//DEFINES ALL MODALS FOR EACH RECIPE
var modals = document.querySelectorAll(".recipe-modal");

// GET THE <SPAN> ELEMENT THAT CLOSES THE MODAL
var closeBtn = document.getElementsByClassName("close-btn");

// When the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
            let modal = document.querySelector
            (event.target.getAttribute ("href")); 
            modal.style.display = "block";
    }
}

//When the user clicks on <span> (x) close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
     for (var index in modals) {
        if (modals[index].style) {
            modals[index].style.display = "none";
        }
     }  
    }
}