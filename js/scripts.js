function Pizza(size, crust, cheese, vegetables, meats) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.vegetables = vegetables;
  this.meats = meats;
  this.price;
}

Pizza.prototype.calculatePrice = function() {
  this.price = 10; //base price
  //size price
  if (this.size === 'small') {
    this.price -= 3;
  } else if (this.size === 'large') {
    this.price += 3;
  }
  //crust price
  if (this.crust === 'stuffed') {
    this.price += 3;
  } else if (this.crust === 'pan') {
    this.price += 2;
  }
  //cheese price
  if (this.cheese === 'no') {
    this.price -= 1;
  }
  //vegetables price
  for (var i = 0; i < this.vegetables.length; i++) {
    this.price += 1.5;
  }
  //meat price
  for (var i = 0; i < this.meats.length; i++) {
    this.price += 2.5;
  }
}

Pizza.prototype.shortDescription = function() {
  return "A " + this.size + " " + this.crust + " pizza: $" + this.price;
}

$(document).ready(function() {
  $('#order-form').submit(function(event) {
    event.preventDefault();
    //store form inputs in variable to create new pizza
    var size = $('input[name=size]:checked').val();
    var crust = $('input[name=crust]:checked').val();
    var cheese = $('input[name=cheese]:checked').val();
    var vegetables = $('input:checkbox[name=vegetables]:checked').map(function() {
        return this.value;
      }).get();
    var meats = $('input:checkbox[name=meats]:checked').map(function() {
        return this.value;
      }).get();
    var newPizza = new Pizza(size, crust, cheese, vegetables, meats);
    //calculate price based on user input
    newPizza.calculatePrice();
    //display each pizza as a list item
    $('#pizza-list').append('<li>' + newPizza.shortDescription() + '</li>');
    //reset form buttons back to default
    document.getElementById("order-form").reset();
  });

});
