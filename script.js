<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Will You Be My Valentine?</title>
    <!-- Link to the CSS file -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Will you be my Valentine?</h1>
        </header>

        <!-- Batman Cartoon Image -->
        <section id="batman">
            <img src="https://www.clipartmax.com/png/middle/6-62982_batman-cartoon-png-batman-cartoon-character.png" alt="Cute Batman" id="batman-image">
        </section>

        <!-- Interactive Game -->
        <section id="game">
            <p>Catch the hearts to get your answer!</p>
            <div id="game-container">
                <button id="start-game-btn">Start Game</button>
                <div id="heart-container"></div>
            </div>
        </section>
        
        <footer>
            <p>Created with 💖 by You!</p>
        </footer>
    </div>

    <!-- Link to the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
/* Basic styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f7e4e4;
    text-align: center;
    color: #3a3a3a;
}

.container {
    width: 80%;
    margin: 0 auto;
}

/* Header */
header {
    margin-top: 20px;
}

h1 {
    font-size: 3em;
    color: #ff69b4;
}

/* Batman Image */
#batman {
    margin-top: 50px;
}

#batman-image {
    width: 200px;
    height: auto;
    animation: bounce 1s infinite alternate;
}

/* Heart and Game Section */
#game {
    margin-top: 50px;
}

#game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#heart-container {
    margin-top: 20px;
    position: relative;
    height: 200px;
    width: 200px;
    overflow: hidden;
}

button {
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
    background-color: #ff69b4;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #ff4d94;
}

/* Heart Animation */
@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px);
    }
}

/* Falling heart animation */
@keyframes fall {
    100% {
        bottom: 0;
    }
}

.heart {
    position: absolute;
    bottom: 100%;
    width: 30px;
    height: 30px;
    background: url('https://www.pngfind.com/pngs/m/67-673764_red-heart-png-image-free-download-png-and-clipart.png') no-repeat center; /* Heart image URL */
    background-size: cover;
    animation: fall 2s linear forwards;
}
/* Basic styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f7e4e4;
    text-align: center;
    color: #3a3a3a;
}

.container {
    width: 80%;
    margin: 0 auto;
}

/* Header */
header {
    margin-top: 20px;
}

h1 {
    font-size: 3em;
    color: #ff69b4;
}

/* Batman Image */
#batman {
    margin-top: 50px;
}

#batman-image {
    width: 200px;
    height: auto;
    animation: bounce 1s infinite alternate;
}

/* Heart and Game Section */
#game {
    margin-top: 50px;
}

#game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#heart-container {
    margin-top: 20px;
    position: relative;
    height: 200px;
    width: 200px;
    overflow: hidden;
}

button {
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
    background-color: #ff69b4;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #ff4d94;
}

/* Heart Animation */
@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px);
    }
}

/* Falling heart animation */
@keyframes fall {
    100% {
        bottom: 0;
    }
}

.heart {
    position: absolute;
    bottom: 100%;
    width: 30px;
    height: 30px;
    background: url('https://www.pngfind.com/pngs/m/67-673764_red-heart-png-image-free-download-png-and-clipart.png') no-repeat center; /* Heart image URL */
    background-size: cover;
    animation: fall 2s linear forwards;
}
let startBtn = document.getElementById('start-game-btn');
let heartContainer = document.getElementById('heart-container');
let gameStarted = false;

// Start Game Button
startBtn.addEventListener('click', function() {
    if (!gameStarted) {
        gameStarted = true;
        startGame();
    }
});

// Function to create hearts and make them fall
function startGame() {
    let heartInterval = setInterval(function() {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heartContainer.appendChild(heart);

        // Heart falling animation
        heart.style.animation = 'fall 2s linear forwards';

        // Removing heart after animation ends
        heart.addEventListener('animationend', function() {
            heart.remove();
        });

        // Check if heart is caught
        heart.addEventListener('click', function() {
            heart.remove();
            alert('You caught a heart! Will you be my Valentine?');
        });
    }, 1000);
}
let startBtn = document.getElementById('start-game-btn');
let heartContainer = document.getElementById('heart-container');
let gameStarted = false;

// Start Game Button
startBtn.addEventListener('click', function() {
    if (!gameStarted) {
        gameStarted = true;
        startGame();
    }
});

// Function to create hearts and make them fall
function startGame() {
    let heartInterval = setInterval(function() {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heartContainer.appendChild(heart);

        // Heart falling animation
        heart.style.animation = 'fall 2s linear forwards';

        // Removing heart after animation ends
        heart.addEventListener('animationend', function() {
            heart.remove();
        });

        // Check if heart is caught
        heart.addEventListener('click', function() {
            heart.remove();
            alert('You caught a heart! Will you be my Valentine?');
        });
    }, 1000);
}

