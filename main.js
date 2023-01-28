// var save =localStorage.setItem("inputText",inputText);
// var show =localStorage.getItem("inputText",inputText);
// var remove =localStorage.removeItem("inputText",inputText);
// var inputText =document.getElementById("inputText").value;
// var empty =document.querySelector("input").value="";
function saveValue(){
    var inputText =document.getElementById("inputText").value;
    localStorage.setItem("inputText",inputText);
        alert(" Saved!");

}
function clearValue(){
    var empty =document.querySelector("input").value="";
    document.querySelector(".div").innerHTML="";

    alert(" clear!");

}
function get(){
    var inputText = localStorage.getItem("inputText",inputText);
        document.querySelector(".div").innerHTML=inputText;
}
function  removeSaveValue(){
    localStorage.removeItem("inputText",inputText)
    document.querySelector(".div").innerHTML="";


}