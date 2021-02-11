let number =[7];

document.getElementById("submission").addEventListener("input", function(i){                           
    for(i = 0;i<number.length;i++){
    if (number[i] ==  document.getElementById("submission").value){
        console.log("correct");
        document.getElementById("submission")="You guessed the lucky number!"
    } else {
        console.log("incorrect");
        document.getElementById("submission")="This is not the lucky number!"
  }
}   
});
