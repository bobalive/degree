
do {
    var a = +prompt('введите число')
} while (isNaN(a) ||  a == 0 );

var b = +prompt( 'введите степень');

let ans = 1

if (b == 0 || isNaN(b)){
    ans = a * a
}else{
     for( let i = 1; i <= b ; i++){
        ans = ans * a
}
}




  
alert(ans)