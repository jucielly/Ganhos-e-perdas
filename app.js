let income = prompt("qual o valor da entrada? "); 
income = parseFloat(income);

let exit = prompt("qual o valor da saida? ");
exit = parseFloat(exit);

let taxPercent = prompt("qual o valor dos impostos?");
taxPercent = parseFloat(taxPercent);

let grossProfit = income - exit;

let tax = grossProfit*taxPercent/100; //porcentagem

let result = grossProfit - tax;

document.write("O valor liquido é $" + result );