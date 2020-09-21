function Calcular() {
    var valor = parseInt(document.getElementById('valor').value);
    var ate =parseInt(document.getElementById('numero').value);
    var text = '';

    for (var i = 0; i <= ate; i++) {
      document.getElementById('resultado').innerHTML=text= text + i.toString() +
        ' x ' +valor.toString()+
        ' = ' +(i*valor).toString()+'<br>';
        
    }
}