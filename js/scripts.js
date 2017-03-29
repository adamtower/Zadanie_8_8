var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace('Papugi', animalUpperCased);



//console.log(text);
//console.log(animalUpperCased);
//console.log(textCharsAfter.length/2);
//console.log(textCharsAfter.slice(0,45));
console.log(textCharsAfter.slice(0,textCharsAfter.length/2));