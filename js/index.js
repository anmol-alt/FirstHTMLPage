
function navigationEvent(){
    let navigationElements = document.getElementsByClassName( 'menu' );

    for ( let i = 0; i < navigationElements.length; i ++ ){
        navigationElements[i].addEventListener( 'click', ( event ) => {
            
            let selectedSection = document.querySelector( '.selectedSection' );
            selectedSection.classList.add( 'hidden' );
            selectedSection.classList.remove( 'selectedSection' );
            
            let currentElement = event.target.id;
            console.log( `.${currentElement}Section` );
            let elementToShow = document.querySelector( `.${currentElement}Section` );

            elementToShow.classList.remove( 'hidden' );
            elementToShow.classList.add( 'selectedSection' );
        });
    }
}

function init(){
    navigationEvent();
}

init();