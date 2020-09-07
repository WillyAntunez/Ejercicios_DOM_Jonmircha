export default function conectionChecker(messageBox){

    const $messageBox = document.getElementById(messageBox);
    
    window.addEventListener('offline', e =>{
        $messageBox.innerHTML = '<h2>Se ha perdido la conección.</h2>';
        $messageBox.classList.add('alert');
        $messageBox.classList.remove('hidden');

        setTimeout(()=>{
            $messageBox.classList.add('hidden');
            $messageBox.classList.remove('alert');
        },2000)
    })

    window.addEventListener('online', e =>{
        $messageBox.innerHTML = '<h2>Conección reestablecida.</h2>';
        $messageBox.classList.add('success');
        $messageBox.classList.remove('hidden');
        
        setTimeout(()=>{
            $messageBox.classList.add('hidden');
            $messageBox.classList.remove('success');
        },2000)
    })
}