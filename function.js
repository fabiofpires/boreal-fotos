function botao(){
    if (document.querySelector('cor').ClassList.contains('button')){
        document.querySelector('cor').classList.remove('button'); 
        document.querySelector('cor').classList.add('rosa');
    } else{
        document.querySelector('cor').classList.remove('rosa'); 
        document.querySelector('cor').classList.add('button')

    }
}
