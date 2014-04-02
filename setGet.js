function Archiver() {
  var temperature = null;
  var archive = [];
  //TODO: implement "Archiver" as a self-archiving object
  //...ensure that when "temperature" property is
  //...set, that the array returned by getArchive
  //...gets a log entry in the form of {date:,val:}
  this.temperature = temperature;
  this.archive = archive;
  archive.push(temperature);
  this.getArchive = function() {return archive;};
}

var arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
console.log(arc.getArchive());
