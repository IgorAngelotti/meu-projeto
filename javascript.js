var res = window.document.getElementById('res')
var botao = document.getElementById('botaosoma')
var num1 = document.getElementById('txtnum1')
var num2 = document.getElementById('txtnum2')
botao.addEventListener('click', soma)
function soma (){
   var somar = Number(num1.value) + Number(num2.value)
   res.innerHTML = `Resultado: ${somar}` 
}