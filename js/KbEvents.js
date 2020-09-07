export function shortcuts (e) {

        if(e.altKey && e.key === 'a'){
            alert('Haz lanzado una alerta');
        };

        if(e.altKey && e.key === 'p'){
            prompt('Haz lanzado un aviso');
        };

        if(e.altKey && e.key === 'c'){
            confirm('Haz lanzado una confirmacion');
        }
}

let x = 0, 
    y = 0;

export function moveBall (circulo, movingArea, e){
    const $ball = document.querySelector(circulo),
        $movingArea = document.querySelector(movingArea);

    let limitBall = $ball.getBoundingClientRect(),
        limitArea = $movingArea.getBoundingClientRect(),
        border = 13;
    
        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault();
                if(limitArea.right >= (limitBall.right+border)) {
                    x+=5;
                }
                break;
            
            
            case 'ArrowLeft':
                e.preventDefault();
                if(limitArea.left <= (limitBall.left-border)) {
                    x-=5;
                }
                break;
        
            case 'ArrowDown':
                e.preventDefault();
                if(limitArea.bottom >= (limitBall.bottom+border)) {
                    y+=5;
                }
                break;

            case 'ArrowUp':
                e.preventDefault();
                if(limitArea.top <= (limitBall.top-border)) {
                    y-=5;
                }
                break;
        
        }

        $ball.style.transform = `translate(${x}px, ${y}px)`  
}