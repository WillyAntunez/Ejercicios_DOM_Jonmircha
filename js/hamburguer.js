export default function hamburgerMenu (panelBTN, panel, panelItem) {
    const d = document;
    
    d.addEventListener('click', (e) => {
        if(e.target.matches(panelBTN) || e.target.matches(`${panelBTN} *`) || e.target.matches(`${panelItem}`) || e.target.matches(`${panelItem} *`) ){
            d.querySelector(panelBTN).classList.toggle('is-active');
            d.querySelector(panel).classList.toggle('hidden-guide');
        }
    })
}