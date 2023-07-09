let randomNum = 0;
let userNum = 0;
let chance = 5;
let history = [];

let userData = document.getElementById("user-number");
let gameButton = document.getElementById("goButton");
let resultImage = document.getElementsByClassName("main-img");
let resultText = document.getElementsByClassName("result-text");
let userChanceText = document.getElementById("userChance");
let resetButton = document.getElementById("reset=button");


//function
//Make Random Number
function RandomNumGen(){
    randomNum= Math.floor(Math.random()*100+1);
    console.log(`정답은 ${randomNum}`);
}

//Play Button Click 
function ButtonClick(){
    userNum=userData.value;
    GamePlay();
}

//Game process
function GamePlay(){

    if (userNum<=0 || userNum>100){
        resultText.item(0).textContent="잘못입력하셨습니다.";
        return;
    }
    
    if (history.includes(userNum)){
        resultText.item(0).textContent="중복된 숫자입니다. 다시 입력하세요.";
        return;
    }


    if (randomNum<userNum && userNum<=100){
        resultText.item(0).textContent="DOWN!";
        resultImage.item(0).src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif"
    }else if (0 < userNum && userNum<randomNum){
        resultText.item(0).textContent="UP!";
        resultImage.item(0).src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif"
    }else if (userNum==randomNum){
        gameButton.disabled=true;
        resultText.item(0).textContent="정답!";
        resultImage.item(0).src = "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif"
        
    }
    history.push(userNum);
    chance--;
    userChanceText.textContent=`남은 기회 : ${chance}`
 
    if(chance==0){
        gameButton.disabled=true;
    }
}

function ResetGame(){
    RandomNumGen();
    resultImage.item(0).src = "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif"
    chance = 5;
    resultText.item(0).textContent="죽기 싫다면 맞춰라";
    history.splice(0);
    gameButton.disabled=false;
    userChanceText.textContent=`남은 기회 : ${chance}`;
    userData.value="";

}




//action function 
RandomNumGen();

gameButton.addEventListener("click",ButtonClick);

resetButton.addEventListener("click",ResetGame);

userData.addEventListener("focus",function(){userData.value="";});