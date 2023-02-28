const USER_LOGGED = true;
const BLOCK_TEXT = document.querySelector('.block-text');
if(USER_LOGGED){
    BLOCK_TEXT.innerHTML = 'Haz click aqui para ver el contenido'
}else{
    BLOCK_TEXT.innerHTML = 'Debes registrarte para leer este articulo'
}