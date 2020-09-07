export default function raffle(participants, raffleBtn){
    const $participants = document.getElementById(participants).children,
        $getWinnerBtn = document.getElementById(raffleBtn);

    $getWinnerBtn.addEventListener('click', e => {
        let winner;
        do{
            winner = Math.floor(Math.random()*100);
        }while(winner < 1 || winner > $participants.length);
        winner -= 1;
        alert(`El ganador es ${$participants[winner].innerText}`);
    })


}