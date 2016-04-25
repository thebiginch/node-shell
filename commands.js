//export = module.export = {}
var fs = require('fs');
var request = require('request');

var commands = {};


commands.pwd = function() {

    return process.cwd();
    //process.stdout.write(process.cwd());
};

commands.date = function() {
    return Date();
};

// function(args : array)
commands.ls = function(args) {

    path = args[0] || process.cwd();

    var result = 1;
    fs.readdir(path, function(err, files) {
        if (err) throw err;
        console.log(files.join(' '));
        console.log('prompt >');
    });
    // rework this to take arguments


};

commands.echo = function(args) {

    // for the future, maybe interpret things with bling signs

    return args.join(' ');
}

commands.cat = function(args) {

    var callback = function(err, data) {
        if (err) throw err;
        console.log(data);
    };

    args.forEach(function(filepath) {
        fs.readFile(filepath, 'utf-8', callback);

    });

}

commands.sort = function(args) {

    var callback = function(err, data) {
        if (err) throw err;
        console.log('before split', data);
        data = data.split('\n').sort().join('\n');
        console.log('after split', data);

    };

    fs.readFile(args[0],'utf-8',callback);


}

commands.sort = function(args) {

    var callback = function(err, data) {
        if (err) throw err;
        //console.log('before split', data);
        data = data.split('\n').sort().join('\n');
        console.log(data);

    };

    fs.readFile(args[0],'utf-8',callback);


}

commands.wc = function(args) {

    var callback = function(err, data) {
        if (err) throw err;
        
        console.log(data.split('\n').length);

    };

    fs.readFile(args[0],'utf-8',callback);


}

commands.uniq = function(args) {

    var callback = function(err, data) {
        if (err) throw err;
        var obj ={};
        data.split('\n').forEach(function(line){
        	obj[line] ? 1:obj[line] = 0;
		});

		for(var line in obj){
			obj.hasOwnProperty(line) ? console.log(line): 0;
		}



    };

    fs.readFile(args[0],'utf-8',callback);


}




module.exports = commands;
