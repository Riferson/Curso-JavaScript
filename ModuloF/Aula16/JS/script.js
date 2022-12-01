var array=[];
var inputNum = document.getElementById('inputNum');
var selectLog = document.getElementById('log');
var resul = document.getElementById('resul');

function soma(arraysoma){
    let soma = 0;
    for(let i in arraysoma){
       
        soma += arraysoma[i];
    }
    return soma;
}

function media(arraysoma){
    let media = 0;
    media = soma(arraysoma) / arraysoma.length;

    return media.toFixed(2);
}


function inserir(){
    resul.innerHTML='';
    let num = Number.parseInt(inputNum.value);

    if(num < 0 || num > 100  || inputNum.value==''){
        alert("Numero digitado invalido, digite apenas numeros entre 0 e 100!");
    }else if(array.indexOf(num) == -1){
        array.push(num);
        let item = document.createElement('option');
        item.innerHTML = `Numero ${num} adicionado no vetor  na posição ${array.indexOf(num)}`;
        selectLog.appendChild(item);
    }else{
        alert(`Numero ja existe, se encontra na posição ${array.indexOf(num)}`);
    }
   soma(array);

}

function ExibirResul(){
    array.sort();
    resul.innerHTML=`Ao todo, temos ${array.length} numeros cadastrados.<br>
    O mairo valor informado foi ${array[array.length-1]}.<br>
    O menor valor informado foi ${array[0]}.<br>
    Somando todos os valores, temos ${soma(array)}.<br>
    A Media dos valores digitados é ${media(array)}`;
}