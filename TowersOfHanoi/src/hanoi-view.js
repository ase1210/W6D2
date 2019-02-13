class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    this.$el.css('background', 'pink');
    for (let i = 0; i < 3; i++) {
      const $ul = $('<ul></ul>');
      this.$el.append($ul);
    }
    const $uls = $('ul');
    const $li = $('<li>');
    
    $uls.eq(0).append($li);

  }

  render() {

  }

  clickTower() {}
}

module.exports = View;