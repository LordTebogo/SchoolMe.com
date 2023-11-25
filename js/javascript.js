let menu = document.getElementById('menu');
let menubtn = document.querySelector('menubtn');
let menuBtn = document.getElementById('menuBtn')
let number = 0;
function openMenu(){
    
    switch (number){
        case 1:
            menu.style.visibility = 'visible';
            menuBtn.style.border = 'solid';
            menuBtn.style.background = '#00000085';
            number --;
            break;
        case 0:
            menu.style.visibility = 'hidden';
            menuBtn.style.border = 'none';
            menuBtn.style.background = 'transparent';
            number ++;
            break;

    }
}