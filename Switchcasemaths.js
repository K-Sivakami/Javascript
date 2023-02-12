function Mathematics(){
    var a,b,c,d;
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
    /*c=parseInt(document.getElementById("num3").value);*/
    
     switch(d)
     {
     case 1:
        c=a+b;
        document.getElementById("result").innerHTML="Addition of "+a+" and "+b+" is "+c;
        break;
     
     case 2:
           c=a-b;
           document.getElementById("result").innerHTML="Subtraction of "+a+" and "+b+" is "+c;
           break;
     case 3:
           c=a*b;
           document.getElementById("result").innerHTML="Multiplication of "+a+" and "+b+" is "+c;
           break;
     case 4:
           c=a/b;
           document.getElementById("result").innerHTML="Division of "+a+" and "+b+" is "+c;
           break;
                }

}