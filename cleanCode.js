/////q1
var condition=0;
function doOnlyWhen(toDoHandler,toCheckHandler,interval=1000,times=20,failHandler)
{
    if(times==0)
    {
        return failHandler();
    }
    if(toCheckHandler())
    {
        return toDoHandler();
    }
    setTimeout(doOnlyWhen, interval,toDoHandler,toCheckHandler,interval,times-1,failHandler);
}
    function toCheckHandler()
    {
        condition++;
        if(condition==13)
        {
            return true;
        }
        return false;
    }
    function toDoHandler()
    {
        console.log("Condiotion is met");
    }
    function failHandler()
    {
        console.log("Condiotion doesn't met");

    }
////q2
function isVisible(elementToCheck)
{
    var x=elementToCheck instanceof Element
    if (x==false)
    {
        return false;
    }
    if (window.getComputedStyle(elementToCheck).display === "none"||window.getComputedStyle(elementToCheck).visibility === "hidden")
    {
        return true;
    }
    return false;
}
////q3
function createStyle(selector,rule)
{
    var style=document.createElement('style')
    style.innerHTML=selector+"{"+rule+";}"
    document.head.appendChild(style);
}
////q4
function unmask(selector1,selector2)
{
    const input1 = document.querySelector(selector1);
    const input2 = document.querySelector(selector2);
    input1.addEventListener('input', updateValue);
    function updateValue(e)
     {
        input2.value = e.target.value;
     }
}
