
let timeLeft = 0;
let question1Answer = "Cryptic";
let question2Answer = "Cryptic";
let question3Answer = "Cryptic";
let question4Answer = "Cryptic";
let question5Answer = "Cryptic";
let answer = "";
let choice = ""

// create a timer for the questions

function myTimer() {
$("#time").text("Time remaining: " + timeLeft + " seconds")
timeLeft--
$("#start").hide();
// make a you didn't guess in time and show the answer
// if (timeLeft === 0) {

// }
}

function timer() {
    let timer = setInterval(myTimer, 1000)
    timeLeft = 30;
}

$("#start").click(function() {
    timer();
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

$("#start").click(function() {
    question1();
});


// this registers your answer and log it under choice then need to compare it to answer for the question
$("#answer1").click(function() {
    choice = document.getElementById("answer1").textContent;
    if (choice = answer) {

    }
})

$("#answer2").click(function() {
    choice = document.getElementById("answer2").textContent;
})

$("#answer3").click(function() {
    choice = document.getElementById("answer3").textContent;
})

$("#answer4").click(function() {
    choice = document.getElementById("answer4").textContent;
})