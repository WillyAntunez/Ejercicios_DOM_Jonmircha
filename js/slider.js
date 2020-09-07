export default function slider(slides, nextSlide, previousSlide){

    const $slides = document.getElementById(slides).children;

    $slides[0].classList.add('show-slide');
    let slideShowed = 0;

    document.addEventListener('click', e => {
        if(e.target.matches(nextSlide) || e.target.matches(`${nextSlide} *`)){
            $slides[slideShowed].classList.remove('show-slide');

            if(slideShowed < ($slides.length - 1)){
                slideShowed += 1;
            }else{
                slideShowed = 0;
            };

            $slides[slideShowed].classList.add('show-slide');
        };

        if(e.target.matches(previousSlide) || e.target.matches(`${previousSlide} *`)){

            $slides[slideShowed].classList.remove('show-slide');

            if(slideShowed  !== 0){
                slideShowed -= 1;
            }else{
                slideShowed = $slides.length-1;
            };

            $slides[slideShowed].classList.add('show-slide');

        };
    });
};