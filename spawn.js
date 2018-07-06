const { spawn } = require('child_process');

// const child = spawn('pwd');

// child.on('exit', function(code, signal) {
//     console.log(code, 'code');
//     console.log(signal, 'signlal');
// })

const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});