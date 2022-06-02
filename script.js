var turtle = parseInt(prompt("sua tartaruga deve ganhar de garry na corrida\nse a tartaruga ganhar a corrida e a tartaruga chegar em menos de 2m(120s) você venci.\nDigite a vel que você quer que a tartaga corra em m/s"));

var garry = 10;
if (turtle > garry && turtle < 30){
    alert("Você venceu");
}else if (turtle > 30){
    alert("a tartaruga não chegou no destino.");
}else{
    alert("Garry venceu tente outra vez");
}