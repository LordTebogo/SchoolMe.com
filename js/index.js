const dis = document.getElementById('dis');
const rem = document.getElementById('rem');
const createPass = document.getElementById('CreatePass');
let parent = dis.parentNode;
let removed;

function remover(){
    removed = parent.removeChild(dis);

}

function bring(){  
    rem.appendChild(removed);
}