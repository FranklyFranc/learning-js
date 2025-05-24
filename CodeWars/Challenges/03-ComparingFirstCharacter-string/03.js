function areYouPlayingBanjo(name) {
  // Implement me
  let inicial = ("R");
  let inicialMinus = ("r");

  for (let i = 0; i < name.length; i++) {
    if ( name.charAt(0) === inicial || name.charAt(0) === inicialMinus) {
      return name + " plays banjo"
    } else {
      return name + " does not play banjo"
    }
  }
 // return name;
}


// versión más limpia: 

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
