describe('by5', function() {

  it("if number is  not divisible by 5 or 7", function() {
    expect(counter(13)).to.equal(false);
  });
  
  it("if number is divisible by 5", function() {
    expect(counter(10)).to.equal(true);
  });

  it("if number is divisible by 7", function() {
    expect(counter(30)).to.equal(true);
  });

  it("if countTo is equal to 30 and countBy 5", function() {
    expect(by5(5, 30)).to.equal(5, 10, 15, 20, 25, 30);
  });

});
