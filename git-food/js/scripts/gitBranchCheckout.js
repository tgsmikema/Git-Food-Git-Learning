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

const GitBranchCheckout = [
    {'Conditional': {
        'Condition': function () {
            return this.storage.level_4_done;
        },
        'True': {
          Choice: {
            'Dialog': "Seems like you have done this module already, would you like to test your knowledge again?",
            Yes: {
              Text: "Yes, Please!",
              Do: "jump QuestionsOnly4",
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
      "na Are you already familiar with the Git Branch and Checkout?", 
      {
          Choice: {
            Yes: {
              Text: "Yes",
              Do: "jump EndOfCheckout",
            },
            No: {
              Text: "No, but I would like to learn about it!",
              Do: "next",
            },
          },
        },
    'na Anonymous Chef is working on his recipe for a new dish. The chef wants to make changes to the recipe and experiment, but he doesn’t want to alter the original recipe',
    'na He makes a copy of the recipe and takes it to a separate cooking station. There he can start experimenting with the recipe like adding different spices, modifying cooking times, or even introducing new ingredients.',
    'na  His original recipe remains unaffected as he is experimenting on with his new experimental recipe.',
    'na The original recipe is like the main branch. Git branch new branch is like making a copy of the original recipe and putting it elsewhere, like a new cooking station.',
    'na Git checkout existing_branch is like going to that cooking station where you can start experimenting with the recipe without affecting the main branch.',
    "show character chef welcome center with fadeIn",
    'chef  Hey, great work on the new dish the other day, it was a huge hit with the customers. You’ve got a gift in you.',
    'user  Thank you chef!',
    'chef Today, I’ve been thinking about tweaking one of our original recipes. Do you think you’re up for the task?',
    'user  I would love to! Should we get started right away?',
    "hide character chef with fadeOut",
    'na {{chef_name}} grabs a piece of paper and starts writing stuff down',
    "show character chef welcome center with fadeIn",
    'chef Let’s hold it off for now. I’ll copy down the original recipe and place it on a separate cooking station so we can experiment with it later.',
    "hide character chef with fadeOut",
    'na This “experimental” recipe can be akin to an “experimental” branch. When you want to keep the original recipe intact but want to experiment with it, we can work on it on a separate cooking station using “git branch branch-name”',
    'na You can learn more about Git Branch <u><a href="https://www.atlassian.com/git/tutorials/using-branches" target="_blank" style="color: blue">here</a></u>',
    'jump BranchQuiz1',

    monogatari.script({
        'BranchQuiz1':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: Which Git command is used to create a new branch?' +
                        'How do you create a new cooking station to experiment with a recipe?',
                    'A': {
                        'Text': 'A) git init branch_name',
                        'Do': 'jump BranchWrongQ1',
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
                        'Text': 'B) git branch branch_name',
                        'Do': 'jump BranchCorrectQ1',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'C': {
                        'Text': 'C)  git checkout branch_name',
                        'Do': 'jump BranchWrongQ1',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({C_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().C_Wrong);  
                        }
                    },
                },
            }
        ],
        'BranchCorrectQ1' : [
            "show character chef welcome center with fadeIn",
            'chef Well done! Your answer is correct! When we create a new branch, we will use the git branch command',
            "hide character chef with fadeOut",
            'jump BranchQuiz2',
        ],
        'BranchWrongQ1': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is B) git branch branch_name.  When we create a new branch, we will use the git branch command',
            "hide character chef with fadeOut",
            'jump BranchQuiz1',
        ],
        'BranchQuiz2':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What is the purpose of Git branching?',
                    'A': {
                        'Text': 'A) To experiment with new features without affecting the main codebase',
                        'Do': 'jump BranchCorrectQ2',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'B': {
                        'Text': 'B) To create multiple copies of a repository',
                        'Do': 'jump BranchWrongQ2',
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
                        'Text': 'C) To synchronise changes between multiple repositories',
                        'Do': 'jump BranchWrongQ2',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({C_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().C_Wrong);  
                        }
                    },
                },
            }
        ],
        'BranchCorrectQ2' : [
            "show character chef welcome center with fadeIn",
            'chef Well done! Your answer is correct! Branching allows multiple versions of a codebase to coexist simultaneously, enabling developers to work on different features',
            "hide character chef with fadeOut",
            'jump EndOfBranch',
        ],
        'BranchWrongQ2': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is A) To experiment with new features without affecting the main codebase. Branching allows multiple versions of a codebase to coexist simultaneously, enabling developers to work on different features',
            "hide character chef with fadeOut",
            'jump BranchQuiz2',
        ],
        'EndOfBranch':[
            "show character chef welcome center with fadeIn",
            'chef Congratulations, {{player.name}}! You\'ve learned how to git branch.Happy learning',
            "hide character chef with fadeOut",
            'jump StartCheckout'
        ],
        'StartCheckout':[
            'na {{chef_name}} comes over as you finish up the final orders of today.',
            "show character chef welcome center with fadeIn",
            'chef Hey {{player.name}}, good job today.',
            'user Thank you chef!',
            'chef Now that we have some time do you want to start working on the recipe?',
            'user Sure!',
            "hide character chef with fadeOut",
            'na The two of them head over to the extra cooking station that {{chef_name}} had set up and started experimenting with the recipe.',
            'na The process of going to the new “experimental” cooking station that was made before using “git branch” can be akin to using “git checkout branch-name”. This allows us to go to the new branch and start working on it without affecting our “original” branch, which was the original recipe.',
            'na You can learn more about Git Checkout <u><a href="https://www.atlassian.com/git/tutorials/using-branches/git-checkout" target="_blank" style="color: blue">here</a></u>',
            'jump CheckoutQuiz1'
        ],

        'CheckoutQuiz1':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: What does git checkout branch-name do?',
                    'A': {
                        'Text': 'A) Creates a new branch with the given name',
                        'Do': 'jump CheckoutWrongQ1',
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
                        'Text': 'B) Switches to the branch with the given name',
                        'Do': 'jump CheckoutCorrectQ1',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                    'C': {
                        'Text': 'C) Deletes the branch with the given name',
                        'Do': 'jump CheckoutWrongQ1',
                        onChosen: () => {
                            playIncorrectSound();
                            incrementIncorrect();
                            monogatari.storage({C_Wrong: true});
                        },
                        Clickable: function(){
                            return !(this.storage().C_Wrong);  
                        }
                    },
                },
            }
        ],
        'CheckoutCorrectQ1' : [
            "show character chef welcome center with fadeIn",
            'chef Well done! Your answer is correct! It will switches to the branch with the given name',
            "hide character chef with fadeOut",
            'jump CheckoutQuiz2',
        ],
        'CheckoutWrongQ1' : [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is B) Switches to the branch with the given name.',
            "hide character chef with fadeOut",
            'jump CheckoutQuiz1',
        ],

        'CheckoutQuiz2':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What happens to the changes made on a branch when you switch to a different branch using git checkout?',
                    'A': {
                        'Text': 'A) The changes are discarded',
                        'Do': 'jump CheckoutWrongQ2',
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
                        'Text': 'B) The changes are automatically merged into the new branch',
                        'Do': 'jump CheckoutWrongQ2',
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
                        'Text': 'C) The changes are preserved on the original branch',
                        'Do': 'jump CheckoutCorrectQ2',
                        onChosen: () => {
                          updateScore();
                          playCorrectSound();
                          monogatari.storage({A_Wrong: false, B_Wrong: false, C_Wrong: false, D_Wrong: false});
                        }
                    },
                },
            }
        ],
        'CheckoutCorrectQ2' : [
            "show character chef welcome center with fadeIn",
            'chef Well done! Your answer is correct! When you switch to a different branch using git checkout, the changes made on the current branch that have not been committed or staged will be preserved in the working directory and staging area',
            "hide character chef with fadeOut",
            'jump FailCheck',
        ],
        'CheckoutWrongQ2': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is C) The changes are preserved on the original branch. When you switch to a different branch using git checkout, the changes made on the current branch that have not been committed or staged will be preserved in the working directory and staging area',
            "hide character chef with fadeOut",
            'jump CheckoutQuiz2',
        ],
        'EndOfCheckout':[
            "show character chef welcome center with fadeIn",
            'chef Congratulations! You have now master the skill to use git branch,and git checkout.',
            'chef Enjoy your "cook" in Git-Food!',
            "hide character chef with fadeOut",
            'na Now You can try out other modules to study!',
            function () {
                monogatari.storage.level_4_done = true;
                console.log(monogatari.storage('level_4_done'));
                return true;
              },
            'jump GameStart'
        ],

        EndOfCheckoutAlt:[
            "na You answered more than 3 questions incorrectly. Would you like to try again?",
            {
              Choice: {
                optionA: {
                  Text: "Yes",
                  Do: "jump BranchQuiz1",
                },
                optionB: {
                  Text: "No",
                  Do: "jump EndOfCheckout",
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
                  'True': 'jump EndOfCheckoutAlt',
                  'False': 'jump EndOfCheckout'
                }
            }
        ],

        'QuestionsOnly4':[
            "Let's test your knowledge again!",
            function () {
                monogatari.storage({temp_score: 0});
                return true;
              },
            {
                Choice: {
                    'Dialog': 'Quiz Question 1: Which Git command is used to create a new branch?',
                    A: {
                        Text: "A) git init branch_name",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) git branch branch_name",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    C: {
                        Text: "C) git checkout branch_name",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) None of the above",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 2: What is the purpose of Git branching?',
                    A: {
                        Text: "A) To experiment with new features without affecting the main codebase",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    B: {
                        Text: "B) To create multiple copies of a repository",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    C: {
                        Text: "C) To synchronise changes between multiple repositories",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) None of the above",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 3: What does git checkout branch-name do?',
                    A: {
                        Text: "A) Creates a new branch with the given name",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) Switches to the branch with the given name",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    C: {
                        Text: "C) Deletes the branch with the given name",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) None of the above",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 4: What happens to the changes made on a branch when you switch to a different branch using git checkout?',
                    A: {
                        Text: "A) The changes are discarded",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) The changes are automatically merged into the new branch",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    C: {
                        Text: "C) The changes are preserved on the original branch",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    D: {
                        Text: "D) None of the above",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            
            "chef you have answered {{temp_score}} out of 4 questions correctly!",
            function () {
                if(monogatari.storage('section4_mastery')){
                    monogatari.storage({temp_score: 0});
                    return;
                }

                const score = monogatari.storage('temp_score');
                if(score == 4){
                    monogatari.storage({section4_mastery:true})
                }
                monogatari.storage({temp_score: 0});
                return true;
            },
            {'Conditional': {
                'Condition': function(){
                    return monogatari.storage('section4_mastery');
                },
                'True': "jump Achievement4",
                'False': "na Complete this test with no mistakes to gain mastery!"
                }
            },
            "chef It's nice to see that you have practiced these questions again, keep working hard!",
            "jump GameStart",
        ],
        Achievement4:[
            "na Congratulations! You have unlocked the Level 4 Mastery achievement in the gallery!",
            "gallery unlock section4",
            "jump GameStart"
        ]
    })
]