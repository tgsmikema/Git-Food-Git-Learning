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
	'chef': {
		name: 'Yui',
		color: '#5bcaff'
	}
});

monogatari.script({
	// Introduction
	'Start': [
		'centered "Welcome to the Git Bistro, a place where cooking and Git merge together!"',
		'chef "Hello, aspiring chef! Are you ready to learn the art of merging in our kitchen?"',
		{
			'Choice': {
				'Dialog': 'chef',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump LearnMerge'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump End'
				}
			}
		}
	],

	// Learning "git merge"
	'LearnMerge': [
		'chef "Fantastic! Let me explain how merging works in our kitchen."',
		'chef "In Git, merging is like combining different flavors of code to create something extraordinary."',
		'chef "When you merge branches, you bring together the changes made in one branch and incorporate them into another."',
		'jump QuizMerge'
	],

	// Quiz about "git merge"
	'QuizMerge': [
		'chef "Now, let\'s test your knowledge with a quiz!"',
		{
			'Choice': {
				'Dialog': 'chef',
				'What does "git merge" command do?': {
					'Text': 'What does the "git merge" command do?',
					'Do': 'jump AnswerMerge'
				},
				// Add more quiz questions here
				'End': {
					'Text': 'End',
					'Do': 'jump End'
				}
			}
		}
	],

	// Handling the user's answer for the merge quiz
	'AnswerMerge': [
		'chef "Let\'s see if you got it right."',
		{
			'Choice': {
				'Dialog': 'chef',
				'C) Combines the changes from one branch into another': {
					'Text': 'C) Combines the changes from one branch into another',
					'Do': 'jump CorrectMerge'
				},
				// Add incorrect answer choices here
			}
		}
	],

	// Feedback for correct answer
	'CorrectMerge': [
		'chef "Congratulations! That\'s the correct answer."',
		'chef "Just like in our kitchen, the \'git merge\' command combines the changes from one branch into another."',
		'jump QuizMerge'
	],

	// Feedback for incorrect answer
	'IncorrectMerge': [
		'chef "Oops! That\'s not the correct answer."',
		'chef "In our kitchen, the \'git merge\' command combines the changes from one branch into another."',
		'jump QuizMerge'
	],

	// End of the game
	'End': [
		'chef "You did great, chef! Keep exploring the Git Bistro kitchen and continue to hone your skills."',
		'hide character chef with fadeOut',
		'play sound applause.mp3',
		'end'
	]
});