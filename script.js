function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getUTCMinutes();
    var seg = data.getSeconds();
   

    msg.innerHTML = `Agora são ${hora}:${min}h`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#716C6F'

    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#A2581F'
    } else {
        // boa noite
       img.src = 'imagens/noite1.png'
       document.body.style.background = '#2D2D3B'
    }
}