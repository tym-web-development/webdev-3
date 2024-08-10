const { spawn } = require('child_process');

const testCases = [
    { input: '10\n', expectedOutput: `Volume of the sphere is: 4188.790204786391\n` },
    { input: '1\n', expectedOutput: `Volume of the sphere is: 4.1887902047863905\n` },
    { input: '2\n', expectedOutput: `Volume of the sphere is: 33.510321638291124\n` },
    { input: '5\n', expectedOutput: `Volume of the sphere is: 523.5987755982989\n` },
];

function runTest(testCase, callback) {
    const process = spawn('node', ['main.js']);

    let output = '';
    process.stdout.on('data', (data) => {
        output += data.toString();
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
        if (output.includes(testCase.expectedOutput)) {
            console.log('Test passed');
            console.log('Your output:\n'+ output,);
        } else {
            console.log('Test failed');
            console.log('Expected output:\n'+ testCase.expectedOutput);
            console.log('Actual output:\n'+ output);
        }
        callback();
    });

    process.stdin.write(testCase.input);
    process.stdin.end();
}

function runTests(tests) {
    if (tests.length === 0) {
        console.log('All tests completed.');
        return;
    }

    const [first, ...rest] = tests;
    runTest(first, () => runTests(rest));
}

runTests(testCases);