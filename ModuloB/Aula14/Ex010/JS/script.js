function GerarTabuada() {
  var num = document.getElementById("numero");
  num = Number.parseInt(num.value);
  var resul = document.getElementById("tabela");
  resul.innerHTML='';
  for(var i=1;i<=10;i++) 
  resul.innerHTML += `${num} X ${i} = ${num*i} <br>`;
}

function teste(){
  var text = 'isso e apenas um texte';
  console.log(text.indexOf('s'));
}