export default function clockAndAlarm(iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma, reloj, alarma) {

    const $reloj = document.querySelector(reloj);
    const $alarma = document.querySelector(alarma);
    const $iniciarRelojBtn = document.querySelector(iniciarReloj);
    const $iniciarAlarmaBtn = document.querySelector(iniciarAlarma);

    function addZero(i){
        if(i<10){
            i = `0${i}`
        };
        return i
    };

    function getFullHour() {
        let d = new Date();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        return addZero(h)+ ':'+ addZero(m)+ ':'+ addZero(s);
    };

    document.addEventListener('click', e => {
        if(e.target.matches(iniciarReloj)){
            $iniciarRelojBtn.setAttribute('disabled', 'true');
            $reloj.classList.remove('hidden');
            $reloj.innerText = getFullHour();

            var relojInterval = setInterval(()=>{
                $reloj.innerText = getFullHour();
            }, 1000);
        };

        if(e.target.matches(detenerReloj)){
            $iniciarRelojBtn.removeAttribute('disabled');
            $reloj.classList.add('hidden');
            clearInterval(relojInterval);
        };

        if(e.target.matches(iniciarAlarma)){
            $iniciarAlarmaBtn.setAttribute('disabled', 'true');
            $alarma.play();
            var alarmaInterval = setInterval(()=>{
                $alarma.currentTime = 0;
                $alarma.play();
            }, 10000);
        };

        if(e.target.matches(detenerAlarma)){
            $iniciarAlarmaBtn.removeAttribute('disabled');
            clearInterval(alarmaInterval)
            $alarma.pause();
            $alarma.currentTime = 0;
        };
    });

}