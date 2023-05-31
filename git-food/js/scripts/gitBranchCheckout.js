const GitBranchCheckout = [
    'na Anonymous Chef is working on his recipe for a new dish. The chef wants to make changes to the recipe and experiment, but he doesn’t want to alter the original recipe',
    'na He makes a copy of the recipe and takes it to a separate cooking station. There he can start experimenting with the recipe like adding different spices, modifying cooking times, or even introducing new ingredients.',
    'na  His original recipe remains unaffected as he is experimenting on with his new experimental recipe.',
    'na The original recipe is like the main branch. Git branch new branch is like making a copy of the original recipe and putting it elsewhere, like a new cooking station.',
    'na Git checkout existing_branch is like going to that cooking station where you can start experimenting with the recipe without affecting the main branch.',
    'chef  Hey, great work on the new dish the other day, it was a huge hit with the customers. You’ve got a gift in you.',
    'user  Thank you chef!',
    'chef Today, I’ve been thinking about tweaking one of our original recipes. Do you think you’re up for the task?',
    'user  I would love to! Should we get started right away?',
    'na {{chef_name}} grabs a piece of paper and starts writing stuff down',
    'chef Let’s hold it off for now. I’ll copy down the original recipe and place it on a separate cooking station so we can experiment with it later.',
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
                        'Do': 'jump BranchWrongQ1'
                    },
                    'B': {
                        'Text': 'B) git branch branch_name',
                        'Do': 'jump BranchCorrectQ1',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                    'C': {
                        'Text': 'C)  git checkout branch_name',
                        'Do': 'jump BranchWrongQ1'
                    },
                },
            }
        ],
        'BranchCorrectQ1' : [
            'chef Well done! Your answer is correct! When we create a new branch, we will use the git branch command',
            'jump BranchQuiz2',
        ],
        'BranchWrongQ1': [
            'chef Oops! The correct answer is B) git branch branch_name.  When we create a new branch, we will use the git branch command',
            'jump BranchQuiz2',
        ],
        'BranchQuiz2':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What is the purpose of Git branching?',
                    'A': {
                        'Text': 'A) To experiment with new features without affecting the main codebase',
                        'Do': 'jump BranchWrongQ2'
                    },
                    'B': {
                        'Text': 'B) To create multiple copies of a repository',
                        'Do': 'jump BranchCorrectQ2',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                    'C': {
                        'Text': 'C) To synchronise changes between multiple repositories',
                        'Do': 'jump BranchWrongQ2'
                    },
                },
            }
        ],
        'BranchCorrectQ2' : [
            'chef Well done! Your answer is correct! Branching allows multiple versions of a codebase to coexist simultaneously, enabling developers to work on different features',
            'jump EndOfBranch',
        ],
        'BranchWrongQ2': [
            'chef Oops! The correct answer is B) To create multiple copies of a repository.  Branching allows multiple versions of a codebase to coexist simultaneously, enabling developers to work on different features',
            'jump EndOfBranch',
        ],
        'EndOfBranch':[
            'chef Congratulations, {{player.name}}! You\'ve learned how to git branch.Happy learning',
            'jump StartCheckout'
        ],
        'StartCheckout':[
            'na {{chef_name}} comes over as you finish up the final orders of today.',
            'chef Hey {{player.name}}, good job today.',
            'user Thank you chef!',
            'chef Now that we have some time do you want to start working on the recipe?',
            'user Sure!',
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
                        'Do': 'jump CheckoutWrongQ1'
                    },
                    'B': {
                        'Text': 'B) Switches to the branch with the given name',
                        'Do': 'jump CheckoutCorrectQ1',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                    'C': {
                        'Text': 'C) Deletes the branch with the given name',
                        'Do': 'jump CheckoutWrongQ1'
                    },
                },
            }
        ],
        'CheckoutCorrectQ1' : [
            'chef Well done! Your answer is correct! It will switches to the branch with the given name',
            'jump CheckoutQuiz2',
        ],
        'CheckoutWrongQ1' : [
            'chef Oops! The correct answer is B) Switches to the branch with the given name.',
            'jump CheckoutQuiz2',
        ],

        'CheckoutQuiz2':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What happens to the changes made on a branch when you switch to a different branch using git checkout?',
                    'A': {
                        'Text': 'A) The changes are discarded',
                        'Do': 'jump CheckoutWrongQ2'
                    },
                    'B': {
                        'Text': 'B) The changes are automatically merged into the new branch',
                        'Do': 'jump CheckoutWrongQ2'
                    },
                    'C': {
                        'Text': 'C) The changes are preserved on the original branch',
                        'Do': 'jump CheckoutCorrectQ2',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                },
            }
        ],
        'CheckoutCorrectQ2' : [
            'chef Well done! Your answer is correct! When you switch to a different branch using git checkout, the changes made on the current branch that have not been committed or staged will be preserved in the working directory and staging area',
            'jump EndOfCheckout',
        ],
        'CheckoutWrongQ2': [
            'chef Oops! The correct answer is C) The changes are preserved on the original branch. When you switch to a different branch using git checkout, the changes made on the current branch that have not been committed or staged will be preserved in the working directory and staging area',
            'jump EndOfCheckout',
        ],
        'EndOfCheckout':[
            'chef Congratulations! You have now master the skill to use git branch,and git checkout.',
            'chef Enjoy your "cook" in Git-Food!',
            'na Now You can try out other modules to study!',
            'jump GameStart'
        ]
    })
]