alert("Program wykonuje pięć operacji na liczbach - dodawanie, odejmowanie,dzielenie, mnożenie, reszta dzielenia.")

let choice = prompt(`Wybierz co chcesz zrobić: dodawanie + , odejmowanie - , dzielenie - / , mnożenie * , modulo %. `)

switch (choice) 
{case '+':
let a = parseInt(prompt("Podaj liczbe a: "))
let b = parseInt(prompt("Podaj liczbe b: "))
let dodawanie= a + b
alert(`Wynik po dodaniu a + b wynosi ${dodawanie} `)

break;

case '-':
let c = parseInt(prompt("Podaj liczbe c: "))
let d = parseInt(prompt("Podaj liczbe d: "))
let odejmowanie= c - d
alert(`Wynik po dodaniu c - d wynosi ${odejmowanie} `)

break;

case '/':
let e = parseInt(prompt("Podaj liczbe e: "))
let f = parseInt(prompt("Podaj liczbe f: "))
let dzielenie= e / f
alert(`Wynik po podzieleniu e - f wynosi ${dzielenie} `)

break;

case '*':
let g = parseInt(prompt("Podaj liczbe g: "))
let h = parseInt(prompt("Podaj liczbe h: "))
let mnozenie= g * h
alert(`Wynik po pomnożeniu g * h wynosi ${mnozenie} `)

break;

case '%':
let i = parseInt(prompt("Podaj liczbe i: "))
let j = parseInt(prompt("Podaj liczbe j: "))
let reszta_dzielenia= i % j
alert(`Wynik reszty dzielenia i % j wynosi ${reszta_dzielenia}`)

break;
default:

}