// function chackUserNumber() {
//     let userNumber = document.getElementById("userNumber")
//     switch (+userNumber.value) {
//         case 3:
//             console.log("Hello");
//             break;
//         case 5:
//             console.log("Good Bye");
//             break;
//         case 7:
//             console.log("Thanks");
//             break;

//         default:
//             console.log("No Massge");
//             break;
//     }
// }

// function chackUserName() {
//     let userName = document.getElementById("userName")
//     let h1_line = document.createElement("h1")
//     document.body.append(h1_line)
//     switch (userName.value) {
//         case "jacob":
//             h1_line.innerText ="jacob";
//             break;
//         case "nathan":
//             h1_line.innerText ="NATHAN";
//             break;
//         case "DALYA":
//             h1_line.innerText ="dalya";
//             break;

//         default:
//             h1_line.innerText ="No Massage";
//             break;
//     }
// }

// function printUserNumbersResule() {
//     let userNumber1 = document.getElementById("userNumber1")
//     let userNumber2 = document.getElementById("userNumber2")
//     let userOperator = document.getElementById("userOperator")
//     let h1_line =document.getElementById("h1_line")
//     switch (userOperator.value) {
//         case "*":
//             h1_line.innerHTML = +userNumber1.value * +userNumber2.value
//             break;
//         case "/":
//             h1_line.innerHTML = +userNumber1.value / +userNumber2.value
//             break;
//         case "-":
//             h1_line.innerHTML = +userNumber1.value - +userNumber2.value
//             break;
//         case "+":
//             h1_line.innerHTML = +userNumber1.value + +userNumber2.value
//             break;
//         default:
//             break;
//     }    
// }

// function choosecColor(params) {

//     switch (corner.value) {
//         case "top-left":
//             colorcircle.style="border-radius:50%; height:100px; width:100px; top:0px; left:0px; background-color:"+inputColor.value
//             break;        
//         case "top-right":
//             colorcircle.style=
//             "float:right; border-radius:50%; height:100px; width:100px; top:0px; left:0px; background-color:"+inputColor.value

//             break;        
//         case "bottom-left":
//             colorcircle.style=
//             "float:right; border-radius:50%; height:100px; width:100px; top:0px; left:0px; background-color:"+inputColor.value

//             break;        
//         case "bottom-right":
//             colorcircle.style=
//             "top:100vh; height:100px; width:100px; top:0px; left:0px; background-color:"+inputColor.value

//             break;

//         default:
//             break;
//     }

// }

// function printTextUser() {
//    let userText = document.getElementById("userText") 
//    let userColor = document.getElementById("userColor") 
//    let userPxSize = document.getElementById("userPxSize")
//    let h1_line = document.getElementById("h1_line")
//    switch (userPxSize.value) {
//     case userPxSize.value:
//         h1_line.innerText=userText.value
//         h1_line.style="color:"+userColor.value+";"+"font-Size:"+userPxSize.value+"px;"
//         break;
//     default:
//         break;
//    }
// }

// function printUserNumbersResule() {

//     let NumbersUser =document.getElementById("Numbers")
//     switch (userOperator.value) {
//         case "*":
//             sum.innerHTML = NumbersUser * NumbersUser
//             break;
//         case "/":
//             sum.innerHTML = NumbersUser * NumbersUser
//             break;
//         case "-":
//             sum.innerHTML = NumbersUser * NumbersUser
//             break;
//         case "+":
//             sum.innerHTML = NumbersUser * NumbersUser
//             break;
//         default:
//             break;
//     }    
// }







let arrayNumber1 = "";
let display = ""
let operator = [];
let num1 = 1;
let AllNumbers = [];
console.log();
function saveValueNumber(num) {
    let result = 0 ;
    switch (num.value * 0) {
        case 0:
            arrayNumber1 += num.value
            display += num.value
            current.innerHTML = display
            break;
    }
    switch (num.value) {
        case "+":
            if (arrayNumber1[arrayNumber1.length - 1] * 0 == 0) {
                arrayNumber1 += num.value
            }
            display += num.value
            current.innerHTML = display
            break;
        case "-":
            if (arrayNumber1[arrayNumber1.length - 1] * 0 == 0) {
                arrayNumber1 += num.value
            }
            display += num.value
            current.innerHTML = display
            break;
        case "*":
            if (arrayNumber1[arrayNumber1.length - 1] * 0 == 0) {
                arrayNumber1 += num.value
            }
            display += num.value
            current.innerHTML = display
            break;
        case "/":
            if (arrayNumber1[arrayNumber1.length - 1] * 0 == 0) {
                arrayNumber1 += num.value
            }
            display += num.value
            current.innerHTML = display
            break;
    }
    switch (arrayNumber1[arrayNumber1.length - 1]) {
        case "+":
                AllNumbers.push(arrayNumber1.substring(0, arrayNumber1.length-1))
                result += parseInt(AllNumbers[counter++])
                // AllNumbers =[]
                previous.innerText = result
                console.log(result);
                arrayNumber1 = ""
            break;
        case "-":
            if (arrayNumber1[arrayNumber1.length - 1] * 0 != 0) {
                AllNumbers.push(arrayNumber1.substring(0, arrayNumber1.length - 1))
                operator.push(arrayNumber1[arrayNumber1.length - 1])
                arrayNumber1 = ""
            }
            break;
        case "*":
            if (arrayNumber1[arrayNumber1.length - 1] * 0 != 0) {
                AllNumbers.push(arrayNumber1.substring(0, arrayNumber1.length - 1))
                operator.push(arrayNumber1[arrayNumber1.length - 1])
                arrayNumber1 = ""
            }
            break;
        case "/":
            if (arrayNumber1[arrayNumber1.length - 1] * 0 != 0) {
                AllNumbers.push(arrayNumber1.substring(0, arrayNumber1.length - 1))
                operator.push(arrayNumber1[arrayNumber1.length - 1])
                arrayNumber1 = ""
            }
            break;
    }
    console.log(AllNumbers);
    console.log(operator);
    console.log(arrayNumber1);
    console.log(display);
    // console.log(operator);




}


let num2 = ""
function summm() {
}

function resetAC(ac) {
    switch (ac.value) {
        case "AC":
            current.innerHTML = ""
            arrayNumber1 = ""
            break;
        default:
            break;
    }
}


