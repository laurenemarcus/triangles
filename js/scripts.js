var triangles = function(triangle) {
  var sideOne = triangle[0];
  var sideTwo = triangle[1];
  var sideThree = triangle[2];
  var triangles = ["equilateral", "scalene", "isosceles"];

  if ((sideOne === sideTwo) && (sideOne === sideThree) && (sideTwo === sideThree)) {
    return triangles[0];
  } else if ((sideOne != sideTwo) && (sideOne != sideThree) && (sideTwo != sideThree)) {
    return triangles[1];
  } else if ((sideOne == sideTwo) && (sideTwo != sideThree)) {
    return triangles[2];
  } 
}
