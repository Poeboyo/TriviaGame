# TriviaGame

Within this game, you will be given 10 Questions to answer based off of The Legend of Zelda: Majora's Mask

## How it's made

- Each Question is contained inside of an array inside of an object, accompanied by the choices and correct answers

- How it Works:

- There are 3 DIVS inside of the HTML file, each filled with the according information : (Quiz`Contains Questions`), (Submit`Contains the Submit Button that runs a submit function to check answers out of 10`), and (Results`Showing the score calcualted out of 10 to the player`)

```javascript
   var myQuestions = {//Question 1
        question: "What massive object is falling from the sky?",
        answers: {
          a: "Cloud",
          b: "Moon",
          c: "Sun",
          d: "Werewolf"
        },
        correctAnswer: "b"
      }, ...
```

- A for loop iterates through each element inside of the array, creating a new div where the questions and answer choices will be displayed

```javascript
 for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){

```

- Based on the answers chosn when the player hits submit, the game page will changed the incorrec choices to a red hue to signify an incorrect answer and green to signify a correct answer upon hitting the submit button

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Google Fonts

## Difficulties and Learning

- The difficulty and learning associated with this project is being introduced to Data Strcutures and using them to complete the task at hand, looking back, this was an extremely simple task that for a beginner, proved to be somewhat confusing without any prior knowledge.
