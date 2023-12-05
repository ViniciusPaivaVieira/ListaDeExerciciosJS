
/**
 * Recebe um array com os nomestext de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomestext
 * @returns Um array com os nomestext invertidos
 */ 
function invert(people){
    var peopleInverted = [];
    for (let i=0; i<people.length; i++){
        peopleInverted.push(people[people.length-(i+1)]);
   }
    // TODO
    // 1) Peça ao usuário para digitar vários nomestext. Exiba na tela
    // todos os nomestext digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomestext dos usuários.
    return peopleInverted;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){
    let media = 0;
    grades.map((nota) => media = media + nota)
    return media/grades.length;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){
    return mean>=7?"aprovado":"reprovado";
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){
    var todos = strDate.split("/")
    if(todos.length==3){
    let dia = todos[0];
    let mes = todos[1];
    let ano = todos[2];
    switch(mes){
        case '01':
            mes="janeiro";
            break;
        case '02':
            mes="fevereiro";
            break;
        case '03':
            mes="março";
            break;
        case '04':
            mes="abril";
            break;
        case '05':
            mes="maio";
            break;
        case '06':
            mes="junho";
            break;
        case '07':
            mes="julho";
            break;
        case '08':
            mes="agosto";
            break;
        case '09':
            mes="setembro";
            break;
        case '10':
            mes="outubro";
            break;
        case '11':
            mes="novembro";
            break;
        case '12':
            mes="dezembro";
            break;
        default:
            break;
    }
    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.

    return (dia + " de " + mes + " de " + ano);
}
else return "";
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}
