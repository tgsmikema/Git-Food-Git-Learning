function incrementCorrect(){
    let correctCounter = monogatari.storage('temp_score');
    correctCounter++;
    monogatari.storage({temp_score: correctCounter});
  }

const GitMergePR = [
    {'Conditional': {
        'Condition': function () {
            return this.storage.level_5_done;
        },
        'True': {
          Choice: {
            'Dialog': "Seems like you have done this module already, would you like to test your knowledge again?",
            Yes: {
              Text: "Yes, Please!",
              Do: "jump QuestionsOnly5",
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
      "na Are you already familiar with the Git Branch and Checkout?", 
      {
          Choice: {
            Yes: {
              Text: "Yes",
              Do: "jump EndPR",
            },
            No: {
              Text: "No, but I would like to learn about it!",
              Do: "next",
            },
          },
        },
    'chef Greetings, aspiring chef {{player.name}}! In the Git Food, merging is like blending different ingredients to create a brand-new recipe. It allows us to combine the work done in separate branches and bring them together in harmony. Let\'s learn how to use the \'git merge\' command!',
    'user Sounds good, Chef! I\'m ready!',
    'chef Great! Let me explain how \'git merge\' works in our kitchen. Imagine you\'re working on your own dish in a separate prep station, and another chef is also preparing a different dish. When both dishes are ready, you can merge them to create something extraordinary!',
    'chef In the Git Food, each chef represents a branch, and their dish represents the code changes made in that branch. Merging branches allows the chefs to combine their work and create a unified codebase.',
    'chef Now, let\'s dive deeper into the \'git merge\' command',
    'chef In our kitchen, when it\'s time to merge dishes, we use the \'git merge\' command. Similarly, in Git, \'git merge\' brings together the changes made in one branch and incorporates them into another.',
    'chef You can learn more about Git Merge <u><a href="https://www.atlassian.com/git/tutorials/using-branches/git-merge" target="_blank" style="color: blue">here</a></u>',
    //NPC Chef demonstrates the usage of the 'git merge' command in a restaurant context, showing examples of merging different dishes to create a new, unique dish.
    'chef Now it\'s time to test your knowledge!',
    "hide character chef with fadeOut",
    {
        'Choice': {
            'Dialog': 'Quiz Question 1: What does the "git merge" command do?',
            'GitIntro': {
                'Text': 'A) Creates a new branch.',
                'Do': 'jump WrongMergeQ1',
                onChosen: () => {
                    playIncorrectSound()
                }
            },
            'GitClonePull': {
                'Text': 'B) Deletes a branch.',
                'Do': 'jump WrongMergeQ1',
                onChosen: () => {
                    playIncorrectSound()
                }
            },
            'GitAddCommitPush': {
                'Text': 'C) Combines the changes from one branch into another.',
                'Do': 'jump CorrectMergeQ1',
                onChosen: () => {
                  updateScore()
                  playCorrectSound()
                }
            },
            'GitBranchCheckout': {
                'Text': 'D) Checks out a specific commit.',
                'Do': 'jump WrongMergeQ1',
                onChosen: () => {
                    playIncorrectSound()
                }
            },
        }
    },
    monogatari.script({
        'CorrectMergeQ1' : [
            "show character chef welcome center with fadeIn",
            'chef Well done! Just like in our kitchen, the "git merge" command combines the changes made in one branch into another, creating a flavorful blend of code.',
            'jump StartQ2',
        ],
        'WrongMergeQ1': [
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is C) Combines the changes from one branch into another. With "git merge", you can bring together the changes made in one branch into another, just like blending different ingredients.',
            'jump StartQ2',
        ],
        'StartQ2' : [
            'chef Excellent! You\'re understanding the concept of merging. Let\'s continue with more questions to reinforce your knowledge.',
            "hide character chef with fadeOut",
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What happens if there are conflicting changes when merging branches?',
                    'GitIntro': {
                        'Text': 'A) The merge happens automatically without any issues.',
                        'Do': 'jump WrongMergeQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'GitClonePull': {
                        'Text': 'B) A merge conflict occurs, and manual intervention is required.',
                        'Do': 'jump CorrectMergeQ2',
                        onChosen: () => {
                            playCorrectSound()
                            updateScore()
                        }
                    },
                    'GitAddCommitPush': {
                        'Text': 'C) The conflicting changes are deleted from the repository.',
                        'Do': 'jump WrongMergeQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'GitBranchCheckout': {
                        'Text': 'D) The merge is canceled, and the branches remain separate.',
                        'Do': 'jump WrongMergeQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                }
            },
        ],
        'CorrectMergeQ2': [
            "show character chef welcome center with fadeIn",
            'chef Great job! In our kitchen, if conflicting changes are detected during a merge, it leads to a merge conflict. Manual intervention is required to resolve the conflict and create a harmonious blend of code.',
            'jump StartQ3',
        ],
        'WrongMergeQ2':[
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is B) A merge conflict occurs, and manual intervention is required. When conflicting changes are found during a merge, a merge conflict arises, and manual intervention is necessary to resolve it.',
            'jump StartQ3',
        ],
        'StartQ3':[
            "show character chef welcome center with fadeIn",
            'chef Now, let\'s proceed to the next question and deepen your understanding of the \'git merge\' command.',
            "hide character chef with fadeOut",
            {
                'Choice': {
                    'Dialog': 'Quiz Question 3: In the Git Food kitchen, when we merge dishes, which dish receives the changes?',
                    'GitIntro': {
                        'Text': 'A) The source dish.',
                        'Do': 'jump WrongMergeQ3',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'GitClonePull': {
                        'Text': 'B) The destination dish.',
                        'Do': 'jump CorrectMergeQ3',
                        onChosen: () => {
                          updateScore()
                          playCorrectSound()
                        }
                    },
                    'GitAddCommitPush': {
                        'Text': 'C) Both dishes equally.',
                        'Do': 'jump WrongMergeQ3',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'GitBranchCheckout': {
                        'Text': 'D) None of the above.',
                        'Do': 'jump WrongMergeQ3',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                }
            },
        ],
        'CorrectMergeQ3': [
            "show character chef welcome center with fadeIn",
            'chef Well done! During a merge, the changes from the source dish are incorporated into the destination dish, creating a combined version.',
            'jump EndOfMerge',
        ],
        'WrongMergeQ3':[
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is B) The destination dish. When merging dishes in the Git Food kitchen, the changes from the source dish are incorporated into the destination dish.',
            'jump EndOfMerge',
        ],
        'EndOfMerge':[
            'chef Congratulations, {{player.name}}! You\'ve learned how to merge code changes like a pro. Remember, just like creating a delectable dish, merging in Git brings together different branches and flavors of code. Keep up the great work and continue exploring the Git Food kitchen!',
            "hide character chef with fadeOut",
            'na With your newfound knowledge of "git merge," you\'re now ready to create amazing recipes of code in your own software projects. Happy merging!',
            'jump BeginPR',
        ],
        'BeginPR':[
            "show character chef welcome center with fadeIn",
            'chef Welcome back, chef! Today, we\'re going to learn about an essential concept in collaborative cooking: the \'pull request.\' Just as we have sous chefs reviewing and approving dishes before they are served, in the Git Food, a pull request allows us to review and merge code changes. Let\'s begin!',
            'chef Fantastic! Let me introduce you to the world of pull requests.',
            'chef In our bistro, when a chef wants their dish to be included in the menu, they create a pull request. Similarly, in Git, a pull request is a request to merge changes from one branch to another, providing an opportunity for review and discussion before finalizing the merge.',
            'chef You can learn more about pull requests <u><a href="https://www.atlassian.com/git/tutorials/making-a-pull-request" target="_blank" style="color: blue">here</a></u>',
            "hide character chef with fadeOut",
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: What is the purpose of a pull request in the Git Food kitchen?',
                    'GitIntro': {
                        'Text': 'A) To immediately add the dish to the menu.',
                        'Do': 'jump WrongPRQ1',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'GitClonePull': {
                        'Text': 'B) To request review and discussion before adding the dish to the menu.',
                        'Do': 'jump CorrectPRQ1',
                        onChosen: () => {
                          updateScore()
                          playCorrectSound()
                        }
                    },
                    'GitAddCommitPush': {
                        'Text': 'C) To delete a dish from the menu.',
                        'Do': 'jump WrongPRQ1',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'GitBranchCheckout': {
                        'Text': 'D) To undo the last modification made to the dish.',
                        'Do': 'jump WrongPRQ1',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                }
            },
        ],
        'CorrectPRQ1':[
            "show character chef welcome center with fadeIn",
            'chef Great job! In the Git Food kitchen, a pull request serves the purpose of requesting review and engaging in discussion before adding a dish to the menu. It allows the chefs to collaborate and ensure the quality of the final recipe.',
            'jump StartPRQ2',
        ],
        'WrongPRQ1':[
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is B) To request review and discussion before adding the dish to the menu. In the Git Food kitchen, a pull request is used to request review and discussion before adding a dish to the menu, ensuring the best possible outcome.',
            'jump StartPRQ2',
        ],
        'StartPRQ2':[
            'chef You\'re doing great! Let\'s continue with more questions to reinforce your understanding of pull requests.',
            "hide character chef with fadeOut",
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: What is typically included in a pull request in the Git Food kitchen?',
                    'GitIntro': {
                        'Text': 'A) The entire collection of recipes in the kitchen.',
                        'Do': 'jump WrongPRQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'GitClonePull': {
                        'Text': 'B) A summary of the changes made to the dish and their purpose.',
                        'Do': 'jump CorrectPRQ2',
                        onChosen: () => {
                          updateScore()
                          playCorrectSound()
                        }
                    },
                    'GitAddCommitPush': {
                        'Text': 'C) A request to remove a dish from the menu.',
                        'Do': 'jump WrongPRQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                    'GitBranchCheckout': {
                        'Text': 'D) The last update made to the dish\'s recipe.',
                        'Do': 'jump WrongPRQ2',
                        onChosen: () => {
                            playIncorrectSound()
                        }
                    },
                }
            },
        ],
        'CorrectPRQ2':[
            "show character chef welcome center with fadeIn",
            'chef Well done! In the Git Food kitchen, a pull request typically includes a summary of the changes made to the dish and their purpose. This summary helps the other chefs understand the intention behind the modifications and facilitates effective review.',
            'jump EndPR',
        ],
        'WrongPRQ2':[
            "show character chef welcome center with fadeIn",
            'chef Oops! The correct answer is B) A summary of the changes made to the dish and their purpose. In the Git Food kitchen, a pull request typically includes a summary of the changes made to the dish and their purpose. This summary provides context for the review process and helps ensure the quality of the final recipe.',
            'jump EndPR',
        ],
        'EndPR':[
            'chef Congratulations, chef! You\'ve learned how to utilize pull requests effectively, just like our chefs here in the Git Food. Pull requests facilitate collaboration and ensure that changes are thoroughly reviewed before merging. Keep up the excellent work and continue exploring the world of collaborative coding!',
            "hide character chef with fadeOut",
            'na With your newfound knowledge of pull requests, you\'re now equipped to contribute to projects and collaborate seamlessly. Happy cooking! Now You can try out other modules to study!',
            function () {
                monogatari.storage.level_5_done = true;
                return true;
              },
            'jump GameStart',
        ],
        'QuestionsOnly5':[
            "Let's test your knowledge again!",
            function () {
                monogatari.storage({temp_score: 0});
                return true;
              },
            {
                Choice: {
                    'Dialog': 'Quiz Question 1: What does the \"git merge\" command do?',
                    A: {
                        Text: "A) Creates a new branch.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) Deletes a branch.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    C: {
                        Text: "C) Combines the changes from one branch into another.",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    D: {
                        Text: "D) Checks out a specific commit.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 2: What happens if there are conflicting changes when merging branches?',
                    A: {
                        Text: "A) The merge happens automatically without any issues.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) A merge conflict occurs, and manual intervention is required.",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    C: {
                        Text: "C) The conflicting changes are deleted from the repository.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) The merge is canceled, and the branches remain separate.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 3: In the Git Food kitchen, when we merge dishes, which dish receives the changes?',
                    A: {
                        Text: "A) The source dish.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) The destination dish.",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    C: {
                        Text: "C) Both dishes equally.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) None of the above.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 4: What is the purpose of a pull request in the Git Food kitchen?',
                    A: {
                        Text: "A) To immediately add the dish to the menu.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) To request review and discussion before adding the dish to the menu.",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    C: {
                        Text: "C) To delete a dish from the menu.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) To undo the last modification made to the dish.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 5: What is typically included in a pull request in the Git Food kitchen?',
                    A: {
                        Text: "A) The entire collection of recipes in the kitchen.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    B: {
                        Text: "B) A summary of the changes made to the dish and their purpose.",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                            playCorrectSound()
                            incrementCorrect()
                        }
                    },
                    C: {
                        Text: "C) A request to remove a dish from the menu.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                    D: {
                        Text: "D) The last update made to the dish\'s recipe.",
                        Do: "na Incorrect...",
                        onChosen: () => {
                            playIncorrectSound()
                          }
                    },
                },
            },

            "chef you have answered {{temp_score}} out of 5 questions correctly!",
            function () {
                if(monogatari.storage('section5_mastery')){
                    monogatari.storage({temp_score: 0});
                    return;
                }

                const score = monogatari.storage('temp_score');
                if(score == 5){
                    monogatari.storage({section5_mastery:true})
                }
                monogatari.storage({temp_score: 0});
                return true;
            },
            {'Conditional': {
                'Condition': function(){
                    return monogatari.storage('section5_mastery');
                },
                'True': "jump Achievement5",
                'False': "na Complete this test with no mistakes to gain mastery!"
                }
            },
            "chef It's nice to see that you have practiced these questions again, keep working hard!",
            "jump GameStart"
        ],
        Achievement5:[
            "na Congratulations! You have unlocked the Level 5 Mastery achievement in the gallery!",
            "gallery unlock section5",
            "jump GameStart"
        ]
    })
]
