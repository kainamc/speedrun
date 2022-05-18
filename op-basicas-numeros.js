function ePar(n){
    if (n % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function eParT(n){
return (n % 2 == 0)? true : false;
}

function temRestoZero(a,b){
    return (a % b == 0)? true : false;
}

    
function ePrimo(n){
    let nrDivPerf = 0;
    let denominador = n;

    while (denominador > 0 ){
        if (temRestoZero(n,denominador)){
            nrDivPerf++;
        }
        denominador--;
    }
    if (nrDivPerf == 2){
        return true;
    }else{
        return false;
    }
}

