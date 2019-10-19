
    var myQuestions = [
      {//Question 1
        question: "What massive object is falling from the sky?",
        answers: {
          a: "Cloud",
          b: "Moon",
          c: "Sun",
          d: "Werewolf"
        },
        correctAnswer: "b"
      },
      {//Question 2
        question: "Where does The Legend of Zelda: Majora's Mask take place?",
        answers: {
          a: "Termina",
          b: "Galbadia",
          c: "Corneria",
          d: "Lorule"
        },
        correctAnswer: "a"
      },
      {//Question 3
        question: "Who is the main antagonist?",
        answers: {
          a: "Bone Lad",
          b: "Chicken Critter",
          c: "Beak Boy",
          d: "Skull Kid"
        },
        correctAnswer: "d"
      },
      {//Question 4
        question: "Who is Link searching for at the start of Majora's Mask?",
        answers: {
          a: "Zelda",
          b: "Saria",
          c: "Navi",
          d: "Ruto"
        },
        correctAnswer: "c"
      },
      {//Question 5
        question: "True or False: You cannot turn into Adult Link during the events of Majora's Mask?",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a"
      },
      {//Question 6
        question: "What is the name of Link's fairy companion?<",
        answers: {
          a: "Tael",
          b: "Saria",
          c: "Tatl",
          d: "Nayru"
        },
        correctAnswer: "c"
      },
      {//Question 7
        question: "Who is this eccentric collector?",
        answers: {
          a: "Angry Mask Salesman",
          b: "Happy Mask Salesman",
          c: "Sad Mask Salesman",
          d: "Quirky Mask Salesman"
        },
        correctAnswer: "b"
      },
      {//Question 8
        question: "Which town sits at the center of Termina?",
        answers: {
          a: "Time Town",
          b: "Moon Town",
          c: "Clock Town",
          d: "Tower Town"
        },
        correctAnswer: "c"
      },
      {//Question 9
        question: "How many main dungeons are featured in Majora's Mask?",
        answers: {
          a: "4",
          b: "5",
          c: "6",
          d: "7"
        },
        correctAnswer: "a"
      },
       {//Question 10
        question: "What type of creature does the Skull Kid turn Link into?",
        answers: {
          a: "Zora",
          b: "Deku Scrub",
          c: "Goron",
          d: "Keaton"
        },
        correctAnswer: "b"
      },
    ];
  
    var quizContainer = document.getElementById('quiz'); 
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){

        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }


    function showResults(a, b, c, d){
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
                    if(userAnswer===questions[i].correctAnswer){
                                numCorrect++;
                                answerContainers[i].style.color = 'green';
                    }else{
                         answerContainers[i].style.color = 'red';
                     }
                 }

        $(resultsContainer).text(`${numCorrect} out of ${questions.length}`);
    }
    showQuestions(questions, quizContainer);
    
    $(submitButton).on("click" ,function(){
        showResults(questions, quizContainer, resultsContainer);
    })
}
    
