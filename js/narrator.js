export default function narrator(form){

    const $form = document.querySelector(form),
        $voiceList = document.querySelector(`${form} select`),
        $text = document.querySelector(`${form} textarea`),
        $readBtn = document.querySelector(`${form} [type="submit"]`);

    let voices = [];

    function loadVoices( ) {

        if(voices.length > 0){
            return;
        }

        voices = speechSynthesis.getVoices();

        voices.forEach((voice, index)=> {

            const $option = document.createElement('option');
            $option.innerText = voice.name;
            $option.value = index;

            $voiceList.appendChild($option);

        })
    }

    if(window.speechSynthesis){
        
        loadVoices();

        if ('onvoiceschanged' in speechSynthesis) {
            speechSynthesis.onvoiceschanged = function () {
                loadVoices();
            };
        }

        $readBtn.addEventListener('click', e => {
            e.preventDefault();

            let message = new SpeechSynthesisUtterance;

            message.voice = voices[$voiceList.value];
            message.volume = 1;
            message.rate = 1;
            message.text = $text.value;
            message.pitch = 1;
            
            speechSynthesis.speak(message);
        })
        
    }else{
        $form.outerHTML = '<p class="error">Tu navegador no es compatible con esta funcionalidad.</p>';
    };
}