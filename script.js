
function run(){
    let htmlCode = document.getElementById("html-code").value;
    //this will store value written in the textarea
let cssCode = document.getElementById("css-code").value;
let  jsCode = document.getElementById("js-code").value;
let  output = document.getElementById("output");

   output.contentDocument.body.innerHTML = htmlCode +"<style>"+cssCode +"</style>";
   output.contentWindow.eval(jsCode);/*this will evaluate js code, output is iframe 
   where we will displaying our web page */
}