console.log("Javasript connected!");

//____________________________Q-01_______________________________

// var userFirstname =prompt("enter your first name");

// var userSeconname =prompt("enter last name");

// var fullName = userFirstname + userSeconname;
// alert("Greeting " + fullName);

//_____________________________Q-02____________________________

// var userInput = prompt("Enter your favorite phone name");

// document.write("This is my favorite phone "+ userInput +"<br />"+ "Lenght of String: "+userInput.length);

//_______________________________Q-03____________________________

// var country = "pakistani";

// console.log(country.indexOf("n"));

// document.write("String: Pakistani" +"<br />" +"Index of 'n': 7");

//______________________________Q-04_________________________________

// var greeting = "Hello World";

// console.log(greeting.lastIndexOf("l"));

// document.write("String: Hello World"+ "<br />" + "Last indexof 'L':9");

//_____________________________Q-05________________________________

// var country = "Pakistani";

// var character = country.charAt(3);

// document.write("String: " + country + "<br />");

// document.write("character of index 3: " + character);

//_________________________________Q-06________________________________

// var cityName = "Hyderabad";

// var  newCity = cityName.replace("Hyder" , "Islam");

// document.write("City: " + cityName + "<br />");
// document.write("After replacement: " + newCity);

//________________________________Q-08________________________________

// var msg = `Ali and Sami are best friends. They play cricket and  football together.`;

// var sentece = msg.replaceAll("and" , "&");
// document.write(sentece);

//_________________________________Q-09_______________________________

// var num = "472";

// var num2 = parseInt(num);

// var numstr = typeof num;

// var numtype = typeof num2
// document.write("Value: " + num + "<br>");
// document.write("Type: " + numstr + "<br />");

// document.write("Type: " + num2  + "<br />");
// document.write("Type: " + numtype);

//__________________________________ Q-10_________________________________

// var userInput = prompt("Type the name of fruit");


// document.write("User input: " + userInput + "<br />");
// document.write( "Upper case:" +  userInput.toLocaleUpperCase());

//___________________________________Q-11___________________________________

// var userInput = prompt("Type any thing here");

// var result = "";

// var isStart = true;

// for(var i = 0; i < userInput.length; i ++){

//     var char = userInput[i];

//     if(isStart){

//         result += char.toUpperCase();
//         isStart = false;


//     }else{
//         result += char.toLowerCase();


//     }
//     if (char === " "){
//         isStart = true;

//     }
// }

// document.write("Userinput: " + userInput + "<");
// document.write("Title case: " + result);

//______________________________Q-12___________________________

// var num = 35.36;

// var numstr = num.toString();

// var newstring = numstr.split('.').join('');

// document.write("Number: " + num + "<br />");
// document.write("Result: " + newstring);

//______________________________Q-13____________________________

// var userInput = prompt("Enter your name");

// // var name = userInput;

// if(userInput === " !" || userInput === "," || userInput === "." || userInput === "@" ){
//     console.log("Please enter a valid username ");
    
// }else{

//     console.log("Successfull");
    
// }


//___________________________________Q-14________________________________

// var customer =prompt("what do you want").toLowerCase();


// var bakery = ["cake", "apple pie","cookie","chips","petties"]

// var found = false;
// for(var i = 0; i< customer.length; i++){

//     if(customer === bakery[i]){
//         var found = true;

//         console.log(bakery[i] + " is avaliable in the index of ");
//         break;
        
//     }
    
// }    if(!found){
//     console.log("we are sorry." + customer + " is not avaliable in our bakery.");
    
// }

//____________________________________Q-15__________________________

// var university = "University of Karachi";

// var newarry = "University of Karachi".split("")

// console.log(newarry);

//_____________________________Q-16________________________

// var user = prompt("enter any here");

// document.write("user input: " + user +"<br />");
// document.write("Last character of the input: " + user.charAt());


