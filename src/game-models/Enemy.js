// Враг.

class Enemy {
  constructor(trackLenght) {
    this.generateSkin();
    this.position = trackLenght - 1;
  }

  generateSkin() {
    const skins = [
      '👾',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    console.log('Enemy is dead!');
    this.generateSkin();
    this.position = 70;
  }
}

module.exports = Enemy;
