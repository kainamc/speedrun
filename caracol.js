// the snail Garry is at the bottom of a tower and needs to get out of it, help him!
// type three arguments of your choice:
// 1 - lenght of the tower
// 2 - how many meter garry can move before he takes a breath
// 3 - how many meters he slips while breathing



var args = process.argv.slice(2)

var tower = a = Number(args[0]);
var up = b  =  Number(args[1]);
var down = c =  Number(args[2]);
var d = (b-c);
var count = a;

console.log("Garry precisa escalar esta torre de " + a + "m\n" )
console.log(count);

while(count > 0){
count-=b;
console.log("Garry moveu-se " + b + "m\n");
// console.log("Ele está a " + parseInt(count-b) + "m do topo da torre.");
console.log("Garry esta a " + (count + "m") + " do topo.");

if(count <= 0){
    console.log("chegou");
}else{
    count += c;
    console.log("Garry escorregou " + c + "m\n" );
    // console.log("Ele está a " + (count+c) + "m do topo da torre.");
    console.log("Garry esta a " + count + " do topo.\n");
    }
}



// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log("fim")
