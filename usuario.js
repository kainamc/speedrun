function gerarUsuarios(){
    let usuarios = [
        {
        nome: "Kaina Devi",
        nascimento: "23/06/1992"
        }
        ,
        {
        nome: "Leonardo",
        nascimento: "18/05/1991"
        }
        ,
        {
        nome: "Adair",
        nascimento: "02/02/1990"
        }
    ]

    return usuarios;
}

function verificaUserAniver(users){
    let dataAtual = new Date();
    let dd = String(dataAtual.getDate()).padStart(2, '0');
    let mm = String(dataAtual.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = dataAtual.getFullYear();

    //metodo mais dificil, concatenando com +
    // dataAtual = dd + '/' + mm + '/' + yyyy;
    dataAtual = `${dd}/${mm}`;// utilizando template string

    let usuariosAniver = [];

    for(let usuario of usuarios){
        //quebramos a string toda vez que encontramos uma /
        let valUsuarioAtual = usuario.nascimento.split("/");
        let diaMes = `${valUsuarioAtual[0]/valUsuarioAtual[1]}`;

        console.log(valUsuarioAtual);
        console.log("valUsuarioAtual");
        console.log(diaMes);
        console.log("diaMes");
        
        if(valUsuarioAtual == dataAtual){
            usuariosAniver.push(usuario);
        }
    }

    return (usuariosAniver.length == 0)? false : usuariosAniver;
}

let usuarios = gerarUsuarios();
let usuariosAniverHoje = verificaUserAniver(usuarios);
console.log(usuariosAniverHoje);
