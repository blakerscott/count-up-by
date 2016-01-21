describe('countUp', function() {

  it("if countTo is equal to 50 and countBy 7", function() {
    expect(countUp(7, 50)).to.eql([7, 14, 21, 28, 35, 42, 49]);
  });

  it("if countTo is equal to 30 and countBy 5", function() {
    expect(countUp(5, 30)).to.eql([5, 10, 15, 20, 25, 30]);
  });

  it("if countTo is equal to 50 and countBy 8", function() {
    expect(countUp(8, 50)).to.eql([8, 16, 24, 32, 40, 48]);
  });
});
