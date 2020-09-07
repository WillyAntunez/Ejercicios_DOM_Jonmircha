export default function geoLocation(locationBtn, locationDiv){

    const $locationBtn = document.getElementById(locationBtn),
        $locationDiv = document.getElementById(locationDiv),
        geoOptions = {
            enableHighAccuracy: true, 
            maximumAge        : 30000, 
            timeout           : 27000
        };

    function geoSucces(position){
        let lat = position.coords.latitude, 
            long = position.coords.longitude,
            accuracy = position.coords.accuracy;
        const $position = document.createDocumentFragment(''),
            $p = document.createElement('p');
        
        $p.innerText = 'Tu posicion actual es:';
        $position.innerHTML = $p.outerHTML;
        $p.innerHTML = `Latitud = <b>${lat}</b>`;
        $position.innerHTML += $p.outerHTML;
        $p.innerHTML = `Longitud = <b>${long}</b>`;
        $position.innerHTML += $p.outerHTML;
        $p.innerHTML = `Presición = <b>${accuracy} metros</b>`;
        $position.innerHTML += $p.outerHTML;
        $locationDiv.innerHTML = $position.innerHTML;

        $locationDiv.innerHTML += `<a href="https://www.google.es/maps?q=${lat},${long}" target="_blank">Ver en Google Maps</a>`;
    }

    function geoError(e){
        let msg;
        switch (e.code) {
            case 1: 
                msg = 'Permiso denegado.';
            break;
            default: 
                msg = 'No se pudo determinar la ubicacion.';
            break;
        }
        $locationBtn.setAttribute('disabled', 'true');
        $locationDiv.innerHTML = `<p class='error'>Error: ${msg}</p>`;
    }

    if(navigator.geolocation){
        $locationBtn.addEventListener('click', (e)=>{
            navigator.geolocation.getCurrentPosition(geoSucces, geoError, geoOptions);
        });
    }else{
        $locationBtn.setAttribute('disabled', 'true');
        $locationDiv.innerText = '<p class="error">Error: Tu navegador no soporta geolocalización.</p>';
        console.log('no se soporta')
    }

}