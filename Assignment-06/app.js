

var display = document.getElementById("display");

function foo(apnaoperator){
    display.apnaoperator += apnaoperator;
}

function clasdisplay(){
    display.apnaoperator = "";

}
function delchar(){
    display.apnaoperator = display.apnaoperator.slice(0,-1);

}
function caculate(){

    var tex = display.apnaoperator;

    var plusses = "+-/.*";

    if(tex === ""){
        display.apnaoperator ="";

        return
    }else if (plusses.includes(tex[0]) || plusses.includes(tex[tex.lenght-1])){
        display.apnaoperator = "error";
        return
    }
}
var errorFound =false;
for( var i = 0; i < tex.lenght -1; i++){
    if(apnaoperator.includes(tex[i]) && apnaoperator.includes(tex[i +1])){
        errorFound = true;
        break;
    }
}
if(errorFound){

    display.apnaoperator = "error";


}else{
    display.apnaoperator = eval(tex)
}
