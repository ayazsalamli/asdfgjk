let ad = prompt("What is your name:");
let age = prompt("How old are u:");
let surname = prompt("What is your surname:");


let netice;
if (ad.length < 5) {
   netice = "Your name has less than 5 letters" +"."+ ad +"-Its your name.";
} else if (ad.length == 5) {
   netice = "Your name have 5 letters" +"."+ ad +" Its your name";
}else  {
   netice = "Your name is bigger than five letters" +"."+ ad +" Its your name";
}

let netice1;
if (age < 10) {
   netice1 = "You are not 10 years old yet" +"."+ age +" Its your age";
}else if (age == 10)   {
   netice1 = "You are 10 years old" +"."+ age +" Its your age";
}else   {
   netice1 = "You are too old" +"."+ age +" Its your age";
}

let netice2;
if (surname.length < 5) {
   netice2 = "Your surname has less than 5 letters" +"."+ surname +" Its your surname";
} else if (surname.length == 5) {
   netice2 = "Your surname have 5 letters" +"."+ surname +" Its your surname";
}else  {
   netice2 = "Your surname is bigger than five letters" +"."+ surname +" Its your surname";
}

document.getElementById('hi').innerHTML = netice;
document.getElementById('hi1').innerHTML = netice1;
document.getElementById('hi2').innerHTML = netice2;

