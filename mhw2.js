const searchingBlock = document.querySelector('#input-container');
const inputText = searchingBlock.querySelector('input');
function focusedSearch(){

    searchingBlock.classList.remove('hover-highlighted');
    searchingBlock.classList.add('highlighted-input');
}
function unfocusedSearch(){

    searchingBlock.classList.remove('highlighted-input');
    searchingBlock.classList.add('hover-highlighted');
    
}

inputText.addEventListener('focus', focusedSearch);
inputText.addEventListener('blur', unfocusedSearch);


const elementList = document.querySelectorAll('div.element-show');

function onMouseOver(event){

    let playButton = event.currentTarget.querySelector('button.play-over');
    playButton.classList.remove('hidden');


}

function onMouseLeft(event){

    let playButton = event.currentTarget.querySelector('button.play-over');
    playButton.classList.add('hidden');


}

for(let element of elementList){
    element.addEventListener('mouseenter', onMouseOver);
    element.addEventListener('mouseleave', onMouseLeft);
}

const menu = document.querySelector('#menu');
const dropDown = document.querySelector('#dropdown-pam');


function showDropDown(event){

    event.stopPropagation();
    dropDown.classList.remove('hidden');
}

function hideDropDown(){

    dropDown.classList.add('hidden');

}

const searchButton = document.querySelector('#search-button');
let isShown = false;
function showInputContainer(){

    if(!isShown)
    {    
        searchingBlock.style.display = 'flex';
        focusedSearch();
        inputText.focus();
    }
    else
    {
        searchingBlock.style.display = 'none';
        unfocusedSearch();
    }
    isShown = !isShown;
}


searchButton.addEventListener('click', showInputContainer);
document.addEventListener('click', hideDropDown);
menu.addEventListener('click', showDropDown);
