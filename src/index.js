module.exports = function toReadable(number) {
    if (number == 0) {
        return "zero";
    }
    let n = number.toString().split("");
    if (n.length == 1) {
        return simpleN(n[0]);
    }
    if (n.length == 2) {
        return theLastTwo(n).trim();
    }
    if (n.length == 3) {
        let lastTwo = n.slice(1, 3);
        return `${simpleN(n[0])} hundred ${theLastTwo(lastTwo)}`.trim();
    }
};

function simpleN(num) {
    switch (num) {
        case "0":
            return "";
        case "1":
            return "one";
        case "2":
            return "two";
        case "3":
            return "three";
        case "4":
            return "four";
        case "5":
            return "five";
        case "6":
            return "six";
        case "7":
            return "seven";
        case "8":
            return "eight";
        case "9":
            return "nine";
    }
}
function secondTen(num) {
    switch (num) {
        case "0":
            return "ten";
        case "1":
            return "eleven";
        case "2":
            return "twelve";
        case "3":
            return "thirteen";
        case "4":
            return "fourteen";
        case "5":
            return "fifteen";
        case "6":
            return "sixteen";
        case "7":
            return "seventeen";
        case "8":
            return "eighteen";
        case "9":
            return "nineteen";
    }
}
function theLastTwo(mas) {
    switch (mas[0]) {
        case "0":
            return `${simpleN(mas[1])}`;
        case "1":
            return secondTen(mas[1]);
        case "2":
            return `twenty ${simpleN(mas[1])}`;
        case "3":
            return `thirty ${simpleN(mas[1])}`;
        case "4":
            return `forty ${simpleN(mas[1])}`;
        case "5":
            return `fifty ${simpleN(mas[1])}`;
        case "6":
            return `sixty ${simpleN(mas[1])}`;
        case "7":
            return `seventy ${simpleN(mas[1])}`;
        case "8":
            return `eighty ${simpleN(mas[1])}`;
        case "9":
            return `ninety ${simpleN(mas[1])}`;
    }
}
