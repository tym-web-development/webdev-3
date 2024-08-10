const { spawn } = require('child_process');

const testCases = [
    { input: ['Math\n', '59\n'], expectedOutput: 'Fail\n' },
    { input: ['Math\n', '85\n'], expectedOutput: 'Pass\n' },
    { input: ['English\n', '60\n'], expectedOutput: 'Pass\n' },
    { input: ['English\n', '49\n'], expectedOutput: 'Fail\n' },
    // Add more test cases as needed
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

    testCase.input.forEach(line => process.stdin.write(line));
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