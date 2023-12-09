
  var links = [
    "/view.html?game=games/retro-bowl/index.html&title=Retro Bowl&image=images/games/retro-bowl.jpg&creator=New Star Games&file=Retro-Bowlfile",
    "/view.html?game=games/monkey-mart/index.html&title=Monkey Mart&image=images/games/monkey-mart.png&creator=TinyDobbins&file=monkey-martfile",
    "/view.html?game=games/1v1-lol/index.html&title=1v1 LOL&image=images/games/1v1-lol.png&creator=Lior Alterman&file=1v1-lolfile",
    "/view.html?game=games/basketball-stars/index.html&title=Basketball Stars&image=images/games/basketball-stars.png&creator=Madpuffers&file=basketball-starsfile",
    "/view.html?game=games/smash/index.html&title=Smash Remix&image=images/games/smash.jpg&creator=The Smashfather&file=smashfile",
    "/view.html?game=games/slope/index.html&title=Slope&image=images/games/slope.jpg&creator=Rob Kay&file=slopefile"
  ];

  var chosenGames = [];

  function openLink() {
    if (chosenGames.length === links.length) {
      // All games have been chosen, reset the chosenGames array
      chosenGames = [];
    }

    var availableGames = links.filter(game => !chosenGames.includes(game));
    var chosenGame = availableGames[Math.floor(Math.random() * availableGames.length)];

    // Add the chosen game to the chosenGames array
    chosenGames.push(chosenGame);

    // Update the parent location
    window.location.href = chosenGame;

    return false;
  }
