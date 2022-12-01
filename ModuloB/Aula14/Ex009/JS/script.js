function Contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');

    console.log(inicio);
    if(inicio.value == '' || fim.value == '' || passo.value == '' || Number.parseInt(inicio.value) > Number.parseInt(fim.value)){
        alert("Erro Verifique os dados e tente novamente");
    } else{
        inicio = Number.parseInt(inicio.value);
        fim = Number.parseInt(fim.value);
        passo = Number.parseInt(passo.value);
    
        var resultado = document.getElementById('resultado');
        console.log('antes do for');
        resultado.innerHTML= "Resultado: ";
        for(var i=inicio;i<=fim;i=i+passo){
            resultado.innerHTML+= `> ${i} `;
            console.log(i);
        }
        
        console.log('depois do for');
    }

}