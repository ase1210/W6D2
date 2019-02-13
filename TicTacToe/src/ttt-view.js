class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $lis = $('li');
    for (let i = 0; i < $lis.length; i++) {
      $lis.eq(i).on('click', (e)=> {
        let $li = e.target;
        let pos = $li.data('pos')
        let p1Mark = this.game.currentPlayer;
        $li.html(p1Mark)
        try {
          this.game.playMove(pos);
        } catch (e) {
          alert(e.msg);
        }
        $li.hover(
          () => {$li.css('background', 'yellow');},
          () => {$li.css('background', 'white');}
          );        
        if (p1Mark === 'x') {
          $li.css('color', 'orange');
        } else {
          $li.css('color', 'red');
        }
        if (this.game.isOver()){
          alert(`${this.game.winner()} has won!`);
        }
      });
    }
  }

  makeMove($square) {

  }

  setupBoard() {
    const $ul = $('<ul>');
    $ul.css('width', '620');
    $ul.css('display', 'flex');
    $ul.css('flex-wrap', 'wrap');
    this.$el.append($ul);
    const boardPos = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
    for (let i = 0; i < 9; i++) {
      const $li = $('<li></li>');
      $li.css('background', 'teal');
      $li.css('list-style', 'none');
      $li.css('width', '200');
      $li.css('height', '200');
      $li.css('font-size', '100px');
      $li.css('text-align', 'center');
      $li.css('border', '3px solid black');
      $li.css('cursor', 'pointer');
      $li.data('pos', boardPos[i]);
      $li.hover(
        () => {$li.css('background', 'yellow');},
        () => {$li.css('background', 'teal');}
        );
      $ul.append($li);
    }
  }
}

module.exports = View;
