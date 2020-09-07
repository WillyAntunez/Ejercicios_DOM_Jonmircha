export default function smartVideo() {
    
    const $videos = document.querySelectorAll('video');

    const cb = (entries) => {

        entries.forEach( video => {
            if(video.isIntersecting){
                video.target.play();
            }else{
                video.target.pause();
            };

            window.addEventListener('visibilitychange', e => {
                document.visibilityState === 'visible' && video.isIntersecting?
                video.target.play():
                video.target.pause(); 
            });
        });
    };

    const observer = new IntersectionObserver(cb, {
        threshold: 1
    });

    $videos.forEach(video => observer.observe(video));

}