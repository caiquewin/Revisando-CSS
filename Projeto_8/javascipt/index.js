function Calcular() {


    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    if(Number.valor1==false || Number.valor2==false)
    {
        alert("coloque um numero")

    }
    else{
        var resultado = parseInt(valor1) + parseInt(valor2);

        document.getElementById('resultado').innerText = resultado;
    }
    

}
