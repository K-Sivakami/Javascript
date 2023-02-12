function checkNumber(){
    var a,b,c,d;
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
    c=parseInt(document.getElementById("num3").value);
    d=parseInt(document.getElementById("num4").value);
  /*  if((a>b)&&(a>c)){ 
        document.write("Largest Number is:"+a);
    }
    else if((a<b)&&(c<b)){
        document.write("Largest number is:"+b);
    }
    else if((a<c)&&(b<c)){
        document.write("Largest number is:"+c);
    }*/
    checkNumber=(a>b&&a>c&&a>d)?a:(b>a&&b>c&&b>d)?b:(c>a&&c>b&&c>d)?c:d;
     document.getElementById("result").innerHTML=checkNumber+"is the largest number";
     }