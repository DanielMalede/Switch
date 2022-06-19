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







let arrayNumber1 = ""
let arrayNumber2 = ""
let arrayAllNumbers = ""
let sumNumbers = "";
let summer = ""
console.log();
function saveValueNumber(num) {
    switch (num.value) {
        case "1":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "2":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "3":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "4":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "5":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "6":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "7":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "8":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "9":
            arrayNumber1 += num.value
            current.innerHTML = arrayNumber1
            break;
        case "+":
            arrayNumber2 = arrayNumber1
            if (arrayNumber2.length>0) {
                arrayAllNumbers = +arrayNumber1 + 
                previous.innerText = arrayAllNumbers   
                arrayNumber1 = ""             
            }
            break;
        case "-":
            arrayNumber2 += arrayNumber1
            current.innerHTML = ""
            arrayNumber1 = ""
            previous.innerText = arrayNumber2
            break;
        case "/":
            arrayNumber2 = parseInt(arrayNumber2) / parseInt(arrayNumber1)
            sumNumbers = arrayNumber2
            previous.innerText = sumNumbers
            current.innerHTML = ""
            arrayNumber1 = ""
            break;
        case "*":
            arrayNumber2 += arrayNumber1
            current.innerHTML = ""
            arrayNumber1 = ""
            previous.innerText = arrayNumber2
            break;
    }
    // console.log(arrayNumber2);
    // console.log(arrayNumber1);
    // console.log(sumNumbers);



}
console.log(arrayNumber1 + "arrayNumber1");
console.log(sumNumbers + "sumNumbers");
console.log(summer + "summer");
function resetAC() {
    arrayNumber1 = ""
    current.innerText = ""


}
