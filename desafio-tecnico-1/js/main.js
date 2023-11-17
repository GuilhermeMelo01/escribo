document.addEventListener("DOMContentLoaded", function(){
});

function fazerSoma(){
    const valorDigitado = document.getElementById("inputValor").value;
    let somaTotal = 0;
    
    for(let i = 1; i < valorDigitado; i++){
        if(i % 3 == 0 || i % 5 == 0){
            somaTotal += i;
        }
    }

    let retornoInput = document.getElementById("retornoSoma");


    retornoInput.value = somaTotal;
}