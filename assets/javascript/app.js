
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
let interval;

// create a timer for the questions

function myTimer() {
$("#time").text("Time remaining: " + timeLeft + " seconds")
timeLeft--
$("#start").hide();
// make a you didn't guess in time and show the answer
// if (timeLeft === 0) {

// }
}

function thisTimer() {
    timer = setInterval(myTimer, 1000)
    timeLeft = 30;
}

$("#start").click(function() {
    thisTimer();
    myTimer();
})


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
    $("#question").text("Which is the oath that all Knights radiant must take?");
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

$("#start").click(function() {
    question1();
});


// this registers your answer and log it under choice then need to compare it to answer for the question
$("#answer1").click(function() {
    choice = document.getElementById("answer1").textContent;
    clearInterval(timer);
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    // will change this to be more specific to each question later
    if (choice === answer) {
        $("#question").text("correct");
    } else {
        $("#question").text(choice + " is incorrect the correct answer was " + answer);
    }
    nextQuestion();
})

$("#answer2").click(function() {
    choice = document.getElementById("answer2").textContent;
    clearInterval(timer);
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    if (choice === answer) {
        $("#question").text("correct");
    } else {
        $("#question").text(choice + " is incorrect the correct answer was " + answer);
    }
    nextQuestion();
})

$("#answer3").click(function() {
    choice = document.getElementById("answer3").textContent;
    clearInterval(timer);
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    if (choice === answer) {
        $("#question").text("correct");
    } else {
        $("#question").text(choice + " is incorrect the correct answer was " + answer);
    }
    nextQuestion();
})

$("#answer4").click(function() {
    choice = document.getElementById("answer4").textContent;
    clearInterval(timer);
    $("#question, #answer1, #answer2, #answer3, #answer4, #time").empty();
    if (choice === answer) {
        $("#question").text("correct");
    } else {
        $("#question").text(choice + " is incorrect the correct answer was " + answer);
    }
    // trying to delay by 3seconds so that the answer shows not sure why not working
    interval = setInterval(nextQuestion, 3000)
    nextQuestion();
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
    }
    if (answer !== question5Answer) {
        thisTimer();
        myTimer();
    }
    clearInterval(interval)
}