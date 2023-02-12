function Sum()
{
    var i, sum, inputnum;
    inputnum=parseInt(document.getElementById("num").value);
    sum=0;
    for(i=inputnum;i>=1;i--){
        sum=sum+i;
    }
    
    document.getElementById("result").innerHTML="Sum of  "+inputnum+" is "+sum;
    }