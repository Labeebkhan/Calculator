import inquirer from "inquirer";
import chalk from "chalk";
// let callculator_items:QuestionCollection = [{
//     name : "num1", // This the Question on the prompt screen also with this we have to access in .then operation
//     type : "number",
//     message: chalk.greenBright("First Number = "),
// },
// {
//     name : "num2",// This the Question on the prompt screen also with this we have to access in .then operation
//     type : "number",
//     message : chalk.bgRedBright("Your Second = "),
// },
// {
//     name : "operation",
//     type: "list",
//     message:  chalk.yellowBright("Choosed operation = "),
//     choices : ["+","-","*","/"]
// }]
//  var answeer : Promise<Answers> = inquirer.prompt(callculator_items);
//  answeer.then((answeer:Answers)=>{
//     switch (answeer.operation){
//         case "+":
//             console.log(chalk.bgBlueBright("The result of Addition ",answeer.num1 + answeer.num2));
//             break;
//         case "-":
//             console.log(chalk.bgRedBright("The result of  Subtraction is ",answeer.num1-answeer.num2));
//             break;
//         case "*":
//             console.log( chalk.bgGreenBright("The result of Multiplication is ", answeer.num1*answeer.num2));
//             break;
//         case "/":
//             console.log(chalk.bgCyanBright("The result of Divison is ", answeer.num1/answeer.num2));
//             break;
//             default:
//                 console.log("Wrong Operation");
//     } 
//  })
//  .catch((err)=>{
//     console.log(`There is Something Error in the Code ${err}`);
//  })
//Another Work for me to rethink my collective work
const select = [{
        name: 'Order',
        type: 'i',
        message: "Please Enter Your Order = "
    },
    {
        name: "Size",
        type: 'list',
        choices: ['Small', 'Medium', 'Large', 'Jumbo'],
        message: `You've Order Pizza of Size = `
    },
    {
        name: 'Drinks',
        type: 'list',
        choices: ['Pepsi', 'Fanta', 'Coca Cola', 'Mountain Dew'],
        message: 'Drinks? = '
    }
];
var answeer = inquirer.prompt(select);
answeer.then((answeer) => {
    console.log("You Have Selected ", answeer);
    console.log(chalk.greenBright, "Youre Order Is Successfully Placed");
})
    .catch((err) => {
    console.log(`There is Something Error in the Code ${err}`);
});
