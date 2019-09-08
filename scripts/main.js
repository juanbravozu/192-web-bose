function handleLoad() {
    var buttonNext = document.querySelector('.next');
    var buttonPrev = document.querySelector('.prev');
    var container = document.querySelector('.gallery');
    var slider = container.querySelector('.gallery__tape');
    var count = 0;

    var first = slider.querySelector('.gallery__container');
    var firstImg = first.querySelector('img');
    var newLast = document.createElement('div');
    var newLastImg = newLast.createElement('img')
    newLastImg.setAttribute('src', firstImg.getAttribute('src'));
    newLast.classList.add('gallery__container');
    newLastImg.classList.add('gallery_img');
    slider.append(newLast);

    function handleLast(){
        console.log('cambio');
        slider.classList.add('gallery__tape--inactive');
        slider.style.transform = 'translate(0px, 0px)';
    }

    function handleNextClick(event) {
        count++;
    
        if(count == 1){
            slider.classList.remove('gallery__tape--inactive');
        }
    
        var mov = slider.offsetWidth * -1 * count;
        slider.style.transform = 'translate(' + mov + 'px, 0px)';
        
        if(count > slider.childElementCount - 2){
            setTimeout(handleLast, 300);
            count = 0;
        }
    }

    

    buttonNext.addEventListener('click', handleNextClick);

}

window.addEventListener('load', handleLoad);