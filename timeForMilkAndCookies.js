//My idea
function timeForMilkAndCookies(date) {
  var month = date.getMonth();
  var day = date.getDate();
  if (month === 11 && day === 24) {
    return true;
  } else {
    return false;
  }
}

//The better one
function timeForMilkAndCookies(date){
  return date.getDate() == 24 && date.getMonth() == 11;
}
