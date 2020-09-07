export default function userAgent(userAgentli, platformli, browserli, deviceInfo, browserInfo){

    const $userAgentli = document.getElementById(userAgentli),
        $platformli = document.getElementById(platformli),
        $browserli = document.getElementById(browserli),
        $deviceInfo = document.getElementById(deviceInfo),
        $browserInfo = document.getElementById(browserInfo);

    function getPlatform(){
        const platform = navigator.userAgent.toLowerCase();

        if (/iphone|ipad|ipod|ipod touch/.test(platform)) return 'iOS';
        if (platform.includes('mac')) return 'MacOS';
        if (platform.includes('win')) return 'Windows';
        if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
        if (/linux/.test(platform)) return 'Linux';

        return 'Desconocida';
    }

    function getBrowser(){
        const ua = navigator.userAgent.toLowerCase();

        if (ua.includes('opera') || ua.includes('opr')) return 'Opera';
        if (ua.includes('edge')) return 'Edge';
        if (ua.includes('chrome')) return 'Chrome';
        if (ua.includes('firefox')) return 'Firefox';
        if (ua.includes('msie')) return 'Internet Explorer';

        return 'Desconocido';
    }

    $userAgentli.innerText = navigator.userAgent; 
    $platformli.innerText = getPlatform();
    $browserli.innerText = getBrowser();

    if(getBrowser()==='Chrome'){
        $browserInfo.innerText = 'Este contenido solo es accesible desde Chrome';
    }
    
    if(/Android/.test(getPlatform())){
        $deviceInfo.innerText = 'Descarga nuestra app para Android'
    }else if(/iOS/.test(getPlatform())){
        $deviceInfo.innerText = 'Descarga nuestra app para iOS'
    }else if(/Windows/.test(getPlatform())){
        $deviceInfo.innerText = 'Descarga nuestra app para Windows'
    }

    


}