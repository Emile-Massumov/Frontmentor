const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");

form.addEventListener ("submit" , (e) => {
    e.preventDefault ();
    inputs.forEach(input => {
        if (!input.value) {
            input.parentElement.classList.add("error");

        }else{
            input.parentElement.classList.remove("error");
            if (input.type == 'email') {
                if (validateEmail(input.value)) {
                    input.parentElement.classList.remove("error");
            } else { 
                input.parentElement.classList.add("error");
             }
            }
        }
    });
});
function Email(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("Invalid email address!")
    return (false)
}