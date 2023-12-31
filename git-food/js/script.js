/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine",
    icon: "",
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {
  'section1': 'section1_mastery.svg',
  'section2': 'section2_mastery.svg',
  'section3': 'section3_mastery.svg',
  'section4': 'section4_mastery.svg',
  'section5': 'section5_mastery.jpg',
  'chat': 'chat_icon.svg'
});

// Define the music used in the game.
monogatari.assets("music", {
  ap: "ambient-piano.mp3",
});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {
  correct: "achieve.mp3",
  incorrect: "lose.mp3",
});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
  kitchen: "kitchen.svg",
});

// Define the characters
// monogatari.assets("characters", {
//   chef: "chef-with-empty-wooden-board-welcoming-guest.svg",
// });

// Define the Characters
monogatari.characters({
  user: {
    Name: "{{player.name}}",
    Color: "#ff3951",
    sprites: {},
  },
  chef: {
    Name: "Kyle",
    Color: "#00bfff",
    sprites: {
      welcome: "chef-with-empty-wooden-board-welcoming-guest.svg",
    },
  },
  na: {
    Name: "Narrator",
    Color: "#abcdef",
  },
  sous: {
    Name: "Arvin",
    Color: "#9370DB",
    sprites: {
      welcome: "image4.svg",
    },
  },
});

monogatari.script({
  Start: [
    //'show scene restaurant.jpg',
    "show background kitchen",
    "play music ap with loop",
    //'show character chef Normal center with fadeIn',
    {
      // Asking for player to enter their name.
      Input: {
        Text: "What is your name?",
        Validation: function (input) {
          return input.trim().length > 0;
        },
        Save: function (input) {
          this.storage({
            player: {
              name: input,
            },
          });
          return true;
        },
        Revert: function () {
          this.storage({
            player: {
              name: "",
            },
          });
        },
        Warning: "You must enter a name!",
      },
    },
    //Lock all achievements when creating new account
    "gallery lock section1",
    "gallery lock section2",
    "gallery lock section3",
    "gallery lock section4",
    "gallery lock section5",
    "gallery lock chat",
    //Introduction
    "na Welcome to Git-Food, the most delicious version control kitchen in town!",
    "na Are you already familiar with the game?",
  {
    Choice: {
      Yes: {
        Text: "Yes, I would like to skip the tutorial!",
        Do: "jump GameStart",
      },
      No: {
        Text: "No, it's my first time here!",
        Do: "next",
      },
    },
  },
    "show character chef welcome center with fadeIn",
    "chef Hi, {{player.name}}, I'm grateful for you to join our kitchen as a Commis Chef, I'm Head Chef {{chef_name}}, and I'll be your guide on this exciting culinary journey through the world of Git.",
    "chef In this kitchen, we use Git to manage our recipes and collaborate with other chefs like you.",
    //'show character chef Smile center with fadeIn',
    // "chef Are you ready to become a master chef of version control and whip up some mouthwatering code?",
    // "user Yes Chef! Let's do it!",
    "jump IntroductionPart2",
  ],
  TakeABreak: ["chef No Problem, take a break and come back!", "jump End"],
  IntroductionPart2: [
    // "chef Before we dive into the Git-Food kitchen, let me give you a quick overview of Git.",
    //'hide character chef',
    //'show scene kitchen.jpg with fadeIn',
    //'play music kitchen.mp3',
    //'show character chef Normal left with fadeIn',
    "chef Imagine Git as a magical cookbook that keeps track of all our recipes and their versions.",
    "chef With Git, we can create new recipes, make changes, and collaborate with other chefs without losing track of our cooking history.",
    //'show character chef Thought left',
    "chef Just like in cooking, Git provides us with powerful commands to manage our recipes and collaborate effectively.",
    //'show character chef Normal left',
    "chef We have commands like 'git init' to initialize a new cookbook, 'git add' to add new recipes to the cookbook, and 'git commit' to save our cooking changes.",
    // "chef And when we're ready to share our culinary creations with others, we can use commands like 'git clone' and 'git push' to serve our recipes to fellow chefs.",
    //'hide character chef',
    //'show scene restaurant.jpg with fadeIn',
    //'play music restaurant.mp3',
    //'show character chef Normal center with fadeIn',
    "chef In the Git-Food kitchen, you'll learn these commands and more as you embark on your cooking adventure.",
    "chef Lets begin our journey in the kitchen, {{player.name}}, I will see you on the other side!",
    "hide character chef with fadeOut",
    "jump GameStart",
  ],
  GameStart: [
    {
      Choice: {
        Dialog: "Select which topic you would like to begin with?",
        GitIntro: {
          Text: "Level 1: Introduction to Version Control",
          Do: "jump GitIntro",
        },
        GitClonePull: {
          Text: "Level 2: Git Clone & Pull",
          Do: "jump GitClonePull",
        },
        GitAddCommitPush: {
          Text: "Level 3: Git Add, Commit, Push",
          Do: "jump GitAddCommitPush",
        },
        GitBranchCheckout: {
          Text: "Level 4: Git Branch & Checkout",
          Do: "jump GitBranchCheckout",
        },
        GitMergePR: {
          Text: "Level 5: Git Merge & Pull-Request",
          Do: "jump GitMergePR",
        },
        ExternalResources: {
            'Text': 'How can I learn more about Git?',
            'Do': 'jump ExternalResources',
            onChosen: () => {
              if (!monogatari.storage('learn_more_achievement:')){
                monogatari.storage({learn_more_achievement: true});
              }
            }
        },
      },
    },
  ],
  End: [
    //'hide character chef',
    //'play sound applause.mp3',
    //'stop music',
    "end",
  ],
  GitIntro: GitIntro,
  GitClonePull: GitClonePull,
  GitAddCommitPush: GitAddCommitPush,
  GitBranchCheckout: GitBranchCheckout,
  GitMergePR: GitMergePR,
  ExternalResources: ExternalResources
});
