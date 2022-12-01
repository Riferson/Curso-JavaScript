function Verificar(){
    var data = new Date();
    var ano = data.getFullYear();

    var formAno = document.getElementById("txtano");
    var res = document.querySelector('div#res');

    if(formAno.value.length == 0 || Number.parseInt(formAno.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number.parseInt(formAno.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute('id','foto');
        if(fsex[0].checked){
            genero = "homen";
            if(idade>=0 && idade<10){
                img.setAttribute('src','/Ex008/IMG/Criancamenino.jpg');
            }else if(idade < 50){
                img.setAttribute('src','/Ex008/IMG/homenadulto.jpg');
            }else{
                img.setAttribute('src','/Ex008/IMG/idoso.jpg');
            }
        }else if(fsex[1].checked){
            genero="mulher";
            if(idade>=0 && idade<10){
                img.setAttribute('src','/Ex008/IMG/criancamenina.jpg');
            }else if(idade < 50){
                img.setAttribute('src','/Ex008/IMG/mulheradulta.jpg');
            }else{
                img.setAttribute('src','/Ex008/IMG/idosa.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}