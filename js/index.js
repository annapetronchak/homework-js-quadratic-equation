var a = prompt("Enter value of a","");
var b = prompt("Enter value of b","");
var c = prompt("Enter value of c","");

var dis, root1, root2, err;

function calculate(a,b,c) {    
    dis=b*b-4*a*c;
    if(dis > 0){
                
        root1=(-b+Math.sqrt(dis))/(2*a);
        root2=(-b-Math.sqrt(dis))/(2*a);   
    } else if(dis === 0) {
        root1 = (-b)/(2*a);
    } else {
        err = 'Equation has no real roots';
    }
}

calculate(a,b,c);

if(err) {
    document.write(err);
}
if(root1) {
    document.write("1st root: "+root1+"</br>");
}
if(root2) {
    document.write("2nd root: "+root2+"</br>");    
}
