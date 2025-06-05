function heron(a, b, c) {
  var semiPerimeter = (a+b+c)/2;
  var area = Math.sqrt(semiPerimeter * ( semiPerimeter -a ) * (semiPerimeter -b ) * (semiPerimeter - c ));
  return area; 
  // return 0;
}