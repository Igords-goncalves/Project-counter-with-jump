function contar() {
    let inicio = window.document.querySelector('input#txti');
    let fim = window.document.querySelector('input#txtf');
    let passo = window.document.querySelector('input#txtp');
    let res = window.document.querySelector('div#result');
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar';
        window.alert('[ERRO] Faltam dados');
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p == 0) {
            window.alert('Passo Inválido! Considerando passo 1');
        }
        
        if (i < f) { //Contagem crescente 
            for (let count = i; count <= f; count += p) {
                res.innerHTML += ` ${count} \u{1F600}`;
            } 
        } else { //Contagem regressiva
            for (let count = i; count >= f; count -= p) {
                res.innerHTML += ` ${count} \u{1F600}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
/* 
Travamento quando colocado passo 0 
Alinhamento vertical da cintagem
*/