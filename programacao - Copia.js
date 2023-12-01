function check_form(){
    var nome = document.getElementById('nome').value;
    var tel = document.getElementById('telefone').value;
    var opGenero1 = document.getElementById('rGenero1').checked;
    var opGenero2 = document.getElementById('rGenero2').checked;
    var opGenero3 = document.getElementById('rGenero3').checked;
    var cont = document.getElementById('contato').value;
    if(nome==''){
        alert("Preencha o nome");
        return false;
    }
    if(tel==''){
        alert("Preencha o telefone");
        return false;
    }    
    if((opGenero1==false)&&(opGenero2==false)&&(opGenero3==false)){
        alert("Escolha uma opção");
        return false;
    }    
       
    if(cont==0){
        alert("Escolha uma opção");
        return false;
    }   
        return true;
}
