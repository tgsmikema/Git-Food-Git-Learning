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
              Text: "No, Thanks",
              Do: "jump GameStart",
            },
          },
        },
        'False': 'clear',
      }},
    'chef Hi, {{player.name}}! I hope you’ve gotten situated and ready to start work.',
    'user Yes Chef {{chef_name}}. I am ready and eager.',
    'chef Good. Your first task is to prepare our famous Fish and Chips.',
    'user Of course chef. Where can I find the recipe for it?',
    'chef All of our recipes are stored in our central recipe book.',
    'user Okay chef. I’ll start making the dish.',
    'chef Alright. If you have any questions, you can ask our sous chef {{sous_chef_name}}',
    'user Hey {{sous_chef_name}}, it\'s pretty difficult to refer to the central recipe book all the time. Is there an easier way?',
    'sous Hi {{player.name}}, of course there is a much easier way. Just make your own personal recipe book.',
    'user But that would take a long time!',
    'sous Not with the power of “git clone”. With it, you can instantly have your very own recipe book you can use.',
    'user Wow that’s so cool.',
    'sous Not only that, now you can change your own recipe book however you want. You can make your own notes about recipes, you can even add or change recipes. None of it will affect the central recipe book, not unless you want to.',
    'user That’s awesome! Thank you so much {{sous_chef_name}}.',
    'sous Anytime {{player.name}}',
    'user I’m going to finish this fish and chips now. See you around.',
    'sous See you around {{player.name}}',
    'na A new chef is hired at the restaurant. The new chef needs to know what dishes are served at the restaurant and how to make them. Thankfully, there is a public recipe book. Using the magical spell ‘git clone’, the new chef now has his own private copy of the recipe book.',
    'na Git clone is used to create a local copy of a repository, meaning that you have a copy of the original repository in your computer. You can use this copy to make changes in the repository, or simply use the software in your local machine',
    'na Cloning a repository is not like copying some files. In addition to copying the files, you get access to the history of the repository, and many other features we will discuss in the coming chapters.',
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
                          updateScore()
                        }
                    },
                    'B': {
                        'Text': 'B) You change the central recipe book',
                        'Do': 'jump WrongQ1'
                    },
                    'C': {
                        'Text': 'C)  Your personal recipe book disappears',
                        'Do': 'jump WrongQ1'
                    },
                    'D': {
                        'Text': 'D) You steal the central recipe book',
                        'Do': 'jump WrongQ1'
                    },
                },
            }
        ],
        'CorrectQ1' : [
            'sous Well done! Your answer is correct! "Git clone" can create you a personal recipe book from the central recipe book',
            'jump Quiz2',
        ],
        'WrongQ1': [
            'sous Oops! The correct answer is A) You get your own recipe book. "Git clone" can create you a personal recipe book from the central recipe book',
            'jump Quiz2',
        ],

        'Quiz2':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: Why would you want your own recipe book instead of working with the central recipe book?',
                    'A': {
                        'Text': 'A) Make personal changes without affecting the central recipe book',
                        'Do': 'jump WrongQ2'
                    },
                    'B': {
                        'Text': 'B) Refer to the recipes without needing to look in the central recipe book',
                        'Do': 'jump WrongQ2'
                    },
                    'C': {
                        'Text': 'C) Add experimental recipes that aren’t fully taste tested yet',
                        'Do': 'jump WrongQ2'
                    },
                    'D': {
                        'Text': 'D) All of the above.',
                        'Do': 'jump CorrectQ2',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                },
            }
        ],
        'CorrectQ2' : [
            'sous Well done! Your answer is correct! All the answers given are benefits of working with your personal recipe book. You can change and use your personal recipe book without worrying about the central recipe book.',
            'jump EndOfClone',
        ],
        'WrongQ2': [
            'sous Oops! The correct answer is D) All of the above.  All the answers given are benefits of working with your personal recipe book. You can change and use your personal recipe book without worrying about the central recipe book.',
            'jump EndOfClone',
        ],

        'EndOfClone':[
            'sous Congratulations, {{player.name}}! You\'ve learned how to git clone.Happy learning',
            'jump StartPull'
        ],

        'StartPull':[
            'chef Welcome back! Hey {{player.name}}, did you hear about sous chef {{sous_chef_name}}’s new recipe?',
            'user Hi Chef {{chef_name}}. Yes, I hear it\'s selling like hotcakes.',
            'chef Yes! It\'s flying off the shelves, which is why I’m here. We can’t keep up with the demand. We need you to make them as well.',
            'user Of course chef. I will start right away.',
            'chef Great. {{sous_chef_name}} has added the recipe to the central recipe book.',
            'user Okay chef.',
            'user Hi {{sous_chef_name}}. Your recipe is getting popular huh?',
            'sous Hey {{player.name}}. Yes, it’s a great success.',
            'user So much so that I’ve been asked to make them as well. The problem is that my recipe book doesn’t have your recipe in it, because it is new. Do I need to copy the central recipe book like when I first started?',
            'sous Of course not. That would mean that you’d have to throw away your old recipe book. That seems a waste. You can use the power of “Git pull” to get all the newest changes added to your personal recipe book.',
            'user That’s pretty great. So I can use my personal recipe book just like before and it will now have all the newest recipes in it?',
            'sous Yes, that’s right.',
            'user Nice! I’m going to make some more of your famous hotcakes.',
            'sous Me too. See you around.',
            'na Danny has made a brand new recipe (sandwiches) and its all the rage. People are coming from all over the place to try the new recipe. The restaurant can’t keep up with just Danny making sandwiches.',
            'na Everybody needs to learn how to make sandwiches. Danny has shared the recipe to the public recipe book, but unfortunately, you have a clone of the old recipe book. Not to worry, the power of ‘git pull’ is here to help',
            'na Using git pull, you are able to access the latest recipes in the public recipe book.',
            'na Git pull is used when the central repository has new changes and you want to add them to your local repository. It will fetch and merge the changes related to the repository.',
            'jump Quiz1ForPull'
        ],
        'Quiz1ForPull':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 1: What happens when you use "git pull" for your recipe book?',
                    'A': {
                        'Text': 'A) Sends your changes to the central recipe book',
                        'Do': 'jump WrongQ1ForPull'
                    },
                    'B': {
                        'Text': 'B) Add new stuff in the central recipe book to your personal recipe book',
                        'Do': 'jump CorrectQ1ForPull',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                    'C': {
                        'Text': 'C) You get a new personal recipe book',
                        'Do': 'jump WrongQ1ForPull'
                    },
                    'D': {
                        'Text': 'D) Your personal recipe book disappears',
                        'Do': 'jump WrongQ1ForPull'
                    },
                },
            }
        ],
        'CorrectQ1ForPull' : [
            'sous Well done! Your answer is correct! When you use "git pull", it checks the central recipe book and adds all the new things to your personal recipe book.',
            'jump Quiz2ForPull',
        ],
        'WrongQ1ForPull': [
            'sous Oops! The correct answer is B) Add new stuff in the central recipe book to your personal recipe book. When you use "git pull", it checks the central recipe book and adds all the new things to your personal recipe book.',
            'jump Quiz2ForPull',
        ],

        'Quiz2ForPull':[
            {
                'Choice': {
                    'Dialog': 'Quiz Question 2: Can you use “git clone” to replace “git pull”?',
                    'A': {
                        'Text': 'A) Yes, it is exactly the same',
                        'Do': 'jump WrongQ2ForPull'
                    },
                    'B': {
                        'Text': 'B) No, you can’t replace it',
                        'Do': 'jump CorrectQ2ForPull',
                        onChosen: () => {
                          updateScore()
                        }
                    },
                    'C': {
                        'Text': 'C) Yes, but it would require additional steps',
                        'Do': 'jump WrongQ2ForPull'
                    },
                    'D': {
                        'Text': 'D) I don’t know',
                        'Do': 'jump WrongQ2ForPull'
                    },
                },
            }
        ],
        'CorrectQ2ForPull' : [
            'sous Well done! Your answer is correct! Technically, you can throw away your old recipe book and use “Git clone” to create a new recipe book when you need to use “Git pull”, but this is very cumbersome and should not be done.',
            'jump EndOfPull',
        ],
        'WrongQ2ForPull': [
            'sous Oops! The correct answer is C) Yes, but it would require additional steps. Technically, you can throw away your old recipe book and use “Git clone” to create a new recipe book when you need to use “Git pull”, but this is very cumbersome and should not be done.',
            'jump EndOfPull',
        ],
        'EndOfPull':[
            'chef Congratulations! You have now master the skill to use git clone,and git pull.',
            'chef Enjoy your "cook" in Git-Food!',
            'na Now You can try out other modules to study!',
            function () {
                monogatari.storage.level_2_done = true;
                return true;
              },
            'jump GameStart'
        ],
        'QuestionsOnly2':[
            "Let's test your knowledge again!",
            {
                Choice: {
                    'Dialog': 'Quiz Question 1: What happens when you cast  "git clone" on the central recipe book?',
                    A: {
                        Text: "A) You get your own recipe book",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                        }
                    },
                    B: {
                        Text: "B) You change the central recipe book",
                        Do: "na Incorrect...",
                    },
                    C: {
                        Text: "C) Your personal recipe book disappears",
                        Do: "na Incorrect...",
                    },
                    D: {
                        Text: "D) You steal the central recipe book",
                        Do: "na Incorrect...",
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 2: Why would you want your own recipe book instead of working with the central recipe book?',
                    A: {
                        Text: "A) Make personal changes without affecting the central recipe book",
                        Do: "na Incorrect...",
                    },
                    B: {
                        Text: "B) Refer to the recipes without needing to look in the central recipe book",
                        Do: "na Incorrect...",
                    },
                    C: {
                        Text: "C) Add experimental recipes that aren’t fully taste tested yet",
                        Do: "na Incorrect...",
                    },
                    D: {
                        Text: "D) All of the above",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
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
                    },
                    B: {
                        Text: "B) Add new stuff in the central recipe book to your personal recipe book",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                        }
                    },
                    C: {
                        Text: "C) You get a new personal recipe book",
                        Do: "na Incorrect...",
                    },
                    D: {
                        Text: "D) Your personal recipe book disappears",
                        Do: "na Incorrect...",
                    },
                },
            },
            {
                Choice: {
                    'Dialog': 'Quiz Question 4: Can you use “git clone” to replace “git pull”?',
                    A: {
                        Text: "A) Yes, it is exactly the same",
                        Do: "na Incorrect...",
                    },
                    B: {
                        Text: "B) No, you can’t replace it",
                        Do: "na Correct! Well done!",
                        onChosen: () => {
                            updateScore();
                        }
                    },
                    C: {
                        Text: "C) Yes, but it would require additional steps",
                        Do: "na Incorrect...",
                    },
                    D: {
                        Text: "D) I don’t know",
                        Do: "na Incorrect...",
                    },
                },
            },
            "chef It's nice to see that you have practiced these questions again, keep working hard!",
            "jump GameStart",
        ]
    })
]







