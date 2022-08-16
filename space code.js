function Countdown()
{
    var i = 10;
    var timeout = 10000;
    var x = 10
    if (i == 5)
    {
        alert("halfway there")
    } 


   while(i>0)
   {
    //10
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;
   }
   /*setTimeout(() => { document.getElementById("counter").innerHTML = "blastoff";
   i = i - 1}, timeout);
   timeout = timeout - 1000;
    //9
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;

    //8
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;
        
    //7
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;

    //6
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;
    
    //5
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;

    //4
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;

    //3
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;

    //2
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;

    //1
    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;


    setTimeout(() => { document.getElementById("counter").innerHTML = i;
    i = i - 1;}, timeout);
    timeout = timeout - 1000;
    
    //tried down here aswell    
 if (i == 5)
    {
        alert("halfway there")
    } 
    */
}
function gamble()
{
    //This line gets the information from the input and makes it a int
    var i = document.getElementById("gimme").value;
    //This line gives a random number to guess
    var x = Math.floor(Math.random() * 10);
    //this if else statement compares the two numbers decides whether you win or lose
    if (i==x)
    {
        alert("YAY you got it right. Your Number was " + i + " The Correct Number was " + x);
    }
    else
    {
        alert("Oh NO you were wrong. Your Number was " + i + " The Correct Number was " + x);
    }
        
}