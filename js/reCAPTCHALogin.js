document.addEventListener("DOMContentLoaded", 
function() 
{
    document.getElementById("frmlogin").addEventListener('submit', revisarform); 
});
function revisarform(evento) 
{
    evento.preventDefault();
    if(validarrecaptcha()===true) 
    {
        this.submit();
    }
    else
    {
        document.getElementById("frmlogin").reset();
    }
}
var codvai1='';
function crearrecaptcha() 
{
    codvai1='';
    var cantidadtexto=4;
    var vericodigovai=document.getElementById("vericodigovai");
    vericodigovai.value='';
    var letrasynumeros=new Array(0,1,2,3,4,5,6,7,8,9,'A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for(var i=0;i<cantidadtexto;i++) 
    {
        var x=Math.floor(Math.random()*34);
        codvai1+=letrasynumeros[x];
    }
    if(codvai1.length!=cantidadtexto) {
        crearrecaptcha();
    }
    vericodigovai.innerHTML=codvai1;
}
function validarrecaptcha() 
{
    var codingresado=document.getElementById("txtrecaptcha").value.toUpperCase();
    if(codingresado!=codvai1)
    {
        alert("reCAPTCHA Incorrecto, intenta de nuevo");
        crearrecaptcha();
        document.getElementById("txtusuario").focus();
        return false;
    }else {
        return true;
    }
}