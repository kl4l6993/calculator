function displayData(n)
{
    a1.value+=n;
    if(n=="AC")
    {
        a1.value="";
    }
}
function evaluvate()
{
    a1.value= eval(a1.value); 
}

// slice(starting index, ending index)
// s="Hello";
// s.slice(0,-1);
// console.log(s);

function bspace()
{
    a1.value=a1.value.slice(0,-1);
}