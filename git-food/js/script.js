/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	"user": {
		"Name": "{{player.name}}",
		"Color": "#ff3951"
	},
	"chef":{
		"Name": "Kyle",
		"Color": "#00bfff",
	}
});

monogatari.script({
    'Start': [
        //'show scene restaurant.jpg',
        //'play music restaurant.mp3',
        //'show character chef Normal center with fadeIn',
		{"Input": {
			"Text": "What is your name?",
			"Validation": function (input) {
				return input.trim().length > 0;
			},
			"Save": function (input) {
				Storage.set ("PlayerName", input);
				storage.player.name = input;
				return true;
			},
			"Warning": "You must enter a name!"
		}},
		'user "Welcome to Git-Food, the most delicious version control kitchen in town!"',
        'chef "Welcome to Git-Food, the most delicious version control kitchen in town!"',
        'chef "I\'m Chef {{player.name}}, and I\'ll be your guide on this exciting culinary journey through the world of Git."',
        'chef "In this kitchen, we use Git to manage our recipes and collaborate with other chefs like you."',
        //'show character chef Smile center with fadeIn',
        'chef "Are you ready to become a master chef of version control and whip up some mouthwatering code?"',
        {
            'Choice': {
                'Yes': {
                    'Text': 'Yes, I\'m ready!',
                    'Do': 'jump IntroductionPart2'
                },
                'No': {
                    'Text': 'No, I need more time.',
                    'Do': 'jump End'
                }
            }
        }
    ],
    'IntroductionPart2': [
        'chef "Great! Before we dive into the Git-Food kitchen, let me give you a quick overview of Git."',
        //'hide character chef',
        //'show scene kitchen.jpg with fadeIn',
        //'play music kitchen.mp3',
        //'show character chef Normal left with fadeIn',
        'chef "Imagine Git as a magical cookbook that keeps track of all our recipes and their revisions."',
        'chef "With Git, we can create new recipes, make changes, and collaborate with other chefs without losing track of our cooking history."',
        //'show character chef Thought left',
        'chef "Just like in cooking, Git provides us with powerful commands to manage our recipes and collaborate effectively."',
        //'show character chef Normal left',
        'chef "We have commands like \'git init\' to initialize a new cookbook, \'git add\' to add new recipes to the cookbook, and \'git commit\' to save our cooking changes."',
        'chef "And when we\'re ready to share our culinary creations with others, we can use commands like \'git clone\' and \'git push\' to serve our recipes to fellow chefs."',
        //'hide character chef',
        //'show scene restaurant.jpg with fadeIn',
        //'play music restaurant.mp3',
        //'show character chef Normal center with fadeIn',
        'chef "In the Git-Food kitchen, you\'ll learn these commands and more as you embark on your cooking adventure."',
        'chef "Are you ready to put on your chef\'s hat and start cooking with Git?"',
        {
            'Choice': {
                'Yes': {
                    'Text': 'Yes, let\'s get cooking!',
                    'Do': 'jump GameStart'
                },
                'No': {
                    'Text': 'No, I need more time to prepare.',
                    'Do': 'jump End'
                }
            }
        }
    ],
    'GameStart': [
        // Start your game here
    ],
    'End': [
        //'hide character chef',
        //'play sound applause.mp3',
        //'stop music',
        'end'
    ]
});