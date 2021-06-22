function contar() {
    let inicio = window.document.querySelector('input#txti');
    let fim = window.document.querySelector('input#txtf');
    let passo = window.document.querySelector('input#txtp');
    let res = window.document.querySelector('div#result');
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados');
    } else {
        res.innerHTML = 'Contando:';
    }
}