export default function searchFilter(searchFilterDiv, searchIn){
    const $cards = document.getElementById(searchFilterDiv).children,
        $searchIn = document.getElementById(searchIn);

    $searchIn.addEventListener('keyup', e => {
        let value = $searchIn.value.toLowerCase();

        for (const card of $cards) {
            let text = card.textContent.toLowerCase();
            
            if(!text.includes(value)){
                card.classList.add('hidden');
            }else{
                card.classList.remove('hidden');
            };
        };
    });
};