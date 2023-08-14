const email = document.querySelector('.envioNew')
const error = document.querySelector('.validActive')
const btnEnviar = document.querySelector("#validationEmail")
const envio = document.querySelector(".envio")
const sucess = document.querySelector(".sucess")
const card = document.querySelector(".card")
const btnOk = document.querySelector("#btnOk")


btnEnviar.addEventListener("click", (e) => {
   e.preventDefault()
   
   checkForm()

   
  
})

btnOk.addEventListener("click", () => {
     card.classList.toggle('hide')
     sucess.classList.toggle('hide')
})

function checkInputValue() {
   const emailValue = email.value

   usuario = emailValue.substring(0, emailValue.indexOf("@"));
   dominio = emailValue.substring(emailValue.indexOf("@")+ 1, emailValue.length);
   
   if ((usuario.length >=1) &&
   (dominio.length >=3) &&
   (usuario.search("@")==-1) &&
   (dominio.search("@")==-1) &&
   (usuario.search(" ")==-1) &&
   (dominio.search(" ")==-1) &&
   (dominio.search(".")!=-1) &&
   (dominio.indexOf(".") >=1)&&
   (dominio.lastIndexOf(".") < dominio.length - 1)) {
     
      email.classList.remove("error")
      error.classList.remove("error")
      email.value = ""
      email.focus()
      } else { 
         email.classList.add("error")
         error.classList.add("error")
        
         
      }
}

function checkForm() {
   checkInputValue()

   const formItens = envio.querySelectorAll(".envioNew")
   
   const isValid = [...formItens].every((item) => {
      return item.className === "envioNew"
   })
   if(isValid) {
     sucess.classList.toggle('hide')
     card.classList.toggle('hide')
      
   }
}


