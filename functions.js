function table(number)
{
    for (var i = 1; i <= 10; i++)
    {
        console.log(i * number);
    }
}

table(2);

function max(num1, num2)
{
    if (num1 > num2)
    {
        console.log(num1);
    }
    else
        console.log(num2);
}

max(2,4);

function max(num1, num2, num3)
{
    if (num1 > num2 && num1 > num3)
    {
        console.log(num1);
    }
    else if (num2 > num1 && num2 > num3)
    {
        console.log(num2);
    }
    else
    console.log(num3);
}

max(2,6,3);

function is_vowel(letter)
{
    var vowel = ["a", "e", "i", "o", "u"];
    if (vowel.indexOf(letter) === -1)
        console.log(letter + " is not a vowel");
    else
        console.log(letter + " is a vowel");
}

is_vowel("a");
is_vowel("c");

function addProperty(obj, house1, house2) { //adding stuff to an empty array called myObj
  obj[house1] = true;                       //delete obj[house1]; will delete an element from the myObj array
  obj[house2] = true;
}

var myObj = {};
addProperty(myObj, 'myProperty1', 'myProperty2');
console.log(myObj);

