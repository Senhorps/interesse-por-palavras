const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto (texto);

    campoResultado.textContent = palavras.join(", ");
}

function processaTexto(texto){
    let palavra = texto. split (/\P{L}+/u);
    
    
  let  frequencias = [];  
    for( let i in palavras ){
       frequencias[i] = 0;
    for (let j in palavras);{
        
    }

    }
    
   console.log(frequencias);
    

    return  palavras;
}