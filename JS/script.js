


let nacionalidad = prompt("Es usted ciudadano Argentino? SI o NO");

if(nacionalidad == "NO"){
    console.log("Usted no puede votar");
}

while(nacionalidad == "SI"){
    
    console.log("Bienvenido a Elecciones 2023");

    let voto_cristina = 0;
    let voto_larreta = 0;
    let voto_milei = 0;
    let voto_castañeira = 0;
    let voto_nulo = 0;

    for(let i = 0; i < 10; i = i +1){

        let voto = prompt("Vote por Cristina, Larreta, Milei, Castañeira o Nulo");
        console.log("Tu voto es: ", voto);

        if(voto == "Cristina"){
            voto_cristina = voto_cristina + 1;
        }
        else if(voto == "Larreta"){
            voto_larreta = voto_larreta + 1;
        }
        else if(voto == "Milei"){
            voto_milei = voto_milei + 1;
        }
        else if(voto == "Castañeira"){
            voto_castañeira = voto_castañeira + 1;
        }
        else if(voto == "Nulo"){
            voto_nulo = voto_nulo + 1;
        }
    }

    console.log("El contador es el siguiente:")
    console.log("Cristina: ", voto_cristina,  "Larreta: ", voto_larreta, "Milei: ", voto_milei, "Castañeira: ", voto_castañeira, "Nulos: ", voto_nulo);

    if(voto_cristina > (voto_larreta || voto_castañeira || voto_milei || voto_castañeira || voto_nulo)){
        console.log("El presidente es: Cristina");
    }
    else if(voto_larreta > (voto_cristina || voto_milei || voto_castañeira || voto_nulo)){
        console.log("El presidente es: Larreta");
    }
    else if(voto_milei > (voto_cristina || voto_larreta || voto_castañeira || voto_nulo)){
        console.log("El presinte es: Milei");
    }
    else if(voto_castañeira > (voto_cristina || voto_larreta || voto_milei || voto_nulo)){
        console.log("El presidente es: Castañeira");
    }
    else if(voto_nulo > (voto_cristina || voto_larreta || voto_milei || voto_castañeira)){
        console.log("La votacion es nula, debe realizarse nuevamente")
    }

let nacionalidad = prompt("Es usted ciudadano Argentino? SI o NO");
if(nacionalidad == "NO"){
    break
    }
}

