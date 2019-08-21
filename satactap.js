function check(){




	var question1 = document.quiz.question1.value;

	var question2 = document.quiz.question2.value;

	var question3 = document.quiz.question3.value;

  var question4 = document.quiz.question4.value;

  var question5 = document.quiz.question5.value;

	var question6 = document.quiz.question6.value;

  var question7 = document.quiz.question7.value;

  var question8 = document.quiz.question8.value;

	var question9 = document.quiz.question9.value;

  var question10 = document.quiz.question10.value;

	var correct = 0;

  var errorMessage = "";










	if (question1 == "$408.04") {

		correct++;

  }

  else{

    errorMessage=errorMessage.concat("1 ");

  }

	if (question2 == "14") {

		correct++;

  }

  else{

  errorMessage=errorMessage.concat("2 ");

  }

	if (question3 == "7") {

		correct++;

	}

  else{

    errorMessage=errorMessage.concat("3 ");

  }

  if (question4 == "42") {

		correct++;

	}

  else{

    errorMessage=errorMessage.concat("4 ");

  }

  if (question5 == "16") {

    correct++;

  }

  else{

  errorMessage=errorMessage.concat("5 ");

  }

  if (question6 == "5") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("6 ");

  }

  if (question7 == "5") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("7 ");

  }

  if (question8 == "20") {

    correct++;

  }

  else{

  errorMessage=errorMessage.concat("8 ");

  }

  if (question9 == "-9/4") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("9 ");

  }

  if (question10 == "3") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("10 ");

  }




	var messages = ["Great job!", "That's just okay", "You really need to do better", "Nice Job you are ready for the Math section on the ACT"];

	var score;




	if (correct == 0) {

		score = 2;

	}




	if (correct > 0 && correct < 6) {

		score = 1;

	}




	if (correct == 6) {

		score = 0;

	}

  if (correct > 7 && correct < 11) {

		score = 3;

	}




	document.getElementById("after_submit").style.visibility = "visible";




	document.getElementById("message").innerHTML = messages[score];

	document.getElementById("number_correct").innerHTML = "You got " + correct.toString() + " correct.";

  if(errorMessage!=""){

      document.getElementById("errors").innerHTML="Check Questions: "+errorMessage;

  }

  document.getElementById("picture").src = pictures[score];

	}







  //Define vars to hold time values

  let seconds = 0;

  let minutes = 0;

  let hours = 0;




  //Define vars to hold "display" value

  let displaySeconds = 0;

  let displayMinutes = 0;

  let displayHours = 0;




  //Define var to hold setInterval() function

  let interval = null;




  //Define var to hold stopwatch status

  let status = "stopped";




  //Stopwatch function (logic to determine when to increment next value, etc.)

  function stopWatch(){




      seconds++;




      //Logic to determine when to increment next value

      if(seconds / 60 === 1){

          seconds = 0;

          minutes++;




          if(minutes / 60 === 1){

              minutes = 0;

              hours++;

          }




      }




      //If seconds/minutes/hours are only one digit, add a leading 0 to the value

      if(seconds < 10){

          displaySeconds = "0" + seconds.toString();

      }

      else{

          displaySeconds = seconds;

      }




      if(minutes < 10){

          displayMinutes = "0" + minutes.toString();

      }

      else{

          displayMinutes = minutes;

      }




      if(hours < 10){

          displayHours = "0" + hours.toString();

      }

      else{

          displayHours = hours;

      }




      //Display updated time values to user

      document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;




  }










  function startStop(){




      if(status === "stopped"){




          //Start the stopwatch (by calling the setInterval() function)

          interval = window.setInterval(stopWatch, 1000);

          document.getElementById("startStop").innerHTML = "Stop";

          status = "started";




      }

      else{




          window.clearInterval(interval);

          document.getElementById("startStop").innerHTML = "Start";

          status = "stopped";




      }




  }




  //Function to reset the stopwatch

  function reset(){




      window.clearInterval(interval);

      seconds = 0;

      minutes = 0;

      hours = 0;

      document.getElementById("display").innerHTML = "00:00:00";

      document.getElementById("startStop").innerHTML = "Start";




  }













