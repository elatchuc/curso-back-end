function complex(numero, minimo, maximo, inclusivo){

    if (numero > minimo && numero < maximo && inclusivo == true){
        return true
    }
    else if (numero < minimo && numero > maximo && inclusivo == false){
        return false
    }
    else {
        return false
    }
    
    }
    numero = 50
    minimo = 40
    maximo = 800
    
    complex(50,40,800)
    alert(` ${numero} `);
    alert(` ${inclusivo} `);

    