const playCorrectSound = () => {
    const audio = new Audio("./assets/sounds/achieve.mp3")
    audio.play()
}

const playIncorrectSound = () => {
    const audio = new Audio("./assets/sounds/lose.mp3")
    audio.play()
}

