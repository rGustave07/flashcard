var bc = require('./BasicCard.js');
var inquirer = require('inquirer');

var question = new bc('Who was the first president of the united states?', 'George Washington');
var question1 = new bc('How many states are in the United States?', 'Fifty (50)');

inquirer.prompt([
  {
    type: 'input',
    message: question.front,
    name: 'answer'
  }
]).then(function(data){
    if (data.answer === question.back) {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }

      inquirer.prompt([
        {
          type:'input',
          message: question1.front,
          name: 'answer'
        }
      ]).then(function(data){
        if (data.answer === question1.back){
          console.log('Correct');
        } else {
          console.log('Incorrect');
        }
      })
})
