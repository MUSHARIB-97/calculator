function getValue(a){
    var result = document.getElementById("result");
    result.value += a;
}

function calc()
{
    var result = document.getElementById("result");
    result.value = eval(result.value);
    if (result.value == '++')
    {
        alert("enter correct value");
    }
}

function clearResult()
{
    var result = document.getElementById("result");
    result.value =  '' ;
}