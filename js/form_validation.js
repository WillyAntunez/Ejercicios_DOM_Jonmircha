export default function formValidation( form ){
    
    const $name = document.querySelector(`${form} [name="name"]`),
        $email = document.querySelector(`${form} [name="email"]`),
        $subject = document.querySelector(`${form} [name="subject"]`),
        $comment = document.querySelector(`${form} [name="comment"]`),
        $form = document.querySelector(form);

    function validateInput(element, regex, message){
        if(element.nextElementSibling.matches('.error')){
            $form.removeChild(element.nextSibling)
        };

        if(!regex.test(element.value) && element.value !== ''){
            element.insertAdjacentHTML("afterend" ,`<p class="error">${message}</p>`);
        };
    };

    document.addEventListener('keyup', e => {

        if(e.target === $name){
            let regex = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);

            validateInput($name, regex, 'El nombre no es valido.');
        };

        if(e.target === $email){

            let regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);

            validateInput($email, regex, 'El email no es valido.');     
        };
        
        if(e.target === $comment){

            let regex = new RegExp(/^.{0,150}$/);

            validateInput($comment, regex, 'Solo se permite un maximo de 250 caracteres en el comentario.');   
        };
    });

    
}