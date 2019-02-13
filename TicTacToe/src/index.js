const View = require('./ttt-view');
const Game = require('../TicTacToe-game-logic/game');

  $(() => {
    const game = new Game();
    const $tttEl = $('.ttt');
    const view = new View(game, $tttEl);
      
    // game.run???
  });
