function incrementIncorrect(){
  let incorrectCounter  = monogatari.storage('incorrectCounter');
  incorrectCounter++;
  monogatari.storage({incorrectCounter: incorrectCounter});
}

function incrementCorrect(){
  let correctCounter = monogatari.storage('temp_score');
  correctCounter++;
  monogatari.storage({temp_score: correctCounter});
}

let currentScript = "GitIntro1";
let correct = true;
monogatari.storage({nextScript: currentScript});
monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});

const GitIntro = [
  {'Conditional': {
    'Condition': function () {
        return this.storage.level_1_done;
    },
    'True': {
      Choice: {
        'Dialog': "Seems like you have done this module already, would you like to test your knowledge again?",
        Yes: {
          Text: "Yes, Please!",
          Do: "jump QuestionsOnly",
        },
        No: {
          Text: "Study again",
          Do: 'clear',
        },
        Back: {
            Text:"Back to the menu",
            Do:"jump GameStart",
        }
      },
    },
    'False': 'clear',
  }},
  "show character chef welcome center with fadeIn",
  "chef Before you can begin creating recipes with us, we need to teach you how the team saves their versions of recipes.",
  "hide character chef with fadeOut",
  "na Are you already familiar with the importance of Git?",
  {
    Choice: {
      Yes: {
        Text: "Yes, I already knew this knowledge!",
        Do: "jump GitIntroEnd",
      },
      No: {
        Text: "No, but I would like to learn about it!",
        Do: "jump GitIntro1",
      },
    },
  },
  monogatari.script({
    GitIntro1: [
      "show character chef welcome center with fadeIn",
      "chef Let's say you create a recipe idea but when we team taste test the dish, we don't think it is quite ready for the menu yet.",
      "chef You would like to improve the recipe but also do not want to forget the current ingredients and instructions.",
      "chef Thus, you should create a copy of the recipe as a backup.",
      {
        Choice: {
          option1: {
            Text: "I have a really good memory. I don't think I need to create a copy.",
            Do: "chef Weeeeeell, that may be the case but Joe and Mick may want to improve your recipe too. It's safer for you to create a copy just in case your memory fails for any reason.",
          },
          option2: {
            Text: "Oh that makes sense!",
            Do: "chef Great!",
          },
        },
      },
      "chef Now it's time to test your knowledge!",
      "chef If you think you will want to refer to an old version of the recipe in the future, what should you do?",
      {
        Choice: {
          A: {
            Text: "A) Create a copy of the recipe as a backup",
            Do: "chef Excellent! You should create a copy of your version as you should not rely on your own or other people's memories",
            onChosen: () => {
              updateScore();
              playCorrectSound()
              monogatari.storage({currentScript: "GitIntro1"});
              monogatari.storage({nextScript: "GitIntro2"});
              monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
              correct=true;
            }
          },
          B: {
            Text: "B) Store it in your brain because you probably won't forget",
            onChosen: function(){
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro1"});
              monogatari.storage({B_Wrong: true});
            },
            Do: "chef Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories. Try again.",
            Clickable: function(){
              return !(this.storage().B_Wrong);
            }
          },
          C: {
            Text: "C: Ask your coworker to remember it for you",
            onChosen: function(){
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro1"});
              monogatari.storage({C_Wrong: true});
            },
            Do: "chef Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories. Try again.",
            Clickable: function(){
              return !(this.storage().C_Wrong);
            }
          },
          D: {
            Text: "D: Nothing, you won't ever need to refer to an old recipe",
            onChosen: function(){
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro1"});
              monogatari.storage({D_Wrong: true});
            },
            Do: "chef Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories. Try again.",
            Clickable: function(){
              return !(this.storage().D_Wrong);
            }
          },
        },
      },
      "jump CorrectCheck",
    ],
    GitIntro2: [
      "chef Another chef in your team wants to improve the recipe at the same time as you. ",
      "chef This chef creates another recipe based off the initial recipe and saves it somewhere without interfering with the changes you are currently making to the recipe. ",
      "chef Once you are done with editing the recipe, you and your fellow chef can compare the recipes and try them out to see which one is better.",
      {
        Choice: {
          option1: {
            Text: "Ah I understand.",
            Do: "chef Sweet! Let's test your understanding",
          },
          option2: {
            Text: "Hold on, can you say that again?",
            Do: "jump GitIntro2",
          },
        },
      },
      "chef If you want your fellow chef to modify your recipe, what is the safest option?",
      {
        Choice: {
          option1: {
            Text: "A) Let them overwrite your recipe",
            Do: "chef That seems not quite right. You don't want to let people overwrite your work without creating backups because their changes may not be desirable. Try again.",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro2"});
              monogatari.storage({A_Wrong: true});
            },
            Clickable: function(){
              return !(this.storage().A_Wrong);
            }
          },
          option2: {
            Text: "B) Let them copy the recipe and then make modifications on their copy",
            Do: "chef Well done!",
            onChosen: () => {
              updateScore();
              playCorrectSound()
              correct=true;
              monogatari.storage({currentScript: "GitIntro2"});
              monogatari.storage({nextScript: "GitIntro3"});
              monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
            }
          },
          option3: {
            Text: "C) Don't let them modify your recipe at all, your recipe is perfect",
            Do: "chef That seems not quite right. Working in a team often requires your teammates to make changes to what you have made, so it does not make sense to disallow them from modifying your work. Try again.",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro2"});
              monogatari.storage({C_Wrong: true});
            },
            Clickable: function(){
              return !(this.storage().C_Wrong);
            }
          },
          option4: {
            Text: "D) Yell at them because you feel insulted",
            Do: "chef Nah let's be nice. We should allow them to copy the receipe and make changes. Try again.",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro2"});
              monogatari.storage({D_Wrong: true});
            },
            Clickable: function(){
              return !(this.storage().D_Wrong);
            }
          },
        },
      },
      "jump CorrectCheck",
    ],

    GitIntro3: [
      "chef We save our recipes both online and in the kitchen.",
      "chef If the physical copies of the recipes get lost, we can rewrite those recipes back into a physical version from the online versions.",
      "chef Similarly, if we don't have an internet connection, we still have local copies. So save the changes to your recipes online and locally.",
      {
        Choice: {
          option1: {
            Text: "Nah my memory is really good so I probably won't need it.",
            Do: "chef Mate this is not just about you, we want to ensure we can get your recipes too!",
          },
          option2: {
            Text: "Sounds good!",
            Do: "chef Nice! Let's move on",
          },
        },
      },
      "chef In cases of a fire, earthquake, or other event causing the kitchen to be destroyed, where should you keep your backup recipes",
      {
        Choice: {
          option1: {
            Text: "A) In the kitchen.",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro3"});
              monogatari.storage({A_Wrong: true});
            },
            Do: "chef Nah, You wouldn't keep all your important files in one place, so having an extra online backups is a good way to store them. It also allows you to access them anywhere, any time! Try again.",
            Clickable: function(){
              return !(this.storage().A_Wrong);
            }
          },
          option2: {
            Text: "B) Nowhere, you'll probably remember.",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro3"});
              monogatari.storage({B_Wrong: true});
            },
            Do: "chef Umm, mate, this is not just about you, we want to ensure we can get your recipes too! Try again.",
            Clickable: function(){
              return !(this.storage().B_Wrong);
            }
          },
          option3: {
            Text: "C) Online and in the kitchen",
            Do: "chef Good job! You wouldn't keep all your important files in one place, so having online and local backups is a good way to store them. It also allows you to access them anywhere, any time!",
            onChosen: () => {
              updateScore();
              playCorrectSound()
              correct=true;
              monogatari.storage({currentScript: "GitIntro3"});
              monogatari.storage({nextScript: "GitIntro4"});
              monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
            }
          },
          option4: {
            Text: "D) Online.",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro3"});
              monogatari.storage({D_Wrong: true});
            },
            Do: "Nah, You wouldn't keep all your important files in one place, so having an extra backups is a good way to store them. It also allows you to access them anywhere, any time! Try again.",
            Clickable: function(){
              return !(this.storage().D_Wrong);
            }
          },
        },
      },
      "jump CorrectCheck",
    ],

    GitIntro4: [
      "chef With many chefs making changes to each other's recipes, it is nice to be able to keep track of which iteration you prefer and the chef who made it.",
      "chef This is so that you can always revert any changes that turned out to ruin the dishes.",
      "chef Once you and your team of chefs are happy with the new dishes, you can add them to the final menu.",
      "chef Let's review what you have learned.",
      "chef Why would you want to store a copy of your recipe? Select all that apply.",
      {
        Choice: {
          optionA: {
            Text: "A) In case new versions aren't as nice",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro4"});
              monogatari.storage({A_Wrong: true});
            },
            Do: "chef Actually you should store copies in all of these scenarios. Try again.",
            Clickable: function(){
              return !(this.storage().A_Wrong);
            }
          },
          optionB: {
            Text: "B) In case you lose the recipe",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro4"});
              monogatari.storage({B_Wrong: true});
            },
            Do: "chef Actually you should store copies in all of these scenarios. Try again.",
            Clickable: function(){
              return !(this.storage().B_Wrong);
            }
          },
          optionC: {
            Text: "C) In case your fellow chefs want to try it",
            onChosen: () => {
              incrementIncorrect();
              playIncorrectSound()
              correct=false;
              monogatari.storage({currentScript: "GitIntro4"});
              monogatari.storage({C_Wrong: true});
            },
            Do: "chef Actually you should store copies in all of these scenarios",
            Clickable: function(){
              return !(this.storage().C_Wrong);
            }
          },
          optionD: {
            Text: "D) All above",
            Do: "chef Well done, you should store copies in all of these scenarios. Try again.",
            onChosen: () => {
              updateScore();
              playCorrectSound()
              correct=true;
              monogatari.storage({currentScript: "GitIntro4"});
              monogatari.storage({nextScript: "FailCheck"});
              monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
            }
          },
        },
      },
      "jump CorrectCheck",
    ],
    CorrectCheck:[
      {'Conditional':
          {
            'Condition': function () {
              return correct;
            },
            'True': 'jump {{nextScript}}',
            'False': 'jump {{currentScript}}'
          }
      }
    ],
    FailCheck:[
      {'Conditional':
          {
            'Condition': function () {
              if(!correct){
                this.storage('nextScript') = currentScript;
              }
              let fail = this.storage('incorrectCounter') >= this.storage('maxIncorrect');
              if (fail){monogatari.storage({incorrectCounter: 0});}
              return fail;
            },
            'True': 'jump GitIntroEndAlt',
            'False': 'jump GitIntroEnd'
          }
      }
    ],
    GitIntroEnd: [
      "na You now know the importance of git, let's dive into it with the next level!",
      //save that user already done this module.
      function () {
        monogatari.storage.level_1_done = true;
        return true;
      },
      "jump GameStart",
    ],
    GitIntroEndAlt: [
      "na You answered more than 3 questions incorrectly. Would you like to try again?",
      {
        Choice: {
          optionA: {
            Text: "Yes",
            Do: "jump GitIntro1",
          },
          optionB: {
            Text: "No",
            Do: "jump GameIntroEnd",
          }
        }
      }
    ],
    QuestionsOnly: [
      "Let's test your knowledge again!",
      function () {
        monogatari.storage({temp_score: 0});
        return true;
      },
      {
        Choice: {
            'Dialog': 'Quiz Question 1: If you think you will want to refer to an old version of the recipe in the future, what should you do?',
            A: {
                Text: "A) Create a copy of the recipe as a backup",
                Do: "na Correct! Well done!",
                onChosen: () => {
                    updateScore();
                    playCorrectSound()
                    incrementCorrect()
                }
            },
            B: {
                Text: "B) Store it in your brain because you probably won't forget",
                Do: "na Incorrect...",
                onChosen: () => {
                  playIncorrectSound()
                }
            },
            C: {
                Text: "C) Ask your coworker to remember it for you",
                Do: "na Incorrect...",
                onChosen: () => {
                  playIncorrectSound()
                }
            },
            D: {
                Text: "D) Nothing, you won't ever need to refer to an old recipe",
                Do: "na Incorrect...",
                onChosen: () => {
                  playIncorrectSound()
                }
            },
        },
    },
    {
      Choice: {
          'Dialog': 'Quiz Question 2: If you want your fellow chef to modify your recipe, what is the safest option?',
          A: {
              Text: "A) Let them overwrite your recipe",
              Do: "na Incorrect...",
              onChosen: () => {
                playIncorrectSound()
              }
          },
          B: {
              Text: "B) Let them copy the recipe and then make modifications on their copy",
              Do: "na Correct! Well done!",
              onChosen: () => {
                  updateScore();
                  playCorrectSound()
                  incrementCorrect()
              }
          },
          C: {
              Text: "C) Don't let them modify your recipe at all, your recipe is perfect",
              Do: "na Incorrect...",
              onChosen: () => {
                playIncorrectSound()
              }
          },
          D: {
              Text: "D) Yell at them because you feel insulted",
              Do: "na Incorrect...",
              onChosen: () => {
                playIncorrectSound()
              }
          },
      },
  },
  {
    Choice: {
        'Dialog': 'Quiz Question 3: In cases of a fire, earthquake, or other event causing the kitchen to be destroyed, where should you keep your backup recipes?',
        A: {
            Text: "A) In the kitchen.",
            Do: "na Incorrect...",
            onChosen: () => {
              playIncorrectSound()
            }
        },
        B: {
            Text: "B) Nowhere, you'll probably remember.",
            Do: "na Incorrect...",
            onChosen: () => {
              playIncorrectSound()
            }
        },
        C: {
            Text: "C) Online and in the kitchen.",
            Do: "na Correct! Well done!",
            onChosen: () => {
                updateScore();
                playCorrectSound()
                incrementCorrect()
            }
        },
        D: {
            Text: "D) Online.",
            Do: "na Incorrect...",
            onChosen: () => {
              playIncorrectSound()
            }
        },
    },
},
{
  Choice: {
      'Dialog': 'Quiz Question 4: Why would you want to store a copy of your recipe?',
      A: {
          Text: "A) In case new versions aren't as nice",
          Do: "na Incorrect...",
          onChosen: () => {
            playIncorrectSound()
          }
      },
      B: {
          Text: "B) In case you lose the recipe",
          Do: "na Incorrect...",
          onChosen: () => {
            playIncorrectSound()
          }
      },
      C: {
          Text: "C) In case your fellow chefs want to try it",
          Do: "na Incorrect...",
          onChosen: () => {
            playIncorrectSound()
          }
      },
      D: {
          Text: "D) All above",
          Do: "na Correct! Well done!",
          onChosen: () => {
              updateScore();
              playCorrectSound()
              incrementCorrect()
          }
      },
  },
},
"show character chef welcome center with fadeIn",
      "chef you have answered {{temp_score}} out of 4 questions correctly!",
      function () {
        monogatari.storage({temp_score: 0});
        return true;
      },
      "chef It's nice to see that you have practiced these questions again, keep working hard!",
      "hide character chef with fadeOut",
      "jump GameStart",
    ]
  }),
];