function check2(){




  var q1 = document.quiz.q1.value;

  var q2 = document.quiz.q2.value;

  var q3 = document.quiz.q3.value;

  var q4 = document.quiz.q4.value;

  var q5 = document.quiz.q5.value;

  var cor = 0;










  	if (q1 == "1") {

  		cor++;

    }

    else if(q1 != 1 || q1 != 2){




    }

    else {

      cor--

    }




  	if (q2 == "1") {

  		cor++;

    }

    else if(q2 != 1 || q2 != 2){




    }

    else{

      cor--

    }

  	if (q3 == "1") {

  		cor++;

  	}

    else if(q3 != 1 || q3 != 2){




    }

    else{

      cor--

    }

    if (q4 == "1") {

  		cor++;

  	}

    else if(q4 != 1 || q4 != 2){




    }

    else{

      cor--

    }

    if (q5 == "1") {

      cor++;

    }

    else if(q5 != 1 || q5 != 2){




    }

    else{

      cor--

    }







  	var messages = ["You should try to take the ACT!", "You should try taking the SAT!", "You should try some practice to see which you should take.", "Please fill out the survey."];

  	var score;







    if (cor == 0) {

  		score = 3;

  	}




    if (cor > 1) {

  		score = 0;

  	}




  	if (cor < -1) {

  		score = 1;

  	}

    if (cor == 1 || cor == -1) {

  		score = 2;

  	}




  	document.getElementById("after_submit").style.visibility = "visible";




  	document.getElementById("message").innerHTML = messages[score];

    document.getElementById("picture").src = pictures[score];

  	}







