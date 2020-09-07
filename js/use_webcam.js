export default function useWebcam (video,webcamBtn, webcamErrorP){

    const $webcamVideo = document.getElementById(video),
        $webcamBtn = document.getElementById(webcamBtn),
        $webcamError = document.getElementById(webcamErrorP),
        parameters = {video: { width: 1280, height: 720 }, audio: false};
    let gumStream;

    function showWebcam(){
        navigator.mediaDevices.getUserMedia(parameters)
        .then((stream) => {
            gumStream = stream;
            $webcamVideo.srcObject = stream;
            $webcamVideo.onloadedmetadata = function(e) {
                $webcamVideo.play();
            };

            $webcamError.classList.add('hidden');
            $webcamVideo.classList.remove('hidden');
            $webcamBtn.textContent = 'Detener webcam';
        }).catch((e)=>{
            $webcamError.classList.remove('hidden');
        })
    }

    function stopWebcam(stream){
        let track = stream.getTracks()[0];

        $webcamBtn.textContent = 'Mostrar webcam';
        $webcamVideo.classList.add('hidden');
        track.stop();
    }

    $webcamBtn.addEventListener('click', (e)=>{
        if(gumStream && gumStream.active){
            stopWebcam(gumStream);
            
        }else if(!gumStream || !gumStream.active){
            showWebcam();
        };
    });

}