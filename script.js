document.getElementById('bem-vindo-button').addEventListener('click', function() {
    document.querySelector('.janela-bv').style.display = 'none';
});

function somar() {
    /*Convertendo os valores do input em variaveis*/
    
    var N_QUEST = parseFloat(document.getElementById("N_QUEST").value);
    var NQ_A = parseFloat(document.getElementById("NQ_A").value);
    var NQ_B = parseFloat(document.getElementById("NQ_B").value);
    var NQ_C = parseFloat(document.getElementById("NQ_C").value);
    var NQ_D = parseFloat(document.getElementById("NQ_D").value);

    var AC_A = parseFloat(document.getElementById("AC_A").value) || 0;
    var AC_B = parseFloat(document.getElementById("AC_B").value) || 0;
    var AC_C = parseFloat(document.getElementById("AC_C").value) || 0;

    var ER_A = parseFloat(document.getElementById("ER_A").value) || 0;
    var ER_C = parseFloat(document.getElementById("ER_C").value) || 0;

    if (isNaN(N_QUEST) || isNaN(NQ_A) || isNaN(NQ_B) || isNaN(NQ_C) || isNaN(NQ_D)) {
        document.getElementById("IMP_X").innerHTML = "Preencha a quantidade de Questões";
        return;
        }
        
    var PESO = NQ_A+(2*NQ_B)+(2*NQ_C)+(3*NQ_D)
    var X = N_QUEST/PESO;
    X=X.toFixed(3);

    var ESCORE = X*(AC_A + (2*AC_B) + (2*AC_C) - (ER_C*0.667) - ER_A);
    ESCORE=ESCORE.toFixed(3)

    document.getElementById("IMP_X").innerHTML = "Escore Bruto: " + ESCORE;
}
