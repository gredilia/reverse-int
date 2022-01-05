module.exports = function reverse(n) {
  let newstr = n.toString();
  //console.log(typeof newstr)
  let newString = "";
  for (let i = newstr.length - 1; i >= 0; i--) {
    newString += newstr[i];
  }
  return parseInt(newString);
};
