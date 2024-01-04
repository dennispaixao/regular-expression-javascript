let texto = "Data de início: 01/01/2022; Data de término: 15/02/2022";
let regex = /(\d{2})\/(\d{2})\/(\d{4})/g;

let match1 = regex.exec(texto);
console.log(match1.index);
console.log(regex.lastIndex);

let match2 = regex.exec(texto);
console.log(match2.index);
console.log(regex.lastIndex);
