export default function responsiveTester(form, url, width, height, closebtn, errors){

    const $RTesterForm = document.getElementById(form),
        $urlInput = document.getElementById(url),
        $widthInput = document.getElementById(width),
        $heightInput = document.getElementById(height),
        $closeBtn =  document.getElementById(closebtn),
        $errors = document.getElementById(errors);
    let popup;

    function validateUrl(url){
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        
        return regexp.test(url);
    }

    function validateNumber(num){
        if(!isNaN(num) && num > 0){
            return true;
        };
        
        return false;
    }

    $RTesterForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        let url = $urlInput.value,
            width = parseInt($widthInput.value),
            height = parseInt($heightInput.value);
        
        if(validateUrl(url) && validateNumber(width) &&validateNumber(height)){
            
            popup = window.open(url, '', `width=${width}, height=${height}`);

            $errors.innerHTML = '';
        }else{
            const $errorul = document.createElement('ul'),
                $errorli = document.createElement('li');

            function addErrorli(message){
                $errorli.textContent = message;
                $errorul.innerHTML += $errorli.outerHTML;
            }
            
            if(!validateUrl(url)){
                addErrorli('La url introducida no es valida.');
            };

            if(!validateNumber(width)){
                addErrorli('El ancho introducido no es un numero valido.');
            };

            if(!validateNumber(height)){
                addErrorli('El alto introducido no es un numero valido.')
            };

            $errors.innerHTML = $errorul.outerHTML;
        };

        $closeBtn.addEventListener('click', (e)=>{
            popup.close();
        })

    })

    



}