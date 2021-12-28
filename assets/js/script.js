// Desafio Multiplicaciones

// Solicitud de número
var num_mult = prompt("Bienvenido al desafío de las multiplicaciones, ingresa un número entre 1 y 20 para conocer su tabla completa y los factoriales");


let multiplicar = (mult) => {
    //Confirmación de número entre 1 y 20
    if (mult > 20) {
        console.log("estamos aqui");
        alert("El número ingresado es mayor a 20, debes ingresar un número entre 1 y 20");
    } else if(mult < 1) {
        alert("El número ingresado es menor a 1, debes ingresar un número entre 1 y 20");
    } else { 
        
        
        for (let i = 1 ; i <= mult ; i++){
            var b = mult*i;
            console.log(i + " * " + mult + " = "+ b);
        }
    
    }
    //formula para factorial
    /* 
    if (mult > 1){
        return mult * multiplicar(mult-1) 
    } else {
        return mult;
    }*/
} 

multiplicar(num_mult);

