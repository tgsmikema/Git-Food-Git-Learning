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
              Text: "No, Thanks",
              Do: "jump GameStart",
            },
          },
        },
        'False': 'clear',
      }},
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
                            playIncorrectSound()
                        }
                    },
                    'B': {
                        'Text': 'B) git branch branch_name',
                        'Do': 'jump BranchCorrectQ1',
                        onChosen: () => {
                          updateScore()
                          playCorrectSound()
                        }
                    },
                    'C': {
                        'Text': 'C)  git checkout branch_name',
                        'Do': 'jump BranchWrongQ1',
                        onChosen: () => {
                            playIncorrectSound()
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
            'jump BranchQuiz2',
        ],
        'BranchQuiz2':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What is the purpose of Git branching?',
                    'A': {
                        'Text': 'A) To experiment with new features without affecting the main codebase',
                        'Do': 'jump BranchCorrectQ2',
                        onChosen: () => {
                          updateScore()
                          playCorrectSound()
                        }
                    },
                    'B': {
                        'Text': 'B) To create multiple copies of a repository',
                        'Do': 'jump BranchWrongQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'C': {
                        'Text': 'C) To synchronise changes between multiple repositories',
                        'Do': 'jump BranchWrongQ2',
                        onChosen: () => {
                            playIncorrectSound()
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
            'jump EndOfBranch',
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
                            playIncorrectSound()
                        }
                    },
                    'B': {
                        'Text': 'B) Switches to the branch with the given name',
                        'Do': 'jump CheckoutCorrectQ1',
                        onChosen: () => {
                          updateScore()
                          playCorrectSound()
                        }
                    },
                    'C': {
                        'Text': 'C) Deletes the branch with the given name',
                        'Do': 'jump CheckoutWrongQ1',
                        onChosen: () => {
                            playIncorrectSound()
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
            'jump CheckoutQuiz2',
        ],

        'CheckoutQuiz2':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What happens to the changes made on a branch when you switch to a different branch using git checkout?',
                    'A': {
                        'Text': 'A) The changes are discarded',
                        'Do': 'jump CheckoutWrongQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'B': {
                        'Text': 'B) The changes are automatically merged into the new branch',
                        'Do': 'jump CheckoutWrongQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'C': {
                        'Text': 'C) The changes are preserved on the original branch',
                        'Do': 'jump CheckoutCorrectQ2',
                        onChosen: () => {
                          updateScore()
                          playCorrectSound()
                        }
                    },
                },
            }
        ],
        'CheckoutCorrectQ2' : [
            "show character chef welcome center with fadeIn",
            'chef Well done! Your answer is correct! When you switch to a different branch using git checkout, the changes made on the current branch that have not been committed or staged will be preserved in the working directory and staging area',
            "hide character chef with fadeOut",
            'jump EndOfCheckout',
        ],
        'CheckoutWrongQ2': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is C) The changes are preserved on the original branch. When you switch to a different branch using git checkout, the changes made on the current branch that have not been committed or staged will be preserved in the working directory and staging area',
            "hide character chef with fadeOut",
            'jump EndOfCheckout',
        ],
        'EndOfCheckout':[
            "show character chef welcome center with fadeIn",
            'chef Congratulations! You have now master the skill to use git branch,and git checkout.',
            'chef Enjoy your "cook" in Git-Food!',
            "hide character chef with fadeOut",
            'na Now You can try out other modules to study!',
            function () {
                monogatari.storage.level_4_done = true;
                return true;
              },
            'jump GameStart'
        ],

        'QuestionsOnly4':[
            "Let's test your knowledge again!",
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

            "chef It's nice to see that you have practiced these questions again, keep working hard!",
            "jump GameStart",
        ]
    })
]