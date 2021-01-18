// //  Element Modification of HTML using Javascript
// document.getElementById('ConfirmButton').onclick = function(){
//     document.getElementById('StatusMsg').innerHTML = "Order Placed. Check email for confirmation";
//     document.getElementById('ConfirmButton').style.display = "None";
// }

// //  Alert and Console Logs
// var username = prompt();
// console.log(username);

// // Declaration and Initialization
// var age;
// age = 50;
// var newAge = age;
// console.log(newAge);
// age = 60;
// console.log(age);

// // function global, let, const, var
// (function(){
//     var age = 5;
// })();
// {
//     let x = 10;
//     const y = 20;
//     var z = 30;     // accessible in global env
// }

// // data types
// {
//     let x = 6; // integer
//     let y = '7'; // string
//     console.log(x+y);
// }
// let person = {
//     name: "Fatih",
//     nim: 12216009,
//     asal: "jogja",
//     printAsal: function(){
//         console.log("hello");
//     }
// }
// person.printAsal();
// let now = new Date();
// let grades = [1,2,3,4,5];

// {
//     let x = 6;
//     x = 4;
//     console.log(Number.isSafeInteger(x))
//     // consistent result ranges
// }

// // Number Data Type
// {
//     let x = 7;
//     console.log(typeof(x))
//     x = 7.5;
//     console.log(typeof(x))
// }

// // Arithmatic Operators
// {
//     var x= 10;
//     // +
//     console.log(x+2);
//     // -
//     console.log(x-2);
//     // /
//     console.log(x/2);
//     // *
//     console.log(x*2);
//     // %
//     console.log(x%3);
// }
// {
//     var ax = 10;
//     ax = ax + 1;
//     console.log(ax);
//     ax+=20;
//     console.log(ax);
// }
// {
//     var x = 10;
//     var y = "20";
//     console.log(x+parseInt(y));
// }

// // Decimal, Binary, Octal, Hexadecimal
// {
//     var x = prompt("Number: "); // prompt only returns a string
//     console.log("Decimal        : ", x);
//     console.log("Binary         : ", Number.parseInt(x, 2));
//     console.log("Octal          : ", Number.parseInt(x, 8));
//     console.log("Hexadecimal    : ", Number.parseInt(x, 16));
// }
// {
//     let x = 5.87778;
//     console.log(Math.round(x));
//     console.log("$"+x.toFixed(2));
//     console.log(x.toPrecision(3));
//     let y = 25688;
//     console.log(y.toLocaleString());
// }

// // String Operations
// {
//     let myName = new String("Fatih");
//     let yourName = "Helmi";
//     console.log(myName[2]);
//     console.log("Your Name: "+myName);
//     console.log(`Your name: ${yourName}`);
// }
// {
//     let content = "Hello My Name is Fatih";
//     let search1 = "Name";
//     let search2 = "do";
//     console.log(content.includes(search1));
//     console.log(content.indexOf(search1));
//     console.log(content.includes(search2));
//     console.log(content.indexOf(search2));
//     console.log(content.substring(5, 10));
//     console.log(content.substr(5, 10));
//     console.log(content.split(" "));
// }
// {
//     let position = {
//         x: 10,
//         y: 20,
//         print: function(){
//             console.log(`X: ${this.x}, Y: ${this.y}`);
//         }
//     }
    
//     let myPosition = JSON.parse(JSON.stringify(position));
//     myPosition.x = 20;
//     console.log(myPosition);
//     console.log(position);
// }


// // If Else Conditions
// {
//     var pw = Number.parseInt(prompt("Passcode:"));
//     var name = prompt("Name:");
//     if (pw == 542 && name == "Fatih"){
//         console.log("Hello");
//     } else if (pw == 562){
//         console.log("Hello 2")
//     } else {
//         console.log("Nope");
//     }
// }
// {
//     var name = prompt("Name:");
//     switch(name){
//         case "Fatih":
//             console.log("Hello");
//             break;
//         case "Helmi":
//             console.log("What");
//             break;
//         default:
//             console.log("Welcome");
//             break;
//     }
// }

// Loops/Iteration
// {
//     let i = 0;
//     while (i<10){
//         console.log(i);
//         i++;
//     }
// }

// {
//     let i = 0;
//     do{
//         console.log(i);
//         i++;
//     }while(i<10);
// }
// for (i=0; i<10; i++){
//     console.log(i);
// }

// // Break & Continue
// {
//     let sentence = "Hello My Name is Fatih";
//     i = -1;
//     while (i<sentence.length){
//         i++;
//         if (sentence[i]=="i"){
//             console.log(i);
//         } else {
//             continue;
//         }
//     }
// }

// {
//     let grades = [1,2,3,4,5];
//     let arr = [1, "d", 0.22, function(){console.log("Hello")}];
//     console.log(grades);
//     arr[3]();
//     let arr2 = [];
//     for (i=0; i<10; i++){
//         arr2[i] = i+20;
//     }
//     console.log(arr2);
// }

// {
//     var list = [];
//     stop = false;
//     while (stop == false){
//         var inp = prompt("Enter number: ");
//         if (inp != -9999){
//             list.push(Number(inp));
//             console.log(list);
//         } else {
//             stop = true;
//         }
//     }
// }

// {
//     var a2d = [
//         [1,2,3,4],
//         [2,3,4,5],
//         [2,2,2,3]
//     ];

//     for (i= 0; i<a2d.length; i++){
//         for (j=0; j<a2d[i].length; j++){
//             console.log(a2d[i][j]);
//         }
//     }

// }


// // Function
// {
//     function add5(x){
//         return x+5;
//     }
//     function write(txt, n){
//         for (i=0; i<n; i++){
//             console.log(txt);
//         }
//         return;
//     }
//     console.log(add5(2));
//     write("Hello", 3);
// }

{
    function kuadrat(x, y){
        console.log(x*y);
        console.log(this);
    }

    kuadrat(2, 3);
    kuadrat.call("Hello", 2, 3);
    kuadrat.apply("Hello", [2,3]);
}