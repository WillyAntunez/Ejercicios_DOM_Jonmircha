export default function darkMode(darkModeBtn){

    const $darkModeBtn = document.querySelector(darkModeBtn),
            $selectors = document.querySelectorAll("[data-dark], h2, h3");
    
    document.addEventListener('DOMContentLoaded', (e)=>{
        let darkMode = localStorage.getItem('darkMode');
        if( darkMode === 'true'){
            $darkModeBtn.classList.add('sun');
            $selectors.forEach(e => e.classList.add('dark-mode'));
        }
    })

    document.addEventListener('click', (e)=>{
        if (e.target.matches(darkModeBtn)){
            let darkMode = localStorage.getItem('darkMode');
            if(darkMode === null || darkMode === 'false'){
                $darkModeBtn.classList.add('sun');
                $selectors.forEach(e => e.classList.add('dark-mode'));
    
                localStorage.setItem('darkMode', 'true');
            }else{
                $darkModeBtn.classList.remove('sun');
                $selectors.forEach(e => e.classList.remove('dark-mode'));
    
                localStorage.setItem('darkMode', 'false');
            }
        }
    })
    
}
