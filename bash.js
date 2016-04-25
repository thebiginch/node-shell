// Output a prompt
var commands = require('./commands');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  

  var cmd = data.toString().trim(); // remove the newline

  //split args
  var raw = cmd.split(' ');
  var cmd = raw[0];
  var args = raw.slice(1);

  
  if(commands[cmd]) commands[cmd](args);
  else console.log('Error');

  //process.stdout.write('prompt > ');

  
});