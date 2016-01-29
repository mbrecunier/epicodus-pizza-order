function Pizza(size, crust, cheese, vegetables, meats) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.vegetables = vegetables;
  this.meats = meats;
  this.price;
}

Pizza.prototype.calculatePrice = function() {
  this.price = 10;
  if (this.size === 'small') {
    this.price -= 3;
  } else if (this.size === 'large') {
    this.price += 3;
  }

  if (this.crust === 'stuffed') {
    this.price += 3;
  } else if (this.crust === 'pan') {
    this.price += 2;
  }

  if (this.cheese === false) {
    this.price -= 1;
  }

  for (var i = 0; i < this.vegetables.length; i++) {
    this.price += 1.5;
  }

  for (var i = 0; i < this.meats.length; i++) {
    this.price += 2.5;
  }
}
