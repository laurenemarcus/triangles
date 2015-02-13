var triangles = function(triangle) {
  var sideOne = triangle[0];
  var sideTwo = triangle[1];
  var sideThree = triangle[2];
  var triangles = ["equilateral"];

  if ((sideOne === sideTwo) && (sideOne === sideThree) && (sideTwo === sideThree)) {
    return triangles[0];
  }
}
