// Global Variables
  var counter;
  var clock;
  var currentQuestion = 0;
  var correctAnswer = 0;
  var userAnswer = 0;
  var totalCorrect = 0;
  var totalIncorrect = 0;
  var totalUnanswered = 0;

// Object with Trivia Questions
var triviaQuestion = 
  [{
    question: "Which store did Rachel and Ross both buy the same apothecary table from?",
    choices: ["Crate & Barrel", "West Elm", "Pottery Barn", "Anthropologie"],
    correctAnswer: 2
    },
    
  {
    question: "Monica’s apartment number was originally 5. What number was it later changed to for the rest of the series?",
    choices: ["10", "15", "6", "20"],
    correctAnswer: 3
  },
    
  {
    question: "In 'The One Where No One's Ready,' what does Phoebe spill on her dress?",
    choices: ["Wine", "Hummus", "Guacamole", "Diet Coke"],
    correctAnswer: 1
  },
    
  {
    question: "Who said it? 'From now on, the only person who's going to enjoy these bad boys is me.'",
    choices: ["Monica", "Rachel", "Ross", "Joey"],
    correctAnswer: 2
  },
    
  {
    question: "Finish Phoebe's song lyric: 'New York City has no power / And the milk is getting sour / But to me, it is not scary...'",
    choices: ["I'm in love with Matthew Perry", "'Cause I'm with my boyfriend, Gary", "'Cause I stay away from dairy", "I still have some Ben and Jerry's"],
    correctAnswer: 2
  },
    
  {
    question: "Who said it? 'So it seems like this internet thing is here to stay, huh?'",
    choices: ["Ross", "Chandler", "Phoebe", "Rachel"],
    correctAnswer: 1
  },
    
  {
    question: "How long is the letter Rachel writes Ross at the beach house?",
    choices: ["10 pages, front and back", "18 pages, front and back", "15 pages, front and back", "9 pages, front and back"],
    correctAnswer: 1
  },
    
  {
    question: "What was the name of Ross and Chandler's college band?",
    choices: ["Way, No Way", "Emotional Knapsack", "She Feels Weird Since I've Been Gone", "Betrayal In The Common Room"],
    correctAnswer: 0
  },
  ];


// Global Functions
 var Countdown =  function() {
    counter--;
    if (counter >= 0) {
     $("#count").text(counter);
    }
   if (counter === 0) {
    checkWin();
    }
  }

  function countdown () {  
    counter = 30;
    clock = setInterval(Countdown, 1000);
    $("#timeRemaing").show();
  }

  function showQuestion (i) {
    countdown ();    
    currentQuestion = i;    
    $("#question").html(triviaQuestion[i].question+"<br/><br/>");
    $("#answer0").html("A) "+triviaQuestion[i].choices[0]+"<br/><br/>");
    $("#answer1").html("B) "+triviaQuestion[i].choices[1]+"<br/><br/>");
    $("#answer2").html("C) "+triviaQuestion[i].choices[2]+"<br/><br/>");
    $("#answer3").html("D) "+triviaQuestion[i].choices[3]+"<br/><br/>");
    $("#answerImage").attr('src','#').hide();
    correctAnswer = triviaQuestion[i].correctAnswer;
  }

  function checkWin() {
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    showImage();
    clearInterval(clock);
    if (counter === 0) {
      totalUnanswered++;
      console.log("out of time");
      $("#question").text("You Ran Out of Time!");
      $("#answer0").text("The correct answer was: " + triviaQuestion[currentQuestion].choices[triviaQuestion[currentQuestion].correctAnswer]);
      } 
      else if (userAnswer === correctAnswer) {
      totalCorrect++;
      console.log ("you win");
      $("#question").text("Correct!");
      $("#answer0").text("");
      }  
      else {
      totalIncorrect++;
      console.log ("you loose");
      $("#question").text("Nope!");
      $("#answer0").text("The correct answer was: " + triviaQuestion[currentQuestion].choices[triviaQuestion[currentQuestion].correctAnswer]);  
      }

    if (currentQuestion < 7) {
      //Show next questions if not on the last question
      var nextQuestion = setTimeout(function() {
          currentQuestion++;
          showQuestion (currentQuestion);
        }, 7000);
      }

    if (currentQuestion === 7) { 
      //Show Start Over Screen if it's the last question
      var startOver = setTimeout(function() {
        $("#question").html("Done! Here's how you did..."+"<br/><br/>");
        $("#answer0").text("Correct Answers: "+totalCorrect);
        $("#answer1").text("Incorrect Answers: "+totalIncorrect);
        $("#answer2").text("Unanswered: "+totalUnanswered);
        $("#answerImage").attr('src','#').hide();
        $("#startOver").show();
        }, 7000);
      }
  }

  function showImage() {
    if (currentQuestion === 0) {
        $("#answerImage").show().attr('src','https://potterwars.files.wordpress.com/2016/02/friends-ross-apothecary-table-pottery-barn.gif');
    }
    if (currentQuestion === 1) {
        $("#answerImage").show().attr('src','https://www.unbelievable-facts.com/wp-content/uploads/2016/08/Friends-Apartment-Numbers.jpg');
    }
    if (currentQuestion === 2) {
        $("#answerImage").show().attr('src','http://3.bp.blogspot.com/-G1aoqTrz5eI/VOpR0lRpqFI/AAAAAAAAlXE/pERCGktKoXw/s1600/tumblr_mab31uYFk31rws3zyo1_r2_250.gif');
    }
    if (currentQuestion === 3) {
        $("#answerImage").show().attr('src','http://24.media.tumblr.com/d7f84084f5156ddc280056121a79c136/tumblr_mfdvo0NUcS1rj1d5oo1_500.gif');
    }
    if (currentQuestion === 4) {
        $("#answerImage").show().attr('src','https://friendstvfan.files.wordpress.com/2014/04/sourmilk.gif');
    }
    if (currentQuestion === 5) {
        $("#answerImage").show().attr('src','https://media.giphy.com/media/vYYyY4kBAKGha/giphy.gif');
    }
    if (currentQuestion === 6) {
        $("#answerImage").show().attr('src','http://25.media.tumblr.com/81f35d6524a4dd10120baeecef9bcbaf/tumblr_mibikxUdW21qeeqito6_250.gif');
    }
    if (currentQuestion === 7) {
        $("#answerImage").show().attr('src','https://images.hellogiggles.com/uploads/2016/07/18050929/noway.gif');
    }
  }


// Onload & onclick functions
  window.onload = function() {
    $("#timeRemaing").hide();
    $("#startOver").hide();
  }

 $("#start").on("click", function() {
   $("#start").hide();
   showQuestion (0);
  });

  $("#answer0").on("click", function() {
    userAnswer = 0;
    checkWin();
  });

  $("#answer1").on("click", function() {
    userAnswer = 1;
    checkWin();
  });

  $("#answer2").on("click", function() {
    userAnswer = 2;
    checkWin();
  });

  $("#answer3").on("click", function() {
    userAnswer = 3;
    checkWin();
  });

 $("#startOver").on("click", function() {
    $("#startOver").hide();
    showQuestion (0);
    totalCorrect = 0;
    totalIncorrect = 0;
    totalUnanswered = 0;
  });