function ex1() {

  var txt;

  if (confirm("When you divide the number of mile by miles per gallon, you get 101. Then you multipy 101 by the cost per gallon(4.04). The anwser is 408.04.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo1").innerHTML = txt;

}

function ex2() {

  var txt;

  if (confirm("14 is the correct answer. When you use x = 3 and y = 5 in the given expressions, 3x^2– 2y = 3(3)^2 – 2(5) = 27 – 10 = 17 and 2x^2– 3y = 2(3)^2 – 3(5) = 18 – 15 = 3. Then subtract 3 from 17 to get 14.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo2").innerHTML = txt;

}

function ex3() {

  var txt;

  if (confirm("The correct response is 5. You can solve this problem by first subtracting 2x from each side of the equation to get 3 = x – 4. Then add 4 to each side, so x = 7.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo3").innerHTML = txt;

}

function ex4() {

  var txt;

  if (confirm("42 is the answer because it is the largest number that is a factor of the 3 numbers given.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo4").innerHTML = txt;

}

function ex5() {

  var txt;

  if (confirm("The correct answer is 1. If x=sales then x + 3 = sales for second year. Since they were doubled it is 2(x + 3) = 38, for the third year. Then you can divide by 2 and get x + 3 = 19 and then you subtract from 3 on both sides and get x = 16.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo5").innerHTML = txt;

}

function ex6() {

  var txt;

  if (confirm("The correct answer is 5. Twice a number means multipy by 2, and 3 less than a number is to subtract.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo6").innerHTML = txt;

}

function ex7() {

  var txt;

  if (confirm("1 and 6 are real numbers and there are infinite amount of numbers between 2 real numbers.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo7").innerHTML = txt;

}

function ex8() {

  var txt;

  if (confirm("Every turn the screw goes 1/8 inch into the wood, after 8 turns an inch of the screw would be in. So, x(1/8) = 2.5 . Multiplying by 8, x = 8(2.5) = 20")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo8").innerHTML = txt;

}

function ex9() {

  var txt;

  if (confirm("Since 4y = –9x + 7, y = -9/4x + 7/4. So the slope of this line is -9/4. Since parallel lines have the same slope, the slope of any parallel line also has to be -9/4")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo9").innerHTML = txt;

}

function ex10() {

  var txt;

  if (confirm(" 100(0.70) = 70 is the amount that would be paid if the DVD was marked down 30%, but then there is another discount of 20%, so the price is going to be 80% of the marked-down price. Then the price is 70(0.80) = 56.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("demo10").innerHTML = txt;

}




function allaction(){

  startStop();

  check();




}




function allaction1(){

  startStop();

  check3();




}




function all1(){

  startStop();

  check4();




}




function all2(){

  startStop();

  check5();




}




function check3(){




	var question1 = document.quiz.qu1.value;

	var question2 = document.quiz.qu2.value;

	var question3 = document.quiz.qu3.value;

  var question4 = document.quiz.qu4.value;

  var question5 = document.quiz.qu5.value;

	var question6 = document.quiz.qu6.value;

  var question7 = document.quiz.qu7.value;

  var question8 = document.quiz.qu8.value;

	var question9 = document.quiz.qu9.value;

  var question10 = document.quiz.qu10.value;

  var question11 = document.quiz.qu11.value;

  var question12 = document.quiz.qu12.value;

  var question13 = document.quiz.qu13.value;

  var question14 = document.quiz.qu14.value;

  var question15 = document.quiz.qu15.value;

	var correct = 0;

  var errorMessage = "";










	if (question1 == "1") {

		correct++;

  }

  else{

    errorMessage=errorMessage.concat("1 ");

  }

	if (question2 == "3") {

		correct++;

  }

  else{

  errorMessage=errorMessage.concat("2 ");

  }

	if (question3 == "4") {

		correct++;

	}

  else{

    errorMessage=errorMessage.concat("3 ");

  }

  if (question4 == "3") {

		correct++;

	}

  else{

    errorMessage=errorMessage.concat("4 ");

  }

  if (question5 == "3") {

    correct++;

  }

  else{

  errorMessage=errorMessage.concat("5 ");

  }

  if (question6 == "2") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("6 ");

  }

  if (question7 == "3") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("7 ");

  }

  if (question8 == "1") {

    correct++;

  }

  else{

  errorMessage=errorMessage.concat("8 ");

  }

  if (question9 == "4") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("9 ");

  }

  if (question10 == "4") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("10 ");

  }

  if (question11 == "1") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("11 ");

  }

  if (question12 == "4") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("12 ");

  }

  if (question13 == "1") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("13 ");

  }

  if (question14 == "2") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("14 ");

  }

  if (question15 == "3") {

    correct++;

  }

  else{

    errorMessage=errorMessage.concat("15 ");

  }




	var messages = ["Great job!", "That's just okay", "You really need to do better", "Nice Job you are ready for the English section on the ACT"];

	var score;




	if (correct == 0) {

		score = 2;

	}




	if (correct > 0 && correct <= 8) {

		score = 1;

	}




	if (correct == 10 || correct == 9) {

		score = 0;

	}

  if (correct > 10 && correct < 16) {

		score = 3;

	}




	document.getElementById("after_submit").style.visibility = "visible";




	document.getElementById("message").innerHTML = messages[score];

	document.getElementById("number_correct").innerHTML = "You got " + correct.toString() + " correct.";

  if(errorMessage!=""){

      document.getElementById("errors").innerHTML="Check Questions: "+errorMessage;

  }

  document.getElementById("picture").src = pictures[score];

	}







  function check4(){




  	var question1 = document.quiz.question1.value;

  	var question2 = document.quiz.question2.value;

  	var question3 = document.quiz.question3.value;

    var question4 = document.quiz.question4.value;

    var question5 = document.quiz.question5.value;

  	var question6 = document.quiz.question6.value;

    var question7 = document.quiz.question7.value;

    var question8 = document.quiz.question8.value;

  	var question9 = document.quiz.question9.value;

    var question10 = document.quiz.question10.value;

  	var correct = 0;

    var errorMessage = "";










  	if (question1 == "2") {

  		correct++;

    }

    else{

      errorMessage=errorMessage.concat("1 ");

    }

  	if (question2 == "2") {

  		correct++;

    }

    else{

    errorMessage=errorMessage.concat("2 ");

    }

  	if (question3 == "3") {

  		correct++;

  	}

    else{

      errorMessage=errorMessage.concat("3 ");

    }

    if (question4 == "4") {

  		correct++;

  	}

    else{

      errorMessage=errorMessage.concat("4 ");

    }

    if (question5 == "4") {

      correct++;

    }

    else{

    errorMessage=errorMessage.concat("5 ");

    }

    if (question6 == "2") {

      correct++;

    }

    else{

      errorMessage=errorMessage.concat("6 ");

    }

    if (question7 == "4") {

      correct++;

    }

    else{

      errorMessage=errorMessage.concat("7 ");

    }

    if (question8 == "1") {

      correct++;

    }

    else{

    errorMessage=errorMessage.concat("8 ");

    }

    if (question9 == "4") {

      correct++;

    }

    else{

      errorMessage=errorMessage.concat("9 ");

    }

    if (question10 == "3") {

      correct++;

    }

    else{

      errorMessage=errorMessage.concat("10 ");

    }




  	var messages = ["Great job!", "That's just okay", "You really need to do better", "Nice Job you are ready for the Math section on the SAT"];

  	var score;




  	if (correct == 0) {

  		score = 2;

  	}




  	if (correct > 0 && correct < 6) {

  		score = 1;

  	}




  	if (correct == 6) {

  		score = 0;

  	}

    if (correct > 7 && correct < 11) {

  		score = 3;

  	}




  	document.getElementById("after_submit").style.visibility = "visible";




  	document.getElementById("message").innerHTML = messages[score];

  	document.getElementById("number_correct").innerHTML = "You got " + correct.toString() + " correct.";

    if(errorMessage!=""){

        document.getElementById("errors").innerHTML="Check Questions: "+errorMessage;

    }

    document.getElementById("picture").src = pictures[score];

}




function exam1() {

  var txt;

  if (confirm("The correct choice is 1.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de1").innerHTML = txt;

}

function exam2() {

  var txt;

  if (confirm("The correct choice is 3.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de2").innerHTML = txt;

}

function exam3() {

  var txt;

  if (confirm("The correct choice is 4.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de3").innerHTML = txt;

}

function exam4() {

  var txt;

  if (confirm("The answer is choice 3.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de4").innerHTML = txt;

}

function exam5() {

  var txt;

  if (confirm("The answer is choice 3.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de5").innerHTML = txt;

}

function exam6() {

  var txt;

  if (confirm("The answer is choice 2.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de6").innerHTML = txt;

}

function exam7() {

  var txt;

  if (confirm("The correct choice is 3.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de7").innerHTML = txt;

}

function exam8() {

  var txt;

  if (confirm("The correct choice 1.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de8").innerHTML = txt;

}

function exam9() {

  var txt;

  if (confirm("The correct choice is 4.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de9").innerHTML = txt;

}

function exam10() {

  var txt;

  if (confirm("The answer is choice 4.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de10").innerHTML = txt;

}

function exam11() {

  var txt;

  if (confirm("The answer is choice 1.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de11").innerHTML = txt;

}

function exam12() {

  var txt;

  if (confirm("The answer is choice 4.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de12").innerHTML = txt;

}

function exam13() {

  var txt;

  if (confirm("The answer is choice 1.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de13").innerHTML = txt;

}

function exam14() {

  var txt;

  if (confirm("The answer is choice 2.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de14").innerHTML = txt;

}

function exam15() {

  var txt;

  if (confirm("The answer is choice 3.")) {

    txt = "It's always good to check your answers!";

  }

  document.getElementById("de15").innerHTML = txt;

}










function check5(){




	var question1 = document.quiz.question1.value;

	var question2 = document.quiz.question2.value;

	var question3 = document.quiz.question3.value;

	var question4 = document.quiz.question4.value;

	var question5 = document.quiz.question5.value;

	var question6 = document.quiz.question6.value;

	var question7 = document.quiz.question7.value;

	var question8 = document.quiz.question8.value;

	var question9 = document.quiz.question9.value;

	var question10 = document.quiz.question10.value;

	var correct = 0;

	var errorMessage = "";










	if (question1 == "2") {

		correct++;

	}

	else{

		errorMessage=errorMessage.concat("1 ");

	}

	if (question2 == "4") {

		correct++;

	}

	else{

	errorMessage=errorMessage.concat("2 ");

	}

	if (question3 == "1") {

		correct++;

	}

	else{

		errorMessage=errorMessage.concat("3 ");

	}

	if (question4 == "1") {

		correct++;

	}

	else{

		errorMessage=errorMessage.concat("4 ");

	}

	if (question5 == "2") {

		correct++;

	}

	else{

	errorMessage=errorMessage.concat("5 ");

	}

	if (question6 == "3") {

		correct++;

	}

	else{

		errorMessage=errorMessage.concat("6 ");

	}

	if (question7 == "2") {

		correct++;

	}

	else{

		errorMessage=errorMessage.concat("7 ");

	}

	if (question8 == "3") {

		correct++;

	}

	else{

	errorMessage=errorMessage.concat("8 ");

	}

	if (question9 == "1") {

		correct++;

	}

	else{

		errorMessage=errorMessage.concat("9 ");

	}

	if (question10 == "2") {

		correct++;

	}

	else{

		errorMessage=errorMessage.concat("10 ");

	}




	var messages = ["Great job!", "That's just okay", "You really need to do better", "Nice Job you are ready for the English section on the SAT"];

	var score;




	if (correct == 0) {

		score = 2;

	}




	if (correct > 0 && correct < 6) {

		score = 1;

	}




	if (correct == 6) {

		score = 0;

	}

	if (correct > 7 && correct < 11) {

		score = 3;

	}




	document.getElementById("after_submit").style.visibility = "visible";




	document.getElementById("message").innerHTML = messages[score];

	document.getElementById("number_correct").innerHTML = "You got " + correct.toString() + " correct.";

	if(errorMessage!=""){

			document.getElementById("errors").innerHTML="Check Questions: "+errorMessage;

	}

	document.getElementById("picture").src = pictures[score];

}




function e1() {

var txt;

if (confirm("The correct choice is 2.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d1").innerHTML = txt;

}

function e2() {

var txt;

if (confirm("The correct choice is 4.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d2").innerHTML = txt;

}

function e3() {

var txt;

if (confirm("The correct choice is 1.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d3").innerHTML = txt;

}

function e4() {

var txt;

if (confirm("The answer is choice 1.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d4").innerHTML = txt;

}

function e5() {

var txt;

if (confirm("The answer is choice 2.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d5").innerHTML = txt;

}

function e6() {

var txt;

if (confirm("The answer is choice 3.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d6").innerHTML = txt;

}

function e7() {

var txt;

if (confirm("The correct choice is 2.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d7").innerHTML = txt;

}

function e8() {

var txt;

if (confirm("The correct choice 3.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d8").innerHTML = txt;

}

function e9() {

var txt;

if (confirm("The correct choice is 1.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d9").innerHTML = txt;

}

function e10() {

var txt;

if (confirm("The answer is choice 2.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("d10").innerHTML = txt;

}




function exa1() {

var txt;

if (confirm("The correct choice is 2.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem1").innerHTML = txt;

}

function exa2() {

var txt;

if (confirm("The correct choice is 2.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem2").innerHTML = txt;

}

function exa3() {

var txt;

if (confirm("The correct choice is 3.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem3").innerHTML = txt;

}

function exa4() {

var txt;

if (confirm("The answer is choice 4.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem4").innerHTML = txt;

}

function exa5() {

var txt;

if (confirm("The answer is choice 4.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem5").innerHTML = txt;

}

function exa6() {

var txt;

if (confirm("The answer is choice 2.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem6").innerHTML = txt;

}

function exa7() {

var txt;

if (confirm("The correct choice is 4.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem7").innerHTML = txt;

}

function exa8() {

var txt;

if (confirm("The correct choice 1.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem8").innerHTML = txt;

}

function exa9() {

var txt;

if (confirm("The correct choice is 4.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem9").innerHTML = txt;

}

function exa10() {

var txt;

if (confirm("The answer is choice 3.")) {

	txt = "It's always good to check your answers!";

}

document.getElementById("dem10").innerHTML = txt;

}
