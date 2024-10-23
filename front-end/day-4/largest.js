function largest(){
    var n1=window.prompt("Enter number 1");
    var n2=window.prompt("Enter number 2");
    var n3=window.prompt("Enter number 3");
    var res=document.getElementById("result");
    if(n1>n2 && n1>n3)
        res.textContent="The largest number is "+n1;
    else if(n2>n1 && n2>n3)
        res.textContent ="The largest number is "+n2;
    else
        res.textContent ="The largest number is "+n3;
}

function validate(){
    var no  = document.getElementById("no").value;

    if(no.length>10)
    {
        alert("Your number is valid");
        
    }
    else
        alert("Your number is not valid");

}