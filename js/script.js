console.log("ça marche");



document.addEventListener("DOMContentLoaded", function() {
    const elForm = document.getElementById("the-form");
    const elErrorName = document.getElementById("the-error-name");
    const elErrorEmail = document.getElementById("the-error-email");
    const elErrorMessage = document.getElementById("the-error-message");

    const elFormName = document.getElementById("input-name");
    const elFormEmail = document.getElementById("input-email");
    const elFormMessage = document.getElementById("input-message");

    let elModalChoice = document.getElementById('modal-choice');
    let elBtnOpenModal = document.getElementById('btn-open-modal');
    
    const menuBurger = document.getElementById('menu-burger');
    const mainMenu = document.getElementById('main-menu');
    
    elForm.addEventListener("submit", function(evt){

        evt.preventDefault();

        let hasError = false;
        let formName = elFormName.value;
        let formEmail = elFormEmail.value;
        let formMessage = elFormMessage.value;
        let hasNumber = /\d/;
        let specialChars = /[`!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]/;
        let emailFormat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        if(formName == "")
        {
            hasError = true;
            elErrorName.innerText = "Le champs \'Nom\' ne peut pas être vide.";
            elErrorName.classList.remove("hidden");
        }

        if(formEmail == "")
        {
            hasError = true;
            elErrorEmail.innerText = "Votre adresse mail n'est pas valide";
            elErrorEmail.classList.remove("hidden");
        }

        if(formMessage == "")
        {
            hasError = true;
            elErrorMessage.innerText = "Le champs \'Message\' ne peut pas être vide";
            elErrorMessage.classList.remove("hidden");
        }

        if(hasNumber.test(formName))
        {
            hasError = true;
            elFormName.value = "";
            elErrorName.innerText = "Le champs \'Nom\' ne peut contenir des chiffres ni caractères spéciaux";
            elErrorName.classList.remove("hidden");
        }

        if(specialChars.test(formName))
        {
            hasError = true;
            elFormName.value = "";
            elErrorName.innerText = "Le champs \'Nom\' ne peut contenir des chiffres ni caractères spéciaux"
            elErrorName.classList.remove("hidden");
        }

        if(!formEmail.match(emailFormat))
        {
            hasError = true;
            elFormEmail.value = "";
            elErrorEmail.innerText = "Votre adresse mail n'est pas valide";
            elErrorEmail.classList.remove("hidden");
        }

        if(hasError)
        {

            return;
        }
  
        console.log("ALL GOOD");
        elModalChoice.classList.remove('hidden');
    });



    elFormName.addEventListener( 'focus', function() {
        elErrorName.classList.add("hidden");
        elErrorName.innerText = ''; // On vide le message
    });

    elFormEmail.addEventListener( 'focus', function() {
        elErrorEmail.classList.add("hidden");
        elErrorEmail.innerText = ''; // On vide le message
    });

    elFormMessage.addEventListener( 'focus', function() {
        elErrorMessage.classList.add("hidden");
        elErrorMessage.innerText = ''; // On vide le message
    });


    menuBurger.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
    });


elModalChoice.addEventListener('click',
function(evt)
{
   const elTarget = evt.target;
   const role = elTarget.dataset.role;
   const body = elModalChoice.querySelector('.modal-body');
    switch (role)
    {

        case 'close':
            elModalChoice.classList.add('hidden');
            break;
        default:
            break;
    }

});

});