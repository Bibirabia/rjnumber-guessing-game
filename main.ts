import inquirer from "inquirer"

// 1)computer gerate a number
//2)user input gassing number
//3) compare user input with computer generated number and show result

const rendomNumber =10;

const answer = await inquirer.prompt([
    {       
        name: "userGuessNumber", 
        type: "number",
        message: "please guess a number:",
  }
]);
if(answer.userGuessNumber === rendomNumber) {
    console.log("congratulations you guess correct number ");
}else {
    console.log("so sad you guess wrong number ,try again");
}

const randomNumber = Math.floor(Math.random() *  10 );
console.log(randomNumber);