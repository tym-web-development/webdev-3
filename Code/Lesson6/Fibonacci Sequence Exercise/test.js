const { spawn } = require('child_process');

const testCases = [
    { input: '\n', expectedOutput: `0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n55\n89\n144\n233\n377\n` },
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