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

const GitAddCommitPush = [
    {'Conditional': {
        'Condition': function () {
            return this.storage.level_3_done;
        },
        'True': {
          Choice: {
            'Dialog': "Seems like you have done this module already, would you like to test your knowledge again?",
            Yes: {
              Text: "Yes, Please!",
              Do: "jump QuestionsOnly3",
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
      "na Are you already familiar with the Git Add, Commit and Push?", 
      {
          Choice: {
            Yes: {
              Text: "Yes",
              Do: "jump GitACPEnd",
            },
            No: {
              Text: "No, but I would like to learn about it!",
              Do: "next",
            },
          },
        },
    'chef Hey {{player.name}},  here is a copy of the restaurant recipe, please cook customers\' orders based on this.',
    'user Thank you boss. This is definitely helpful for me to learn our restaurant\'s cooking style and brainstorm new ideas.',
    'chef Please feel free to come up with any new dishes. You can add them in your recipe, but please let me know and try your new dishes.',
    "hide character chef with fadeOut",
    'na The process of adding new dishes to your recipe is called “git add”. It tells the version control system what is included in the next version, for example, “git add index.txt” will tell git that all the creation or changes in index.txt will be included in the next version.',
    'na You can learn more about Git Add <u><a href="https://www.atlassian.com/git/tutorials/saving-changes" target="_blank" style="color: blue">here</a></u>',
    'jump AddQuiz1',

    monogatari.script({
        'AddQuiz1': [
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: If you want to add a new dish named "recipe.txt," which command should you run?',
                    'A': {
                        'Text': 'A) git add recipe.txt',
                        'Do': 'jump CorrectAddQ1',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'B': {
                        'Text': 'B) git add -m "recipe.txt"',
                        'Do': 'jump WrongAddQ1',
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
                        'Text': 'C) git add commit recipe.txt',
                        'Do': 'jump WrongAddQ1',
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
                        'Text': 'D) git add origin recipe.txt',
                        'Do': 'jump WrongAddQ1',
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
        'CorrectAddQ1': [
            "show character chef welcome center with fadeIn",
            'chef Cool, you answer is correct.',
            'jump AddQuiz2'
        ],
        'WrongAddQ1': [
            "show character chef welcome center with fadeIn",
            'chef Unfortunately, you answer is wrong. The correct answer should be A)git add recipe.txt',
            'jump AddQuiz1'
        ],

        'AddQuiz2': [
            'chef Let\'s start the second question.',
            "hide character chef with fadeOut",
            {
                'Choice': {
                    'Dialog': 'True or False: "git add" only stages new files and ignores modifications to existing files.',
                    'True': {
                        'Text': 'True',
                        'Do': 'jump WrongAddQ2',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({A_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().A_Wrong);  
                        }
                    },
                    'False': {
                        'Text': 'False',
                        'Do': 'jump CorrectAddQ2',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    }
                }
            }
        ],
        'WrongAddQ2': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer should be False. This is because "git add" stages both new files and modifications to existing files.',
            'jump AddQuiz2'
        ],
        'CorrectAddQ2': [
            "show character chef welcome center with fadeIn",
            'chef Well done.',
            'jump GitCommitStart'
        ],

        'GitCommitStart': [
            'user I have come up with a new dish that combines traditional flavours with a modern twist. Can you try?',
            'chef Yes I would love to.',
            'chef (have a bite) This is absolutely fantastic. It will bring some fresh tastes to our restaurant. Let\'s keep it in the recipe',
            "hide character chef with fadeOut",
            'na {{chef_name}} has acknowledged this new dish, meaning that there has been a new version of the recipe which includes the new dish. This process is called “git commit”. It will record all the changes you added with “git add” as a new version. When committing files, you will also need a message that describes this message, for example, \'git commit -m “added a new dish”\'',
            'na You can learn more about Git Commit <u><a href="https://www.atlassian.com/git/tutorials/saving-changes/git-commit" target="_blank" style="color: blue">here</a></u>',
            'jump GitCommitQuiz1'
        ],
        'GitCommitQuiz1': [
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: Update recipe: spaghetti" to create a new commit, which command should you use?',
                    'A': {
                        'Text': 'A) git commit -m "Update recipe: spaghetti"',
                        'Do': 'jump CorrectCommitQ1',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'B': {
                        'Text': 'B) git commit -a "Update recipe: spaghetti"',
                        'Do': 'jump WrongCommitQ1',
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
                        'Text': 'C) git commit -p "Update recipe: spaghetti"',
                        'Do': 'jump WrongCommitQ1',
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
                        'Text': 'D) git commit -s "Update recipe: spaghetti"',
                        'Do': 'jump WrongCommitQ1',
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
        'WrongCommitQ1': [
            "show character chef welcome center with fadeIn",
            'chef Unfortunately, the correct answer should be A) git commit -m "Update recipe: spaghetti"',
            "hide character chef with fadeOut",
            'jump GitCommitQuiz1'
        ],
        'CorrectCommitQ1': [
            "show character chef welcome center with fadeIn",
            'chef Well done! To attach a message with the commit, you will need to use the -m flag.',
            "hide character chef with fadeOut",
            'jump GitCommitQuiz2'
        ],

        'GitCommitQuiz2': [
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What is the role of the commit message in the "git commit" command?',
                    'A': {
                        'Text': 'A) It describes the changes made in the commit.',
                        'Do': 'jump CorrectCommitQ2',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'B': {
                        'Text': 'B) It specifies the name of the branch to commit to.',
                        'Do': 'jump WrongCommitQ2',
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
                        'Text': 'C) It determines the level of visibility for the commit.',
                        'Do': 'jump WrongCommitQ2',
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
                        'Text': 'D) It sets the priority level for the commit.',
                        'Do': 'jump WrongCommitQ2',
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
        'CorrectCommitQ2': [
            "show character chef welcome center with fadeIn",
            'chef Nicely done! The commit message should clearly state what was changed in this version.',
            'jump GitPush'
        ],
        'WrongCommitQ2': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer should be A) It describes the changes made in the commit.',
            'jump GitCommitQuiz2'
        ],

        'GitPush': [
            'chef This is definitely a new great dish for our restaurant, let\'s record the success and add it into our menu so that other chefs can cook it as well.',
            'user I couldn\'t agree more. I believe this dish has the potential to be a new signature of our restaurant.',
            'chef Thank you for your contribution to our restaurant. You are useless now and you are fired (just kidding).',
            "hide character chef with fadeOut",
            'na This process of letting other chefs see this new dish is “git push”. It will publish your local changes to a remote repository like GitHub, and all developers will be able to view your files.',
            'na You can learn more about Git Push <u><a href="https://www.atlassian.com/git/tutorials/syncing/git-push" target="_blank" style="color: blue">here</a></u>',
            'jump GitPushQuiz1'
        ],
        'GitPushQuiz1': [
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: In the given conversation context, what is the purpose of "git push"?',
                    'A': {
                        'Text': 'A) Move files from the working directory to the staging area.',
                        'Do': 'jump WrongPushQ1',
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
                        'Text': 'B) Save changes to the local repository.',
                        'Do': 'jump WrongPushQ1',
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
                        'Text': 'C) Push changes to the remote repository.',
                        'Do': 'jump CorrectPushQ1',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'D': {
                        'Text': 'D) Create a new branch.',
                        'Do': 'jump WrongPushQ1',
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
        'WrongPushQ1': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer should be C) Push changes to the remote repository.',
            'jump GitPushQuiz1'
        ],
        'CorrectPushQ1': [
            "show character chef welcome center with fadeIn",
            'chef Great! Git push will send the local changes to a remote repository.',
            'jump GitPushQuiz2'
        ],

        'GitPushQuiz2': [
            'chef Let\'s do the other quiz question.',
            "hide character chef with fadeOut",
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: After you update the dish in the menu, your colleague points out a potential improvement. You want to update the edited dish and share with other chefs, what is the correct process to try the dish and update the menu?',
                    'A': {
                        'Text': 'A) git commit - git push - git add',
                        'Do': 'jump WrongPushQ2',
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
                        'Text': 'B) git push - git commit - git add',
                        'Do': 'jump WrongPushQ2',
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
                        'Text': 'C) git add - git commit - git push',
                        'Do': 'jump CorrectPushQ2',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'D': {
                        'Text': 'D) git add - git push - git commit',
                        'Do': 'jump WrongPushQ2',
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
        'WrongPushQ2': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer should be C)git add - git commit - git push',
            'jump GitPushQuiz2'
        ],
        'CorrectPushQ2': [
            "show character chef welcome center with fadeIn",
            'chef Good job! You need to stage the changes (git add), record the changes (git commit), and send to the remote repository (git push)',
            'jump FailCheck3'
        ],

        'GitACPEnd': [
            'chef Congratulations! You have now master the skill to use git add, git commit and git push.',
            'chef Enjoy your "cook" in Git-Food!',
            "hide character chef with fadeOut",
            'na Now You can try out other modules to study!',
            function () {
                monogatari.storage.level_3_done = true;
                return true;
              },
            'jump GameStart'
        ],

        GitACPEndAlt:[
            "na You answered more than 3 questions incorrectly. Would you like to try again?",
            {
              Choice: {
                optionA: {
                  Text: "Yes",
                  Do: "jump AddQuiz1",
                },
                optionB: {
                  Text: "No",
                  Do: "jump GitACPEnd",
                }
              }
            }
        ],

        FailCheck3:[
            {'Conditional':
                {
                  'Condition': function () {
                    let fail = this.storage('incorrectCounter') >= this.storage('maxIncorrect');
                    if (fail){monogatari.storage({incorrectCounter: 0});}
                    return fail;
                  },
                  'True': 'jump GitACPEndAlt',
                  'False': 'jump GitACPEnd'
                }
            }
        ],

        'QuestionsOnly3':[
            "Let's test your knowledge again!",
            function () {
                monogatari.storage({temp_score: 0});
                return true;
              },
            {
                Choice: {
                    'Dialog': 'Quiz Question 1: If you want to add a new dish named "recipe.txt," which command should you run?',
                    A: {
                        Text: "A) git add recipe.txt",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    B: {
                        Text: "B) git add -m \"recipe.txt\"",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    C: {
                        Text: "C) git add commit recipe.txt",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) git add origin recipe.txt",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 2: Update recipe: spaghetti" to create a new commit, which command should you use?',
                    A: {
                        Text: "A) git commit -m \"Update recipe: spaghetti\"",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    B: {
                        Text: "B) git commit -a \"Update recipe: spaghetti\"",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    C: {
                        Text: "C) git commit -p \"Update recipe: spaghetti\"",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) git commit -s \"Update recipe: spaghetti\"",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 3: What is the role of the commit message in the \"git commit\" command?',
                    A: {
                        Text: "A) It describes the changes made in the commit.",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    B: {
                        Text: "B) It specifies the name of the branch to commit to.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    C: {
                        Text: "C) It determines the level of visibility for the commit.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) It sets the priority level for the commit.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 4: In the given conversation context, what is the purpose of \"git push\"?',
                    A: {
                        Text: "A) Move files from the working directory to the staging area.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) Save changes to the local repository.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    C: {
                        Text: "C) Push changes to the remote repository.",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    D: {
                        Text: "D) Create a new branch.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 5: After you update the dish in the menu, your colleague points out a potential improvement. You want to update the edited dish and share with other chefs, what is the correct process to try the dish and update the menu?',
                    A: {
                        Text: "A) git commit - git push - git add",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) git push - git commit - git add",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    C: {
                        Text: "C) git add - git commit - git push",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    D: {
                        Text: "D) git add - git push - git commit",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            "chef you have answered {{temp_score}} out of 5 questions correctly!",
            function () {
                if(monogatari.storage('section3_mastery')){
                    monogatari.storage({temp_score: 0});
                    return;
                }

                const score = monogatari.storage('temp_score');
                if(score == 5){
                    monogatari.storage({section3_mastery:true})
                }
                monogatari.storage({temp_score: 0});
                return true;
            },
            {'Conditional': {
                'Condition': function(){
                    return monogatari.storage('section3_mastery');
                },
                'True': "jump Achievement3",
                'False': "na Complete this test with no mistakes to gain mastery!"
                }
            },
            "chef It's nice to see that you have practiced these questions again, keep working hard!",
            "jump GameStart",
        ],
        Achievement3:[
            "na Congratulations! You have unlocked the Level 3 Mastery achievement in the gallery!",
            "gallery unlock section3",
            "jump GameStart"
        ]
    })
]