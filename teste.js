function verificar() {
    let data = new Date() // Data Atual 
    let ano = data.getFullYear() // Vai pegar os 4 digitos do Ano Atual 
    let fano = document.getElementById('txtano') // ano do formulario
    let res = document.getElementById('res') // div com o ID =res 
    if(fano.value.length == 0 || Number(fano.value) > ano){ // Se o fano for igual a 0 ou o ano for maior que o ano atual 
        window.alert('Verifique os dados e tente novamente.')
    } else{
        let fsex = document.getElementsByName('radsex') // Vai pegar os dois ' RADSEX ' [0] [1]
        let idade = ano - Number(fano.value) //  O valor do ano atual - o valor do fano
        let genero = '' // Vai cmeçar vazia
        let img = document.createElement('img') // O elemento vai ser uma imagem
        img.setAttribute('id', 'foto') // Foi criado um img com o Id Foto. ' IMG ID = 'FOTO' . 
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <10) {
                //criança
                img.setAttribute ("src", "foto - babymen.jpeg")
            }else if ( idade < 21){
                //jovem 
                img.setAttribute ("src", "foto - teenmen.jpeg")
            }else if (  idade < 50 ){
                //adulto
                img.setAttribute ("src", "foto - teendulto.jpeg")
            } else {
                // idoso
                img.setAttribute ("src", "foto - oldmen.jpeg")
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10) {
                //criança
                img.setAttribute ("src", "foto - babywoman.jpeg")
            }else if ( idade < 21){
                //jovem
                img.setAttribute ("src", "foto - teenwoman.jpeg")
            }else if (  idade < 50 ){
                //adulto
                img.setAttribute ("src", "foto - womanadulta.jpeg")
            } else {
                // idoso
                img.setAttribute ("src", "foto - oldwoman.jpeg")
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)  // adicionar um elemento 
    }

}