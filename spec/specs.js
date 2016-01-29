describe('Pizza', function() {
  it('creates a new Pizza object with the following properties', function() {
    var myPizza = new Pizza();
    expect(myPizza.size).to.equal()
    expect(myPizza.crust).to.equal();
    expect(myPizza.cheeses).to.equal([])
    expect(myPizza.vegetables).to.eql([]);
    expect(myPizza.meats).to.eql([]);
    expect(myPizza.price).to.equal();
  });
});
