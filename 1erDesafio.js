let edadUsuario = parseInt(prompt("Ingrese su Edad"));
if (edadUsuario >= "18") { 
    alert ("Eres mayor de 18. Bienvenido!")
    console.log ("es mayor de edad, puede entrar")
}
else if (edadUsuario < "18") {
    alert ("Lo sentimos, eres demasiado joven para este sitio.")
console.log ("No ingresa por ser menor de edad")}
//debugger
for (let i = 1; i <= 10; i++) {
    let resultado = edadUsuario + i ;
    alert(edadUsuario +" X "+ i +" = "+ resultado);}

   
    while(edadUsuario <= "18" ){
        alert("El usuario ingresó "+ edadUsuario);
    
        edadUsuario = prompt("Ingresar otro dato");
        console.log ("La edad ingresada es menor a 18")
    }
    