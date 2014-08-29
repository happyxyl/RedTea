var x=1;
function snow(){
    console.log(x);
    var x = "hello";
    console.log(x);
}

snow();

// output:
// undefined
// hello

// it is same as below code
function snow(){
	var x;
    console.log( x );
    var x = "hello";
    console.log(x);
}
