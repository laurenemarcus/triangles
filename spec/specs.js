describe("triangles", function() {
  it("returns equilateral when all sides are equal", function () {
    expect(triangles([3, 3, 3])).to.equal("equilateral");
  });

  it("returns scalene when no sides are equal", function () {
    expect(triangles([6, 4, 3])).to.equal("scalene");
  });

  it("returns isosceles when only the first two sides are equal", function () {
    expect(triangles([3, 3, 4])).to.equal("isosceles");
  });

  it("returns isosceles when only the first and third sides are equal", function () {
    expect(triangles([3, 4, 3])).to.equal("isosceles");
  });
  it("returns isosceles when only the second and third sides are equal", function () {
    expect(triangles([4, 3, 3])).to.equal("isosceles");
  });
});
