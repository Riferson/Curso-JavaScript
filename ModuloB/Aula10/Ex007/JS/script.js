function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    //var hora = data.getHours();
    var hora = 12;
    var minutos = data.getMinutes();
    console.log("funcao chamada");
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`;

    if (hora >= 0 && hora < 12) {
        img.src = "/Ex007/IMG/manha.jpg";
        
        document.body.style.background = "linear-gradient(45deg, rgba(71,19,11,1) 0%, rgba(179,94,4,1) 55%, rgba(218,163,98,1) 100%)";
    } else if (hora >= 12 && hora < 18) {
        img.src = "/Ex007/IMG/tarde.jpg";
        document.body.style.background = "#b9846f";
        console.log("tarde");
    } else {
        img.src = "/Ex007/IMG/noite.jpg";
        document.body.style.background = "#515154";
        console.log("tarde");
    }
}
