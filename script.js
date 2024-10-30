//generar un numero secreto entre 1 y 100

const secretNumber = Math.floor(Math.random() * 100)+1;

let intentos = [];
let mensaje = document.getElementById("message");


function solicitarNumero (){
    let entrada = prompt("Ingresa un numero entre 1 y 100 :")
    let numero = parseInt(entrada);

    //verificar que la entrada es valida

    if (isNaN(numero) || numero < 1 || numero > 100){
        alert("Por favor, ingresa un numero valido entre 1 y 100");
        return solicitarNumero();
    }
    
    //añadir el numero a la lista de intentos
    intentos.push(numero);

    //verifica si la entrada es igual al numero secreto
    
    if( numero === secretNumber){
        mensaje.textContent= "Felicitaciones, adivinaste el numero secreto";
        console.log("Lista de intentos :", intentos)
    } else if (numero < secretNumber){
        mensaje.textContent = "El numero secreto es mayor que " + numero;
        setTimeout(solicitarNumero, 500); //da el tiempo necesario para que se alcance a actualizar el dom antes de que se ejecute el nuevo prompt
    } else {
        mensaje.textContent = "El numero secreto es menor que " + numero;
        setTimeout(solicitarNumero, 500);
    }


}
solicitarNumero()   
