let cifrarScreen = document.getElementById("cifrarScreen");
let cifrarScreen2 = document.getElementById("cifrarScreen2");
let descifrarScreen = document.getElementById("descifrarScreen");
let descifrarScreen2 = document.getElementById("descifrarScreen2");
let crear = document.getElementById("crear");
let descrear = document.getElementById("descrear");
let result1 = document.getElementById("result1");
let volver1 = document.getElementById("volver1");
let volver2 = document.getElementById("volver2");


const start = document.getElementById('start');
const firstScreen = document.getElementById('empezar');
const options = document.getElementById('options');
options.style.display='none';

cifrarScreen.style.display = 'none';
cifrarScreen2.style.display = 'none';
descifrarScreen.style.display = 'none';
descifrarScreen2.style.display = 'none';

start.addEventListener('click', function(){
  firstScreen.style.display = 'none';
  options.style.display = 'block';
})

crear.addEventListener('click', () =>{
  options.style.display = 'none';
  cifrarScreen.style.display = 'block';
})

descrear.addEventListener('click', () =>{
  options.style.display = 'none';
  descifrarScreen.style.display = 'block';
})

result1.addEventListener('click',()=>{
  let input= (document.getElementById("cifrar").value);
  let offset= parseInt(document.getElementById("offset").value);
  let output = document.getElementById("output");
  output.innerHTML = window.cipher.encode(input,offset);
  
  cifrarScreen.style.display = 'none';
  cifrarScreen2.style.display = 'block';
})

let result2 = document.getElementById("result2");
result2.addEventListener('click', () =>{
  let input = document.getElementById("descifrar").value;
  let offset2= parseInt(document.getElementById("offset2").value);
  let output2=document.getElementById("output2");
  output2.innerHTML = window.cipher.decode(input,offset2);
  descifrarScreen.style.display = 'none';
  descifrarScreen2.style.display = 'block';
})


volver1.addEventListener('click', () =>{
  cifrarScreen2.style.display='none';
  options.style.display='block';
  
})

volver2.addEventListener('click', () =>{
  descifrarScreen2.style.display='none';
  options.style.display='block';
  
})


