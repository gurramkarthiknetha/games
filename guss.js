let gameresult=document.getElementById("gameresult");
let userinput=document.getElementById("inputuser")
let randomnumber=Math.ceil(Math.random()*100) ;
console.log(randomnumber);

function game(){
    let gussedno=parseInt(inputuser.value);
    if (randomnumber===gussedno){
        gameresult.textContent="congrat's  Your are correct";
        gameresult.style.color="greenyellow";
    }
    else if(gussedno>randomnumber){
        gameresult.textContent=" you Entered number is too High please Try again!!";
        gameresult.style.color="red";
    }
    else if(gussedno<randomnumber){
        gameresult.textContent="You entred number is too low please try again!!";
        gameresult.style.color="red";
    }
    else{
        gameresult.textContent="Invalid option"
        gameresult.style.color="red";
    }
}
