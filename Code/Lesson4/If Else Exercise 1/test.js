const { spawn } = require('child_process');

const testCases = [
    { input: '2\n', expectedOutput: 'Fail\n' },
    { input: '85\n', expectedOutput: 'Excellent\n' },
    { input: '60\n', expectedOutput: 'Good\n' },
    { input: '84\n', expectedOutput: 'Very Good\n' },
    // { input: 'Batman\n', expectedOutput: 'Hi there, Batman!\nYour name has 6 characters!\n' },
    // { input: 'Christopher Nolan\n', expectedOutput: 'Hi there, Christopher Nolan!\nYour name has 17 characters!\n' },
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