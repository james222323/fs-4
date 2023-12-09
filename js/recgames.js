// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Array of game links
    var links = [
       "/view.html?game=games/retro-bowl/index.html&title=Retro Bowl&image=images/games/retro-bowl.jpg&creator=New Star Games&file=Retro-Bowlfile",
       "/view.html?game=games/monkey-mart/index.html&title=Monkey Mart&image=images/games/monkey-mart.png&creator=TinyDobbins&file=monkey-martfile",
       "/view.html?game=games/1v1-lol/index.html&title=1v1 LOL&image=images/games/1v1-lol.png&creator=Lior Alterman&file=1v1-lolfile",
       "/view.html?game=games/basketball-stars/index.html&title=Basketball Stars&image=images/games/basketball-stars.png&creator=Madpuffers&file=basketball-starsfile",
       "view.html?game=games/smash/index.html&title=Smash Remix&image=images/games/smash.jpg&creator=The Smashfather&file=smashfile",
       "/view.html?game=games/slope/index.html&title=Slope&image=images/games/slope.jpg&creator=Rob Kay&file=slopefile"
       // Add more game links as needed
    ];
 
    // Shuffle the array to get a random order
    links = links.sort(() => Math.random() - 0.5);
 
    // Set the href and src attributes for each game link and image
    for (var i = 0; i < links.length; i++) {
       var gameLink = document.getElementById("game" + (i + 1) + "Link");
       var gameImage = document.getElementById("game" + (i + 1));
 
       gameLink.href = links[i];
       gameImage.src = getParameterValue(links[i], "image");
    }
 });
 
 // Function to get a parameter value from the URL
 function getParameterValue(url, parameter) {
    var urlParams = new URLSearchParams(url);
    return urlParams.get(parameter);
 }
 