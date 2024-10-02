process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
    console.log('Your name is:', input.trim());
    process.exit();
});

process.on('exit', () => {
    if (!process.stdin.isTTY) {
        console.log('This important software is now closing');
    }
});
