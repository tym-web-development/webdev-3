const { spawn } = require('child_process');

const testCases = [
    { input: '\n', expectedOutput: `{"name":"John","age":31,"city":"New York"}\n` },
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