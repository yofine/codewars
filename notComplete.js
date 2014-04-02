function titleCase(title, minorWords) {
  return title.split(' ').map(function(element) {
    return element.toLowerCase()[0].toUpperCase().concat(element.substr(1, element.length).toLowerCase());
  }).join(' ');
}

console.log(titleCase('the quick brown fox'));
