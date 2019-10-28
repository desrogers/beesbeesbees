var Bee = function() {
  Grub.call(this); // makes bee a sbuclass of superclass Grub
  this.age = 5;
  this.color = 'yellow';
  this.food;
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;