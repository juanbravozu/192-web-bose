function handleLoad() {

    var colorButtons = document.querySelectorAll('.inter__color');
    var productImage = document.querySelector('.productModel');

    function iterateButtons(btn, index) {

        function handleColorClick() {

            productImage.setAttribute('src', './styles/images/model'+index+'.png');
           
        }

        btn.addEventListener('click', handleColorClick);
    }

    colorButtons.forEach(iterateButtons);
}

window.addEventListener('load', handleLoad);