function digitize(n) {
  //code here
  const arr = n.toString().split('').map(Number);
  return arr.reverse();
}