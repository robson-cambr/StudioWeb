// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/* Máscaras ER */




function PhoneMask(obj, fun) {
    varObj = obj
    varFun = fun
    setTimeout("SetPhoneMask()", 1)
}
function SetPhoneMask() {
    varObj.value = varFun(varObj.value)
}
function Phone(varAux) {
    varAux = varAux.replace(/\D/g, ""); //Remove tudo o que não é dígito
    varAux = varAux.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    varAux = varAux.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return varAux;
}
function GetPhoneId(element) {
    return document.getElementById(element);
}
window.onload = function () {
    GetPhoneId('phone').onkeyup = function () {
        PhoneMask(this, Phone);
    }
}