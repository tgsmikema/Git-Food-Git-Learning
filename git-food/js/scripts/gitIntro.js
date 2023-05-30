function incrementIncorrect(){
  let incorrectCounter  = monogatari.storage('incorrectCounter');
  incorrectCounter++;
  monogatari.storage({incorrectCounter: incorrectCounter});
}

let currentScript = "GitIntro1";
let correct = true;
monogatari.storage({nextScript: currentScript});

const GitIntro = [
  "chef Before you can begin creating recipes with us, we need to teach you how the team saves their versions of recipes.",
  "na Are you familiar with the importance of Git?",
  {
    Choice: {
      Yes: {
        Text: "Yes, I know git is really important",
        Do: "jump GitIntroEnd",
      },
      No: {
        Text: "No, but I really wanna know",
        Do: "jump GitIntro1",
      },
    },
  },
  monogatari.script({
    GitIntro1: [
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
            Text: "Create a copy of the recipe as a backup",
            Do: "na Excellent! You should create a copy of your version as you should not rely on your own or other people's memories",
            onChosen: () => {
              updateScore();
              monogatari.storage({nextScript: "GitIntro2"});
              correct=true;
            }
          },
          B: {
            Text: "Store it in your brain because you probably won't forget",
            onChosen: function(){
              incrementIncorrect();
              correct=false;
            },
            Do: "na Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories",
          },
          C: {
            Text: "Ask your coworker to remember it for you",
            onChosen: function(){
              incrementIncorrect();
              correct=false;
            },
            Do: "na Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories",
          },
          D: {
            Text: "Nothing, you won't ever need to refer to an old recipe",
            onChosen: function(){
              incrementIncorrect();
              correct=false;
            },
            Do: "na Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories",
          },
        },
      },
      "jump FailCheck",
    ],
    FailCheck:[
      {'Conditional':
          {
            'Condition': function () {
              if(!correct){
                this.storage('nextScript') = currentScript;
              }
              let fail = this.storage('incorrectCounter') == this.storage('maxIncorrect');
              if (fail){monogatari.storage({incorrectCounter: 0});}
              return fail;
            },
            'True': 'jump GitIntro1',
            'False': 'jump {{nextScript}}'
          }
      }
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
            Text: "Let them overwrite your recipe",
            Do: "chef That seems not quite right. You don't want to let people overwrite your work without creating backups because their changes may not be desirable",
            onChosen: () => {
              incrementIncorrect();
            }
          },
          option2: {
            Text: "Let them copy the recipe and then make modifications on their copy",
            Do: "chef Well done!",
            onChosen: () => {
              updateScore();
              monogatari.storage({nextScript: "GitIntro3"});
            }
          },
          option3: {
            Text: "Don't let them modify your recipe at all, your recipe is perfect",
            Do: "chef That seems not quite right. Working in a team often requires your teammates to make changes to what you have made, so it does not make sense to disallow them from modifying your work.",
            onChosen: () => {
              incrementIncorrect();
            }
          },
          option4: {
            Text: "Yell at them because you feel insulted",
            Do: "chef Nah let's be nice. We should allow them to copy the receipe and make changes",
            onChosen: () => {
              incrementIncorrect();
            }
          },
        },
      },
      "jump FailCheck",
    ],

    GitIntro3: [
      "chef We save our recipes both online and in the kitchen.",
      "chef If the physical copies of the recipes get lost, we can rewrite those recipes back into a physical version from the online versions.",
      "chef Similarly, if we don't have an internet connection, we still have local copies. So save the changes to your recipes online and locally.",
      {
        Choice: {
          option1: {
            Text: "Nah my memory is really good so I probably won't need it.",
            Do: "chef Mate this is not just about you, we want to ensure we can get your recipes too! You're really getting on my nerves...",
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
            Text: "In the kitchen.",
            onChosen: () => {
              incrementIncorrect();
            },
            Do: "chef Nah, You wouldn't keep all your important files in one place, so having an extra online backups is a good way to store them. It also allows you to access them anywhere, any time!",
          },
          option2: {
            Text: "Nowhere, you'll probably remember.",
            onChosen: () => {
              incrementIncorrect();
            },
            Do: "chef Umm, mate, this is not just about you, we want to ensure we can get your recipes too! You're really getting on my nerves...",
          },
          option3: {
            Text: "Online and in the kitchen",
            Do: "chef Good job! You wouldn't keep all your important files in one place, so having online and local backups is a good way to store them. It also allows you to access them anywhere, any time!",
            onChosen: () => {
              updateScore();
              monogatari.storage({nextScript: "GitIntro4"});
            }
          },
          option4: {
            Text: "Online.",
            onChosen: () => {
              incrementIncorrect();
            },
            Do: "Nah, You wouldn't keep all your important files in one place, so having an extra backups is a good way to store them. It also allows you to access them anywhere, any time!",
          },
        },
      },
      "jump FailCheck",
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
            Text: "In case new versions aren't as nice",
            onChosen: () => {
              incrementIncorrect();
            },
            Do: "chef Actually you should store copies in all of these senarios",
          },
          optionB: {
            Text: "In case you lose the recipe",
            onChosen: () => {
              incrementIncorrect();
            },
            Do: "chef Actually you should store copies in all of these senarios",
          },
          optionC: {
            Text: "In case your fellow chefs want to try it",
            onChosen: () => {
              incrementIncorrect();
            },
            Do: "chef Actually you should store copies in all of these senarios",
          },
          optionD: {
            Text: "All above",
            Do: "chef Well done, you should store copies in all of these senarios",
            onChosen: () => {
              updateScore();
              monogatari.storage({nextScript: "GitIntroEnd"});
            }
          },
        },
      },
      "jump FailCheck",
    ],

    GitIntroEnd: [
      "na You now know the importance of git, let's dive into it with the next level!",
      "jump GameStart",
    ],
  }),
];
