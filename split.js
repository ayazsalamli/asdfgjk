let ad = prompt("What is your name:");
let netice;
if (ad.length < 5) {
   netice = "Your name haave 5 letters or less" +"."+ ad +" Its your name";
} else if (ad.length == 5) {
   netice = "Your name have 5 letters" +"."+ ad +" Its your name";
}else  {
   netice = "Your name is bigger than five letters" +"."+ ad +" Its your name";
}

document.getElementById('hi').innerHTML = netice;
