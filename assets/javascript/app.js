
let timeLeft = 0;
let question1Answer = "Cryptic";
let question2Answer = "Numuhukumakiaki'aialunamor";
let question3Answer = "Lightweavers";
let question4Answer = "Life before death, strength before weakness, journey before destination.";
let question5Answer = "Vasher";
let answer = "";
let choice = ""
let timer;
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let interval;
// create a timer for the questions
$("#start, #restart").click(function() {
    question1();
    thisTimer();    
    myTimer();
    $("#start").hide();
    $("#restart").hide();
});
function myTimer() {
$("#time").text("Time remaining: " + timeLeft + " seconds")
timeLeft--
// if you don't guess in time
if (timeLeft === -1) {
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    $("#question").text("Too late the correct answer was " + answer);
    unanswered++
    clearInterval(timer);
    nextQuestion();
}
}

function thisTimer() {
    timer = setInterval(myTimer, 1000)
    timeLeft = 30;
}

// add the answer if correct or incorrcet answer given(stay on this for ~5sec) also increase
// correct if answered correctly or wrong if incorrectly
// bring up next question after 5sec timer has elasped also reset timeLeft to 30

function question1() {
    answer = question1Answer;
    $("#question").text("What type or spren is pattern?");
    $("#answer1").text("Cryptic");
    $("#answer2").text("fire");
    $("#answer3").text("Unmade");
    $("#answer4").text("Bind");
}

function question2() {
    answer = question2Answer;
    $("#question").text("What is Rock's actual name?");
    $("#answer1").text("Numuhukumakiaki'aialunamor");
    $("#answer2").text("Unkalaki");
    $("#answer3").text("Wolfeschlegelsteinhausenbergerdorff");
    $("#answer4").text("Kaladin");
}

function question3() {
    answer = question3Answer;
    $("#question").text("Shalash was/is the patron of which Order of the Knights Radiant?");
    $("#answer1").text("Stonewards");
    $("#answer2").text("Skybreakers");
    $("#answer3").text("Windrunners");
    $("#answer4").text("Lightweavers");
}

function question4() {
    answer = question4Answer;
    $("#question").text("Which is the oath that all Knights Radiant must take?");
    $("#answer1").text("I will protect even those I hate, so long as it is right.");
    $("#answer2").text("I will take responsibility for what I have done. If I must fall, I will rise each time a better person.");
    $("#answer3").text("Life before death, strength before weakness, journey before destination.");
    $("#answer4").text("I will protect those who cannot protect themselves.");
}

function question5() {
    answer = question5Answer;
    $("#question").text("What is Zahel's true name?");
    $("#answer1").text("Vasher");
    $("#answer2").text("Hoid");
    $("#answer3").text("Vivenna");
    $("#answer4").text("Vin");
}
// this registers your answer and log it under choice then need to compare it to answer for the question
$("#answer1").click(function() {
    choice = document.getElementById("answer1").textContent;
    clearInterval(timer);
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    // will change this to be more specific to each question later
    if (choice === answer) {
        $("#question").text("correct");
        correct++
    } else {
        $("#question").text(choice + " is incorrect the correct answer was " + answer);
        incorrect++
    }
    if (answer === question1Answer) {
        $("#image").attr("src", "./assets/images/pattern.png")
    }
    if (answer === question2Answer) {
        $("#image").attr("src", "./assets/images/Rock.png")
    }
    if (answer === question3Answer) {
        $("#image").attr("src", "./assets/images/shalash.png")
    }
    if (answer === question4Answer) {
        $("#image").attr("src", "./assets/images/firstIdeal.jpg")
    }
    if (answer === question5Answer) {
        $("#image").attr("src", "./assets/images/Vasher.jpg")
    }
    $("#image").show();
    setTimeout(nextQuestion, 3000)
})
// making it a function isn't working either...

$("#answer2").click(function() {
    choice = document.getElementById("answer2").textContent;
    clearInterval(timer);
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    if (choice === answer) {
        $("#question").text("correct");
        correct++
    } else {
        $("#question").text(choice + " is incorrect the correct answer was " + answer);
        incorrect++
    }
    // check why this is not working can't seem to find anything wrong with it
    if (answer === question1Answer) {
        $("#image").attr("src", "./assets/images/pattern.png")
    }
    if (answer === question2Answer) {
        $("#image").attr("src", "./assets/images/Rock.png")
    }
    if (answer === question3Answer) {
        $("#image").attr("src", "./assets/images/shalash.png")
    }
    if (answer === question4Answer) {
        $("#image").attr("src", "./assets/images/firstIdeal.jpg")
    }
    if (answer === question5Answer) {
        $("#image").attr("src", "./assets/images/Vasher.jpg")
    }
    $("#image").show();
    setTimeout(nextQuestion, 3000)
})

$("#answer3").click(function() {
    choice = document.getElementById("answer3").textContent;
    clearInterval(timer);
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    if (choice === answer) {
        $("#question").text("correct");
        correct++
    } else {
        $("#question").text(choice + " is incorrect the correct answer was " + answer);
        incorrect++
    }
    if (answer === question1Answer) {
        $("#image").attr("src", "./assets/images/pattern.png")
    }
    if (answer === question2Answer) {
        $("#image").attr("src", "./assets/images/Rock.png")
    }
    if (answer === question3Answer) {
        $("#image").attr("src", "./assets/images/shalash.png")
    }
    if (answer === question4Answer) {
        $("#image").attr("src", "./assets/images/firstIdeal.jpg")
    }
    if (answer === question5Answer) {
        $("#image").attr("src", "./assets/images/Vasher.jpg")
    }
    $("#image").show();
    setTimeout(nextQuestion, 3000)
})

$("#answer4").click(function() {
    choice = document.getElementById("answer4").textContent;
    clearInterval(timer);
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    if (choice === answer) {
        $("#question").text("correct");
        correct++
    } else {
        $("#question").text(choice + " is incorrect the correct answer was " + answer);
        incorrect++
    }
    if (answer === question1Answer) {
        $("#image").attr("src", "./assets/images/pattern.png")
    }
    if (answer === question2Answer) {
        $("#image").attr("src", "./assets/images/Rock.png")
    }
    if (answer === question3Answer) {
        $("#image").attr("src", "./assets/images/shalash.png")
    }
    if (answer === question4Answer) {
        $("#image").attr("src", "./assets/images/firstIdeal.jpg")
    }
    if (answer === question5Answer) {
        $("#image").attr("src", "./assets/images/Vasher.jpg")
    }
    $("#image").show();
    // trying to delay by 3seconds so that the answer shows not sure why not working
    setTimeout(nextQuestion, 3000)
})

// this delays it by 3 seconds 
// problem going to last question
function nextQuestion() {
    if (answer === question1Answer) {
        question2();
    }
    else if (answer === question2Answer) {
        question3();
    }
    else if (answer === question3Answer) {
        question4();
    }
    else if (answer === question4Answer) {
        question5();
    }
    else if (answer === question5Answer) {
        $("#question").text("Your score is:");
        $("#answer1").text("Correct: " + correct);
        $("#answer2").text("Incorrect: " + incorrect);
        $("#answer3").text("Unanswered: " + unanswered);
        $("#restart").show();
    }
    // need to change this if to something else
    if (answer !== question5Answer) {
        thisTimer();
        myTimer();
    }
    $("#image").hide()
    // clearInterval(interval)
}