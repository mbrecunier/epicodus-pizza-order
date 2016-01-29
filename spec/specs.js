describe('Pizza', function() {
  it('creates a new Pizza object with the following properties', function() {
    var testPizza = new Pizza('large', 'pan', true, ['spinach', 'olives'], ['pepperoni', 'bacon']);
    expect(testPizza.size).to.equal('large');
    expect(testPizza.crust).to.equal('pan');
    expect(testPizza.cheese).to.equal(true);
    expect(testPizza.vegetables).to.eql(['spinach', 'olives']);
    expect(testPizza.meats).to.eql(['pepperoni', 'bacon']);
  });
  it('has a method that will calculate price', function() {
    var testPizza = new Pizza('small', 'pan', true, ['bell peppers', 'artichoke hearts', 'spinach'], ['sausage']);
    testPizza.calculatePrice();
    expect(testPizza.price).to.equal();
  });
});
