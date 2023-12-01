// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor({ trackLength, hero }) {
    this.trackLength = trackLength;
    this.skin = '🌀';
    this.position = 0;
    this.heroPosition = hero.position;
  }

  fly() {
    const distance = 15;
    for (let i = 1; i <= distance; i++) {
      setTimeout(() => this.moveRight(1), 70 * i);
    }
    for (let i = 1; i <= distance; i++) {
      setTimeout(() => this.moveLeft(), 70 * (distance + i));
    }
    setTimeout(() => this.reset(), 70 * (distance * 2));
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight(distance) {
    // Идём вправо.
    this.position += distance;
  }

  reset() {
    this.position = this.heroPosition + 1;
  }
}

module.exports = Boomerang;
