let edadUsuario = parseInt(prompt("Ingrese su Edad"));
if (edadUsuario >= "18") { 
    alert ("Eres mayor de 18. Bienvenido!")
    console.log ("es mayor de edad, puede entrar")
}
else if (edadUsuario < "18") {
    alert ("Lo sentimos, eres demasiado joven para este sitio.")
console.log ("No ingresa por ser menor de edad")}
/*
for (let i = 1; i <= 10; i++) {
    let resultado = edadUsuario + i ;
    alert(edadUsuario +" X "+ i +" = "+ resultado);}

   
    while(edadUsuario <= "18" ){
        alert("El usuario ingresó "+ edadUsuario);
    
        edadUsuario = prompt("Ingresar otro dato");
        console.log ("La edad ingresada es menor a 18")
    }
*/
    let nombreUsuario = (prompt("Ingrese su nombre"));
    function verNombreUsuario () {
        console.log ("Bienvenid@", nombreUsuario)
        alert ("Bienvenid@" , nombreUsuario)
    }
    
    let calcularEdadUsuario = (prompt("Ingrese su año de nacimiento, ejemplo ´1995´"))
        function calcularEdad () {
          let anioActual = prompt ("Ingrese el año actual")
          let anioNacimiento = prompt ("Ingrese su año de nacimiento")
          let operador = prompt ("Seleccione resta: '-'")
          console.log ("Resultado",  realizarCalculo (anioActual , anioNacimiento , operador))
          
    }
    
    function realizarCalculo (num1, num2, ope) {
        switch (ope) {
            case "-":
                return num2 - num1
            default:
                return "Error en el calculo"
       }
    }
   
    