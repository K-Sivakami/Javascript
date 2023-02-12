function checkNumber(){
    var n;
    n=parseInt(document.getElementById("num").value);
    if(n%2==0){ 
        document.write("Even number");
    }
    else{
        document.write("Given number odd");
    }

}