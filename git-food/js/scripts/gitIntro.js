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
          },
          B: {
            Text: "Store it in your brain because you probably won't forget",
            Do: "na Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories",
          },
          C: {
            Text: "Ask your coworker to remember it for you",
            Do: "na Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories",
          },
          D: {
            Text: "Nothing, you won't ever need to refer to an old recipe",
            Do: "na Incorrect... You should create a copy of your version as you should not rely on your own or other people's memories",
          },
        },
      },
      "jump GitIntroEnd",
    ],
    GitIntro2: [
      "chef Another chef in your team wants to improve the recipe at the same time as you. ",
      "chef This chef creates another recipe based off the initial recipe and saves it somewhere without interfering with the changes you are currently making to the recipe. ",
      "chef Once you are done with editing the recipe, you and your fellow chef can compare the recipes and try them out to see which one is better.",
      {
        Choice: {
          option1: {
            Text: "Ah I understand.",
            Do: "Sweet! Let's test your understanding",
          },
          option2: {
            Text: "Hold on, can you say that again?",
            Do: "jump GitIntro2",
          },
        },
      },
    ],
    GitIntroEnd: [
      "na You now know the importance of git, let's dive into it with the next level!",
      "jump GameStart",
    ],
  }),
];
