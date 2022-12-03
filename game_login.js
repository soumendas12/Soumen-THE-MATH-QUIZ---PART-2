function addUser() {
    player1_namr = document.getElementById("player1_name_input").Value;
    player2_namr = document.getElementById("player2_name_input").Value;

    localStorage.setIten("player1-name", player1_name);
    localStorage.setIten("player2-name", player2_name);

    window.location = "game_page.html";
}
function send() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);  
}
question_number = "<h4>" + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";

check_button = "<br><br><button class'btn btn-info' onclick=() '>Check</butoon>"; 
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";