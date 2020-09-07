export default function arrowButton (arrow){
    const $arrow = document.querySelector(arrow);

    document.addEventListener('scroll', (e)=>{
        if (window.scrollY > 400){
            $arrow.classList.remove('hidden');
        }else{
            $arrow.classList.add('hidden');
        };
    })
    
    document.addEventListener('click', (e)=>{
        if(e.target.matches(arrow)|| e.target.matches(`${arrow} *`)){
            window.scrollTo(0,0);
        };
    });
};
