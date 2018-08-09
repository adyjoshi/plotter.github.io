function calculate()
{              
    var paperCost;
    if(document.getElementById("matte").checked){
        paperCost = 5.26;
    }

    else if(document.getElementById("glossy").checked){
        paperCost = 7.44;
    }                  

    if(document.getElementById("length").value < 100){
        var length= document.getElementById("length").value;
        var total = 16.30 + length * paperCost;
        document.getElementById("total").innerHTML = total;
    }             
}

