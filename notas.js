/[enl]/g; // captura no text as letras e n l individualmente
/[^enl]/g; // tudo menos enl
/[a-z]/g // todas as letras minusculas
/[A-Z]/g // todas as letras maiusculas
/[0-9]/g // todos os numeros
/./g // todos os caracteres
/\n/g // todas as linhas
/\r/g// todos os retornos de carro
/\r\n/g// retorno de carro e nova linha
/\w/g// todos os caracteres numericos e alfanumericos e undescore exceto caracteres especiais
/\s/ //todos os espaços
/\S/ // tudo que não for espaço
/^I/gm // todas as linhas que comecem em I
/d$/gm //todas as linhas que terminem em d
/\./g // todos os pontos
/g(?=old)/g // todos os g que antecedem old positive lookahead
/g(?!old)/g // todos os g que não antecedem old negative lookahead
/(?<=foo)(bar)/ // todos os bar precedidos por foo positive lookbehind
/(?<!foo)(bar)/ // todos os bar não precedidos por foo negative lookbehind

/[a-z]+/g // um ou mais caracteres minusculos
/[A-Z][a-z]*/g // um caractere maiusculo seguido por ZERO ou mais caracteres minusculos
/\d{3,4}/g // todos os grupos de numeros com 3 digitos ou 4 digitos
/\d{3,}/g // todos os grupos de numeros com 3 digitos ou mais
/(hear)?t/g // captura heart ou apenas t 
/h\w+/g // todos os h seguido por uma ou mais letras
/(?:ab)?/ //corresponde opcionalmente a "ab", mas sem criar um grupo de captura para "ab".
/(a)*?/ // *? indica que o grupo de captura funcionara de maneira lazy trazendo o minimo de caracteres que satisfaçam a expressão
/(g|l)/g // seleciona todos os g ou l
/(g|l)ive/g // seleciona todos os g ou l seguido por ive ex: live e give
/(^\d{5}$)/ // exatamente 5 digitos
/(\b\d{5}\b)/ // 5 digitos que estejam isolados





let texto = "Data de início: 01/01/2022; Data de término: 15/02/2022";
let regex = /(\d{2})\/(\d{2})\/(\d{4})/g;

let match;

while ((match = regex.exec(texto)) !== null) {
  console.log(match[0]);  // Correspondência completa
  console.log(match[1]);  // Primeiro grupo de captura (dia)
  console.log(match[2]);  // Segundo grupo de captura (mês)
  console.log(match[3]);  // Terceiro grupo de captura (ano)
}


const regex = /[()-, ]/g/
const saved = input.value.replaceAll(regex,"");

textoComEspacos.trim().replaceAll(/\s+/g, ' ');