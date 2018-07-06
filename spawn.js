const { spawn } = require('child_process');

const child = spawn('pwd');

child.on('exit', function(code, signal) {
    console.log(code, 'code');
    console.log(signal, 'signlal');
})