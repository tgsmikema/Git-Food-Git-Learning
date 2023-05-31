
function incrementIncorrect(){
    let incorrectCounter  = monogatari.storage('incorrectCounter');
    incorrectCounter++;
    monogatari.storage({incorrectCounter: incorrectCounter});
}

monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});

function incrementCorrect(){
    let correctCounter = monogatari.storage('temp_score');
    correctCounter++;
    monogatari.storage({temp_score: correctCounter});
  }


const GitClonePull = [
    {'Conditional': {
        'Condition': function () {
            return this.storage.level_2_done;
        },
        'True': {
          Choice: {
            'Dialog': "Seems like you have done this module already, would you like to test your knowledge again?",
            Yes: {
              Text: "Yes, Please!",
              Do: "jump QuestionsOnly2",
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
    'chef Hi, {{player.name}}! I hope you’ve gotten situated and ready to start work.',
    'user Yes Chef {{chef_name}}. I am ready and eager.',
    'chef Good. Your first task is to prepare our famous Fish and Chips.',
    'user Of course chef. Where can I find the recipe for it?',
    'chef All of our recipes are stored in our central recipe book.',
    'user Okay chef. I’ll start making the dish.',
    'chef Alright. If you have any questions, you can ask our sous chef {{sous_chef_name}}',
    'user Hey {{sous_chef_name}}, it\'s pretty difficult to refer to the central recipe book all the time. Is there an easier way?',
    "hide character chef with fadeOut",
    "show character sous welcome center with fadeIn",
    'sous Hi {{player.name}}, of course there is a much easier way. Just make your own personal recipe book.',
    'user But that would take a long time!',
    'sous Not with the power of “git clone”. With it, you can instantly have your very own recipe book you can use.',
    'user Wow that’s so cool.',
    'sous Not only that, now you can change your own recipe book however you want. You can make your own notes about recipes, you can even add or change recipes. None of it will affect the central recipe book, not unless you want to.',
    'user That’s awesome! Thank you so much {{sous_chef_name}}.',
    'sous Anytime {{player.name}}',
    'user I’m going to finish this fish and chips now. See you around.',
    'sous See you around {{player.name}}',
    "hide character sous with fadeOut",
    'na A new chef is hired at the restaurant. The new chef needs to know what dishes are served at the restaurant and how to make them. Thankfully, there is a public recipe book. Using the magical spell ‘git clone’, the new chef now has his own private copy of the recipe book.',
    'na Git clone is used to create a local copy of a repository, meaning that you have a copy of the original repository in your computer. You can use this copy to make changes in the repository, or simply use the software in your local machine',
    'na Cloning a repository is not like copying some files. In addition to copying the files, you get access to the history of the repository, and many other features we will discuss in the coming chapters.',
    'na You can learn more about Git Clone <u><a href="https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone" target="_blank" style="color: blue">here</a></u>',
    'jump Quiz1',

    monogatari.script({
        'Quiz1':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: What happens when you cast  "git clone" on the central recipe book?',
                    'A': {
                        'Text': 'A) You get your own recipe book',
                        'Do': 'jump CorrectQ1',
                        onChosen: () => {
                            playCorrectSound()
                            updateScore();
                            monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'B': {
                        'Text': 'B) You change the central recipe book',
                        'Do': 'jump WrongQ1',
                        onChosen: () => {
                            playIncorrectSound()
                            incrementIncorrect();
                            monogatari.storage({B_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().B_Wrong);  
                        }
                    },
                    'C': {
                        'Text': 'C)  Your personal recipe book disappears',
                        'Do': 'jump WrongQ1',
                        onChosen: () => {
                            playIncorrectSound()
                            incrementIncorrect();
                            monogatari.storage({C_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().C_Wrong);
                        }
                    },
                    'D': {
                        'Text': 'D) You steal the central recipe book',
                        'Do': 'jump WrongQ1',
                        onChosen: () => {
                            playIncorrectSound()
                            incrementIncorrect();
                            monogatari.storage({D_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().D_Wrong);
                        }
                    },
                },
            }
        ],
        'CorrectQ1' : [
            "show character sous welcome center with fadeIn",
            'sous Well done! Your answer is correct! "Git clone" can create you a personal recipe book from the central recipe book',
            "hide character sous with fadeOut",
            'jump Quiz2',
        ],
        'WrongQ1': [
            "show character sous welcome center with fadeIn",
            'sous Oops! The correct answer is A) You get your own recipe book. "Git clone" can create you a personal recipe book from the central recipe book',
            "hide character sous with fadeOut",
            'jump Quiz1',
        ],

        'Quiz2':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: Why would you want your own recipe book instead of working with the central recipe book?',
                    'A': {
                        'Text': 'A) Make personal changes without affecting the central recipe book',
                        'Do': 'jump WrongQ2',
                        onChosen: () => {
                            playIncorrectSound()
                            incrementIncorrect();
                            monogatari.storage({A_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().A_Wrong);
                        }
                    },
                    'B': {
                        'Text': 'B) Refer to the recipes without needing to look in the central recipe book',
                        'Do': 'jump WrongQ2',
                        onChosen: () => {
                            playIncorrectSound()
                            incrementIncorrect();
                            monogatari.storage({B_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().B_Wrong);    
                        }
                    },
                    'C': {
                        'Text': 'C) Add experimental recipes that aren’t fully taste tested yet',
                        'Do': 'jump WrongQ2',
                        onChosen: () => {
                            playIncorrectSound()
                            incrementIncorrect();
                            monogatari.storage({C_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().C_Wrong); 
                        }
                    },
                    'D': {
                        'Text': 'D) All of the above.',
                        'Do': 'jump CorrectQ2',
                        onChosen: () => {
                          updateScore();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                          playCorrectSound()
                        }
                    },
                },
            }
        ],
        'CorrectQ2' : [
            "show character sous welcome center with fadeIn",
            'sous Well done! Your answer is correct! All the answers given are benefits of working with your personal recipe book. You can change and use your personal recipe book without worrying about the central recipe book.',
            "hide character sous with fadeOut",
            'jump EndOfClone',
        ],
        'WrongQ2': [
            "show character sous welcome center with fadeIn",
            'sous Oops! The correct answer is D) All of the above.  All the answers given are benefits of working with your personal recipe book. You can change and use your personal recipe book without worrying about the central recipe book.',
            "hide character sous with fadeOut",
            'jump Quiz2',
        ],

        'EndOfClone':[
            "show character sous welcome center with fadeIn",
            'sous Congratulations, {{player.name}}! You\'ve learned how to git clone.Happy learning',
            "hide character sous with fadeOut",
            'jump StartPull'
        ],

        'StartPull':[
            "show character chef welcome center with fadeIn",
            'chef Welcome back! Hey {{player.name}}, did you hear about sous chef {{sous_chef_name}}’s new recipe?',
            'user Hi Chef {{chef_name}}. Yes, I hear it\'s selling like hotcakes.',
            'chef Yes! It\'s flying off the shelves, which is why I’m here. We can’t keep up with the demand. We need you to make them as well.',
            'user Of course chef. I will start right away.',
            'chef Great. {{sous_chef_name}} has added the recipe to the central recipe book.',
            'user Okay chef.',
            'user Hi {{sous_chef_name}}. Your recipe is getting popular huh?',
            "hide character chef with fadeOut",
            "show character sous welcome center with fadeIn",
            'sous Hey {{player.name}}. Yes, it’s a great success.',
            'user So much so that I’ve been asked to make them as well. The problem is that my recipe book doesn’t have your recipe in it, because it is new. Do I need to copy the central recipe book like when I first started?',
            'sous Of course not. That would mean that you’d have to throw away your old recipe book. That seems a waste. You can use the power of “Git pull” to get all the newest changes added to your personal recipe book.',
            'user That’s pretty great. So I can use my personal recipe book just like before and it will now have all the newest recipes in it?',
            'sous Yes, that’s right.',
            'user Nice! I’m going to make some more of your famous hotcakes.',
            'sous Me too. See you around.',
            "hide character sous with fadeOut",
            'na Danny has made a brand new recipe (sandwiches) and its all the rage. People are coming from all over the place to try the new recipe. The restaurant can’t keep up with just Danny making sandwiches.',
            'na Everybody needs to learn how to make sandwiches. Danny has shared the recipe to the public recipe book, but unfortunately, you have a clone of the old recipe book. Not to worry, the power of ‘git pull’ is here to help',
            'na Using git pull, you are able to access the latest recipes in the public recipe book.',
            'na Git pull is used when the central repository has new changes and you want to add them to your local repository. It will fetch and merge the changes related to the repository.',
            'na You can learn more about Git Pull <u><a href="https://www.atlassian.com/git/tutorials/syncing/git-pull" target="_blank" style="color: blue">here</a></u>',
            'jump Quiz1ForPull'
        ],
        'Quiz1ForPull':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: What happens when you use "git pull" for your recipe book?',
                    'A': {
                        'Text': 'A) Sends your changes to the central recipe book',
                        'Do': 'jump WrongQ1ForPull',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({A_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().A_Wrong);
                        }
                    },
                    'B': {
                        'Text': 'B) Add new stuff in the central recipe book to your personal recipe book',
                        'Do': 'jump CorrectQ1ForPull',
                        onChosen: () => {
                            playCorrectSound();
                            updateScore();
                            monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false}); 
                        }
                    },
                    'C': {
                        'Text': 'C) You get a new personal recipe book',
                        'Do': 'jump WrongQ1ForPull',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({C_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().C_Wrong);
                        }
                    },
                    'D': {
                        'Text': 'D) Your personal recipe book disappears',
                        'Do': 'jump WrongQ1ForPull',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({D_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().D_Wrong);
                        }
                    },
                },
            }
        ],
        'CorrectQ1ForPull' : [
            "show character sous welcome center with fadeIn",
            'sous Well done! Your answer is correct! When you use "git pull", it checks the central recipe book and adds all the new things to your personal recipe book.',
            "hide character sous with fadeOut",
            'jump Quiz2ForPull',
        ],
        'WrongQ1ForPull': [
            "show character sous welcome center with fadeIn",
            'sous Oops! The correct answer is B) Add new stuff in the central recipe book to your personal recipe book. When you use "git pull", it checks the central recipe book and adds all the new things to your personal recipe book.',
            "hide character sous with fadeOut",
            'jump Quiz1ForPull',
        ],

        'Quiz2ForPull':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: Can you use “git clone” to replace “git pull”?',
                    'A': {
                        'Text': 'A) Yes, it is exactly the same',
                        'Do': 'jump WrongQ2ForPull',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({A_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().A_Wrong);
                        }
                    },
                    'B': {
                        'Text': 'B) No, you can’t replace it',
                        'Do': 'jump WrongQ2ForPull',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({B_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().B_Wrong);
                        }
                    },
                    'C': {
                        'Text': 'C) Yes, but it would require additional steps',
                        'Do': 'jump CorrectQ2ForPull',
                        onChosen: () => {
                            playCorrectSound();
                            updateScore();
                            monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },

                    'D': {
                        'Text': 'D) I don’t know',
                        'Do': 'jump WrongQ2ForPull',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({D_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().D_Wrong);  
                        }
                    },
                },
            }
        ],
        'CorrectQ2ForPull' : [
            "show character sous welcome center with fadeIn",
            'sous Well done! Your answer is correct! Technically, you can throw away your old recipe book and use “Git clone” to create a new recipe book when you need to use “Git pull”, but this is very cumbersome and should not be done.',
            "hide character sous with fadeOut",
            'jump FailCheck',
        ],
        'WrongQ2ForPull': [
            "show character sous welcome center with fadeIn",
            'sous Oops! The correct answer is C) Yes, but it would require additional steps. Technically, you can throw away your old recipe book and use “Git clone” to create a new recipe book when you need to use “Git pull”, but this is very cumbersome and should not be done.',
            "hide character sous with fadeOut",
            'jump Quiz2ForPull',
        ],
        'EndOfPull':[
            "show character chef welcome center with fadeIn",
            'chef Congratulations! You have now master the skill to use git clone,and git pull.',
            'chef Enjoy your "cook" in Git-Food!',
            "hide character chef with fadeOut",
            'na Now You can try out other modules to study!',
            function () {
                monogatari.storage.level_2_done = true;
                return true;
              },
            'jump GameStart'
        ],
        EndOfPullAlt:[
            "na You answered more than 3 questions incorrectly. Would you like to try again?",
            {
              Choice: {
                optionA: {
                  Text: "Yes",
                  Do: "jump Quiz1",
                },
                optionB: {
                  Text: "No",
                  Do: "jump EndOfPull",
                }
              }
            }
        ],
        FailCheck:[
            {'Conditional':
                {
                  'Condition': function () {
                    let fail = this.storage('incorrectCounter') >= this.storage('maxIncorrect');
                    if (fail){monogatari.storage({incorrectCounter: 0});}
                    return fail;
                  },
                  'True': 'jump EndOfPullAlt',
                  'False': 'jump EndOfPull'
                }
            }
        ],
        'QuestionsOnly2':[
            "Let's test your knowledge again!",
            function () {
                monogatari.storage({temp_score: 0});
                return true;
              },
            {
                Choice: {
                    'Dialog': 'Quiz Question 1: What happens when you cast  "git clone" on the central recipe book?',
                    A: {
                        Text: "A) You get your own recipe book",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound();
                            incrementCorrect();
                        }
                    },
                    B: {
                        Text: "B) You change the central recipe book",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                    C: {
                        Text: "C) Your personal recipe book disappears",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                    D: {
                        Text: "D) You steal the central recipe book",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 2: Why would you want your own recipe book instead of working with the central recipe book?',
                    A: {
                        Text: "A) Make personal changes without affecting the central recipe book",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                    B: {
                        Text: "B) Refer to the recipes without needing to look in the central recipe book",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                    C: {
                        Text: "C) Add experimental recipes that aren’t fully taste tested yet",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                    D: {
                        Text: "D) All of the above",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound();
                            incrementCorrect();
                        }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 3: What happens when you use "git pull" for your recipe book?',
                    A: {
                        Text: "A) Sends your changes to the central recipe book",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                    B: {
                        Text: "B) Add new stuff in the central recipe book to your personal recipe book",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound();
                            incrementCorrect();
                        }
                    },
                    C: {
                        Text: "C) You get a new personal recipe book",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                    D: {
                        Text: "D) Your personal recipe book disappears",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 4: Can you use “git clone” to replace “git pull”?',
                    A: {
                        Text: "A) Yes, it is exactly the same",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                    B: {
                        Text: "B) No, you can’t replace it",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                        }
                    },
                    C: {
                        Text: "C) Yes, but it would require additional steps",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound();
                            incrementCorrect(); 
                          }
                    },
                    D: {
                        Text: "D) I don’t know",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound();
                          }
                    },
                },
            },
            "chef you have answered {{temp_score}} out of 4 questions correctly!",
            function () {
                if(monogatari.storage('section2_mastery')){
                    monogatari.storage({temp_score: 0});
                    return;
                }

                const perfect = monogatari.storage('temp_score') == 4;
                if(perfect){
                    monogatari.storage({section2_mastery:true})
                }
                monogatari.storage({temp_score: 0});
                return true;
              },
              {'Conditional': {
                'Condition': function(){
                  return this.storage.section1_mastery;
                },
                'True': "jump Achievement2"
            }},
            "chef It's nice to see that you have practiced these questions again, keep working hard!",
            "jump GameStart",
        ],
        Achievement2:[
            "na Congratulations! You have unlocked the Section 1 Mastery achievement in the gallery!",
            "gallery unlock section1",
            "jump GameStart"
        ]
    })
]







