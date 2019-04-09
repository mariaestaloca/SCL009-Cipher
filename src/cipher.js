
window.cipher = {
 encode:(input, offset) => {
  let output = '';
  let clave = '';
  for (let i = 0; i < input.length; i++) { // itera por cada caracter del string.
    let code = input.charCodeAt(i); // lo pasa a codigo ascii
    if (code >= 65 && code <= 90) { // mayusculas
       clave = String.fromCharCode((code - 65 + parseInt (offset)) % 26 + 65);  
    }
    // minusculas
    else if(code >= 97 &&  code<= 122){
      clave = String.fromCharCode((code - 97 + parseInt (offset)) % 26 + 97);
}

else if(code >= 48 &&  code<= 57){
  clave = String.fromCharCode((code - 48 + parseInt (offset)) % 10 + 48);
}

else if(code ==209){
  clave = String.fromCharCode(code= 210);
}
else if(code ==241){
  clave = String.fromCharCode(code= 243);
}

else {
  clave = input.charAt(i);
}
  output += clave;
  }

return output;

 },

decode:(input, offset2) => {
   
    let output2 = '';
    let claveDes ='';
    for (let i = 0; i < input.length; i++) { // itera por cada caracter del string.
      let code = input.charCodeAt(i); // lo pasa a codigo ascii
      if (code >= 65 && code <= 90) { // mayusculas
         claveDes = String.fromCharCode(((code - 65 - parseInt (offset2)+ 52) % 26) + 65);
         
      }
      // minusculas
      else if(code >= 97 &&  code<= 122){
        claveDes = String.fromCharCode(((code - 97 - parseInt (offset2)+ 52) % 26) + 97);
}

else if(code >= 48 &&  code<= 57){
  claveDes = String.fromCharCode(((code - 48 - parseInt (offset2)+ 52) % 10) + 48);
}

else if(code ==210){
  claveDes = String.fromCharCode(code= 209);
}
else if(code ==243){
  claveDes = String.fromCharCode(code= 241);
}



else {
    claveDes= input.charAt(i);
}
  output2 += claveDes;
    }
    return output2;
    
  }
}
