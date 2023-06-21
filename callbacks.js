const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function(nome){
//     console.log(nome);
// })

//********** UTILIZANDO ARROW FUNCTION ******** */
// nomes.forEach((nome) => {
//     console.log(nome);
// })

//************ OUTRA FORMA DE UTILIZAR FUNÇÕES CALLBACK *************************** */
//Criando a função de forma externa e apenas passando ela como parâmetro do método forEach.
function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);