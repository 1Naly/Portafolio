const textArea = document.querySelector(".inputTexto");
const mensaje= document.querySelector(".mensajeinfo");
const $btn= document.getElementById('btnCopia');

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
function btnEncriptar(){
    document.getElementById ('btnCopia').style.display ="block";
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value= textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage="none";
    document.getElementById ('niMsj').style.display = "none";
    document.getElementById ('inTxt').style.display = "none";
  
    
}

function encriptar(stringEncriptada){
    let llaves = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for (let i = 0 ; i < llaves.length; i++ ){
      if(stringEncriptada.includes(llaves [i] [0])){
          stringEncriptada = stringEncriptada.replaceAll(llaves[i][0],llaves[i][1]);
      }
    }
    return stringEncriptada;
    

}

function btnDesncriptar(){
  document.getElementById ('btnCopia').style.display ="block";
    const textoEncriptado = desEncriptar(textArea.value);
    mensaje.value= textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage="none";
    document.getElementById ('niMsj').style.display = "none";
    document.getElementById ('inTxt').style.display = "none";
    
}

function desEncriptar(stringDesncriptada){
    let llaves = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase();
    
    for (let i = 0 ; i < llaves.length; i++ ){
      if(stringDesncriptada.includes(llaves [i] [1])){
        stringDesncriptada = stringDesncriptada.replaceAll(llaves[i][1],llaves[i][0]);
      }
    }
    return stringDesncriptada;
}



$btn.addEventListener('click', e => {
  mensaje.select();
  document.execCommand ('copy');
  //document.execCommand ('delete')

})

