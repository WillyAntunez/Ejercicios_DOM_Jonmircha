export default function countdown(timerID){
    const $timer = document.getElementById(timerID);

    function getDistance(){
        let now = new Date(),
            newYear = new Date(now.getFullYear()+1, 0, 0),
            distance = newYear.getTime() - now.getTime(),
            days = distance/(1000*60*60*24),
            hours = (days%1)*24,
            minutes = (hours%1)*60,
            seconds = (minutes%1)*60;

        $timer.innerText = `${Math.floor(days)} dias ${Math.floor(hours)} horas ${Math.floor(minutes)} minutos ${Math.floor(seconds)} segundos`;
    }
    getDistance();

    setInterval(getDistance,1000);
};