function name1() {
var first= document.getElementById("word").value;
var output1="";
for (var x=0; x<first.length; x++) {
  if (first.charAt(x)=="a" || first.charAt(x)=="e" || first.charAt(x)=="i" || first.charAt(x)=="o" || first.charAt(x)=="u") {
      output1 += "ub" + first.charAt(x);
}
else  {
  output1 += first.charAt(x);
}
}
alert(output1);
}
