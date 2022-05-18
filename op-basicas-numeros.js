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



let n = eParT(5);
console.log (n);