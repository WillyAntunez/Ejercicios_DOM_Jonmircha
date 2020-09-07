export default function scrollSpy(){

    const $sections = document.querySelectorAll('.seccion[data-scroll-spy]');

    const cb = (entries) => {
        entries.forEach( entry =>{
            if(entry.isIntersecting && document.hasFocus){
                const id = entry.target.getAttribute('id'),
                    $a = document.querySelector(`a[data-scroll-spy][href="#${id}"]`);
                $a.classList.add('active');
            }else{
                const id = entry.target.getAttribute('id'),
                    $a = document.querySelector(`a[data-scroll-spy][href="#${id}"]`);
                $a.classList.remove('active');
            }
        })
    };
        
    const observer = new IntersectionObserver(cb, {
        //root
        //rootMargin: "-250px"
        threshold: [0.5, 0.75]
    });

    $sections.forEach(el => observer.observe(el));
    

}