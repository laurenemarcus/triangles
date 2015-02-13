var triangles = function(triangle) {
  var sides = triangle.split(" ");
  var sideOne = parseInt(sides[0]);
  var sideTwo = parseInt(sides[1]);
  var sideThree = parseInt(sides[2]);
  var triangles = ["equilateral", "scalene", "isosceles", "not a triangle"];

  if ((sideOne === sideTwo) && (sideOne === sideThree) && (sideTwo === sideThree)) {
    return triangles[0];
  } else if ((sideOne + sideTwo <= sideThree) || (sideThree + sideTwo <= sideOne) || (sideOne + sideThree <= sideTwo)) {
    return triangles[3];
  } else if ((sideOne != sideTwo) && (sideOne != sideThree) && (sideTwo != sideThree)) {
    return triangles[1];
  } else if (((sideOne == sideTwo) && (sideTwo != sideThree)) || ((sideOne == sideThree) && (sideTwo != sideOne)) || ((sideTwo == sideThree) && (sideTwo != sideOne))) {
    return triangles[2];
  }
}

$(document).ready(function() {
  $("form#triangle-namer").submit(function(event){
    var triangle = $("input#triangle").val();
    var result = triangles(triangle);

    $(".triangle-name").text(result);

    $("#dork").show();
    event.preventDefault();
  });
});
