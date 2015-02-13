describe("triangles", function() {
  it("returns equilateral when all sides are equal", function () {
    expect(triangles([3, 3, 3])).to.equal("equilateral");
  });
});
