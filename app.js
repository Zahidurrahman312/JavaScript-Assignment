console.log("Jvavascript Conected!");

// ____________Q-01_____________________

// var student = [];

// student [0] ="Ali";
// console.log(student);

// _______Q-02________________________

// var stringArry = [ "Apple","orang","banana"]

// console.log(stringArry);

// _________________Q-03_________________

// var numberArry = [23,20 ,10, 40, 50];

// console.log(numberArry);

// ________________Q-04_________________

// var boleanArry = [ true,false,]

//     console.log(boleanArry);
    
// ________________Q-05________________

// var mixArry = [ "apple",24,10,true,]
// console.log(mixArry);

// __________________Q-06_______________

// var education = ["SSC","HSC","BSC","BS","BCOM","MS","M.PhiL","Ph.D"]

// document.write("1) "+ education[0]+  "<br />"+"2) " + education[1]+  "<br />" + "3) "+ education[2] + "<br />" + "4) "+ education[3]+ "<br />" + "5) " + education[4] + "<br />"+ "6) " + education[5] + "<br />" + "7) " + education[6] + "<br />" + "8) "  + education[7] );

// ________________Q-07________________

// var studentName = ["Ahmad","Ali","Bilal"];

// var obtainMarks = [320,220,480];

// var totalMarks = [500];

// for(var i =0; i < studentName.length; i++ ){
//     var percent =(obtainMarks[i] / totalMarks)*100;    

//     }
//     document.write("Score of "+ studentName[i]+ " is "  )
// 
// _______________________Q-08_____________________________

// var studentName = ["Michael","Jhon","Tony"];

// var score = [320,230,480];

// var totalMarks = [500]
// document.write("Score of Michael is "+ score[0]+ " Percentage: " + (320/500*100)+"%" +"<br />");
// document.write("Score of Jhon is "+ score[1] + " Percentage: " + (230/500*100)+"%" +"<br />");

// document.write("Score of Tony is "+ score[2]+ " Percentage: "+ (480/500*100)+"%" + "<br />" );

// _____________________Q-09__________________________

// var color = ["red","blue","orange","yellow"];

// // document.write(color[0]+ "<br />"+ color[1]+"<br />"+color[2]+"<br />"+color[3])

// var user = prompt("Enter your favorite color");

// color.unshift("brown");

// document.write(color[0]+ "<br />"+ color[1]+"<br />"+color[2]+"<br />"+color[3] + "<br />"+ color[4] )

// _____________part(b)_____________

// var color = ["red","blue","orange","yellow"];

// var user = prompt("Enter your favorite color");

// color.push("Green");

// document.write(color[0]+ "<br />"+ color[1]+"<br />"+color[2]+"<br />"+color[3] + "<br />"+ color[4] )

// ____________________part(c)__________________

// var color = ["red","blue","orange","yellow"];

// color.unshift("Green","light Blue");

// document.write(color[0]+ "<br />"+ color[1]+"<br />"+color[2]+"<br />"+color[3] + "<br />"+ color[4]+"<br />" +color[5] );

// ________________part(d)_________________________

// var color = ["red","blue","orange","yellow"];

// color.shift();

// document.write(color[0]+ "<br />"+ color[1]+"<br />"+color[2] );

// _____________________part(e)___________________________

// var color = ["red","blue","orange","yellow"];
 
// color.pop();
// document.write(color[0]+ "<br />"+ color[1]+"<br />"+color[2] );

// ___________-__________part(f)___________________________

// var color = ["red","blue","orange","yellow"];

// color.splice(2,0,"Green","brown");

// document.write(color[0]+ "<br />"+ color[1]+"<br />"+color[2]+"<br />"+color[3]+ "<br />" + color[4] );

// // syntax of splice ==> (deletecount,add index ,items)

// _________________________part(g)_____________________________

// var color = ["red","blue","orange","yellow"];

// color.splice(0,1,"pink","white");

// document.write(color[0]+ "<br />"+ color[1]+"<br />"+color[2]+"<br />"+color[3]+ "<br />" +color[4] );

// ______________________Q-10____________________________________

// var score = [320,230,480,120];

// score.sort();

// console.log(score);

// _______________________Q-11__________________________________

// var cities = ["karachi","lahore","peshawer","quetta","Islamabad"];

//     console.log(cities);
    
// var selectCities =cities.slice(0,2)

// console.log(selectCities);

// ________________________________Q-12__________________________________

// var arry = ["This","is ","is","my","cat"];

// console.log(arry);

// console.log("This " + " is " + " my "+" cat ");

// _____________________________Q-13_________________________________________

// var emptyArray = [];

// emptyArray[0]="keyboard";

// emptyArray[1]="mouse";

// emptyArray[2]="printer";

// emptyArray[3]="monitor";
// console.log(emptyArray);

// for(var i =emptyArray.length-1;i>=0;i--){
//     console.log(emptyArray[i]);
    
// }

// _____________________Q-14____________________________

// var sales = [];

// sales[0]= "keyboard";

// sales[1]= "mouse";

// sales[2]= "printer";

// sales[3]="monitor";
// console.log(sales);

// // we use for loop :

// for(var i = 0; i<sales.length; i++){

//     console.log(sales[i]);
    
// }

// ___________________Q-15___________________

// var manufacture =["apple","smsung","nokia","matrola","sony","haier"];

// document.write("<select>");

// for(var i = 0; i<manufacture.length; i++){

//     document.write(" <option>" + manufacture[i] + "</select>");
// }

// document.write("</select>");

// var user = prompt("Type any 65 to 122");



// _______________________Assignment-08_______________________________

// ___________________Q-01______________________

// var user = prompt("Enter the weather ");

// if(user >=65 && user < 90){
//     console.log("Uppercase letter ");
    
// }else if(user >=90 && user < 97){
//     console.log("Lower case letter");
    
// }else if (user >=97 && user < 122){
//     console.log("This is number");
    
// }else{
//     console.log("Please Try again");
    
// }

// _________________________________Q-02___________________________________

// var num1 = prompt("Type any number");

// var nmu2 = prompt("Type any number");

// if(num1 > nmu2){
//     console.log(num1);
    
// }else if(num1 < nmu2){
//     console.log(nmu2);
    
// }else if(num1 == nmu2){
//     console.log("This is equal");
    
// }

// ________________________________Q-03_____________________________________

// var user = prompt("Type the weather state");

// if(user > 0){

//     console.log("This is positive ");
    
// }else if(user < 0){

//     console.log("This is nagative");
    
// }else if(user == 0 ){

//     console.log("This is zero");
    
// }

// ________________________Q-04____________________________________________

// var userInput =prompt("Type a vowel alphabet");

// if(userInput === "a" || userInput=== "i" || userInput === "o" || userInput === "u" || userInput === "e" ){

//     console.log("True");
    
// }else{

//     console.log("false");
    
// }

// 

// _________________________Q-05________________________________

// var passwordInput =prompt("Enter your password");

// var codePassword =("pakistan321");

// if(passwordInput === ""){

//     console.log("Please enter password");
    
// }else if(passwordInput === codePassword){
//     console.log("Correct!");
    
// } else{

//     console.log("incorrect password");
     
// }

// _______________________________Q-06________________________________

// var hour = 13;

// var greeting;

// if(hour < 18){
//     greeting ="Good day"
// }else{
//     greeting = " Good evening"
// }
// console.log(greeting);




