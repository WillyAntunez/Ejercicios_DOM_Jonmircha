export default function responsive(video, mapa){

    const $video = document.querySelector(video),
        $mapa = document.querySelector(mapa);


    function responsiveContent(){

        if (window.matchMedia("(min-width: 768px)").matches) {
            $video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            $mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081484!2d2.2922926152016383!3d48.85837360866273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses!2shn!4v1597713620699!5m2!1ses!2shn" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
                
        } else {
            $video.innerHTML = '<a href="https://www.youtube.com/watch?v=2SetvwBV-SU&t=1s"> <h3> ver video </h3> </a>'

            $mapa.innerHTML = '<a href="https://www.google.com/maps/place/Torre+Eiffel/@48.8583736,2.2922926,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813"> <h3> ver mapa </h3> </a>'
            
        }

    }

    document.addEventListener('DOMContentLoaded', ()=>{
        responsiveContent();
    })

    window.addEventListener('resize', ()=>{
        responsiveContent();
    })

}