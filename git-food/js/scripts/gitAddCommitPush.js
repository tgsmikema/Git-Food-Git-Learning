const GitAddCommitPush = [
    'chef Hey {{player.name}},  here is a copy of the restaurant recipe, please cook customers\' orders based on this.',
    'user Thank you boss. This is definitely helpful for me to learn our restaurant\'s cooking style and brainstorm new ideas.',
    'chef Please feel free to come up with any new dishes. You can add them in your recipe, but please let me know and try your new dishes.',
    'na The process of adding new dishes to your recipe is called “git add”. It tells the version control system what is included in the next version, for example, “git add index.txt” will tell git that all the creation or changes in index.txt will be included in the next version.',
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
                          updateScore()
                        }
                    },
                    'B': {
                        'Text': 'B) git add -m "recipe.txt"',
                        'Do': 'jump WrongAddQ1'
                    },
                    'C': {
                        'Text': 'C) git add commit recipe.txt',
                        'Do': 'jump WrongAddQ1'
                    },
                    'D': {
                        'Text': 'D) git add origin recipe.txt',
                        'Do': 'jump WrongAddQ1'
                    },
                },
            }
        ],
        'CorrectAddQ1': [
            'chef Cool, you answer is correct.',
            'jump AddQuiz2'
        ],
        'WrongAddQ1': [
            'chef Unfortunately, you answer is wrong. The correct answer should be A)git add recipe.txt',
            'jump AddQuiz2'
        ],

        'AddQuiz2': [
            'chef Let\'s start the second question.',
            {
                'Choice': {
                    'Dialog': 'True or False: "git add" only stages new files and ignores modifications to existing files.',
                    'True': {
                        'Text': 'True',
                        'Do': 'jump WrongAddQ2'
                    },
                    'False': {
                        'Text': 'False',
                        'Do': 'jump CorrectAddQ2',
                        onChosen: () => {
                          updateScore()
                        }
                    }
                }
            }
        ],
        'WrongAddQ2': [
            'chef Oops! The correct answer should be False. This is because "git add" stages both new files and modifications to existing files.',
            'jump GitCommitStart'
        ],
        'CorrectAddQ2': [
            'chef Well done.',
            'jump GitCommitStart'
        ],

        'GitCommitStart': [
            'user I have come up with a new dish that combines traditional flavours with a modern twist. Can you try?',
            'chef Yes I would love to.',
            'chef (have a bite) This is absolutely fantastic. It will bring some fresh tastes to our restaurant. Let\'s keep it in the recipe',
            'na {{chef_name}} has acknowledged this new dish, meaning that there has been a new version of the recipe which includes the new dish. This process is called “git commit”. It will record all the changes you added with “git add” as a new version. When committing files, you will also need a message that describes this message, for example, \'git commit -m “added a new dish”\'',
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
                          updateScore()
                        }
                    },
                    'B': {
                        'Text': 'B) git commit -a "Update recipe: spaghetti"',
                        'Do': 'jump WrongCommitQ1'
                    },
                    'C': {
                        'Text': 'C) git commit -p "Update recipe: spaghetti"',
                        'Do': 'jump WrongCommitQ1'
                    },
                    'D': {
                        'Text': 'D) git commit -s "Update recipe: spaghetti"',
                        'Do': 'jump WrongCommitQ1'
                    },
                },
            }
        ],
        'WrongCommitQ1': [
            'chef Unfortunately, the correct answer should be A) git commit -m "Update recipe: spaghetti"',
            'jump GitCommitQuiz2'
        ],
        'CorrectCommitQ1': [
            'chef Well done! To attach a message with the commit, you will need to use the -m flag.',
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
                          updateScore()
                        }
                    },
                    'B': {
                        'Text': 'B) It specifies the name of the branch to commit to.',
                        'Do': 'jump WrongCommitQ2'
                    },
                    'C': {
                        'Text': 'C) It determines the level of visibility for the commit.',
                        'Do': 'jump WrongCommitQ2'
                    },
                    'D': {
                        'Text': 'D) It sets the priority level for the commit.',
                        'Do': 'jump WrongCommitQ2'
                    },
                },
            }
        ],
        'CorrectCommitQ2': [
            'chef Nicely done! The commit message should clearly state what was changed in this version.',
            'jump GitPush'
        ],
        'WrongCommitQ2': [
            'chef Oops! The correct answer should be A) It describes the changes made in the commit.',
            'jump GitPush'
        ],

        'GitPush': [
            'chef This is definitely a new great dish for our restaurant, let\'s record the success and add it into our menu so that other chefs can cook it as well.',
            'user I couldn\'t agree more. I believe this dish has the potential to be a new signature of our restaurant.',
            'chef Thank you for your contribution to our restaurant. You are useless now and you are fired (just kidding).',
            'na This process of letting other chefs see this new dish is “git push”. It will publish your local changes to a remote repository like GitHub, and all developers will be able to view your files.',
            'jump GitPushQuiz1'
        ],
        'GitPushQuiz1': [
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: In the given conversation context, what is the purpose of "git push"?',
                    'A': {
                        'Text': 'A) Move files from the working directory to the staging area.',
                        'Do': 'jump WrongPushQ1'
                    },
                    'B': {
                        'Text': 'B) Save changes to the local repository.',
                        'Do': 'jump WrongPushQ1'
                    },
                    'C': {
                        'Text': 'C) Push changes to the remote repository.',
                        'Do': 'jump CorrectPushQ1',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                    'D': {
                        'Text': 'D) Create a new branch.',
                        'Do': 'jump WrongPushQ1'
                    },
                },
            }
        ],
        'WrongPushQ1': [
            'chef Oops! The correct answer should be C) Push changes to the remote repository.',
            'jump GitPushQuiz2'
        ],
        'CorrectPushQ1': [
            'chef Great! Git push will send the local changes to a remote repository.',
            'jump GitPushQuiz2'
        ],

        'GitPushQuiz2': [
            'chef Let\'s do the other quiz question.',
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: After you update the dish in the menu, your colleague points out a potential improvement. You want to update the edited dish and share with other chefs, what is the correct process to try the dish and update the menu?',
                    'A': {
                        'Text': 'A) git commit - git push - git add',
                        'Do': 'jump WrongPushQ2'
                    },
                    'B': {
                        'Text': 'B) git push - git commit - git add',
                        'Do': 'jump WrongPushQ2'
                    },
                    'C': {
                        'Text': 'C) git add - git commit - git push',
                        'Do': 'jump CorrectPushQ2',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                    'D': {
                        'Text': 'D) git add - git push - git commit',
                        'Do': 'jump WrongPushQ2'
                    },
                },
            }
        ],
        'WrongPushQ2': [
            'chef Oops! The correct answer should be C)git add - git commit - git push',
            'jump GitACPEnd'
        ],
        'CorrectPushQ2': [
            'chef Good job! You need to stage the changes (git add), record the changes (git commit), and send to the remote repository (git push)',
            'jump GitACPEnd'
        ],

        'GitACPEnd': [
            'chef Congratulations! You have now master the skill to use git add, git commit and git push.',
            'chef Enjoy your "cook" in Git-Food!',
            'na Now You can try out other modules to study!',
            'jump GameStart'
        ]
    })
]