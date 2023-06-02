var firstNumber = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24, 25,26,27,28,29,30,
];
var secondNumber = [
  28, 4, 27, 8, 14, 6, 11, 1, 29, 18, 3, 21, 7, 12, 17, 19, 13, 25, 10, 20, 16,
  22, 26, 15, 9, 5, 2, 30, 23, 24,
];
var numProblems = firstNumber.length;

function start() {
  println("Can you do basic arithmetic");

  var type = readLine(
    "Please select (M)ultiplication, (D)ivision, (S)ubtraction, (A)ddition: "
  ).toLowerCase();

  var score = calculate(type);
  println("Your score on the test: " + score + "%");
}

function calculate(type) {
  var score = 0;
  var correct;
  for (var i = 0; i < 5; i + ) {
    if (type == "m") {
      println(firstNumber[i]   *   secondNumber[i]);
      correct = firstNumber[i] * secondNumber[i];
    } else if (type == "d") {
      println(firstNumber[i]   /   secondNumber[i]);
      correct = firstNumber[i] / secondNumber[i];
    } else if (type == "s") {
      println(firstNumber[i]  -  secondNumber[i]);
      correct = firstNumber[i] - secondNumber[i];
    } else if (type == "a") {
      println(firstNumber[i]  +  secondNumber[i]);
      correct = firstNumber[i] + secondNumber[i];
    } else {
      println("Invalid option selected. Try again.");
      continue;
    }
}

    println();
    var answer = readInt("What do you think the answer is?  ");
    if (answer = correct) {
      println("Correct!");
      score++;
    } else {
      println("Incorrect. The correct answer was: " + correct);
    }
  }
  return (score * 100) / 5;
