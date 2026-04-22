// DOM connecting with html
const addInput = document.querySelector(input)



function findMean() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter numbers (space-separated): ', function (n) {
        // Convert input string to array of numbers
        const arr = n.split(' ').map(Number);

        // Validate input
        if (arr.some(isNaN)) {
            console.log('Invalid input. Please enter only numbers.');
            rl.close();
            return;
        }

        // Calculate mean
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }

        let mean = total / arr.length;

        console.log(`Mean is: ${mean}`);

        // Calculate the variance 
        //Using the mean 
        let total2 = 0
        for(let i = 0; i< arr.length; i++){
            let ans = (arr[i] - mean)**2
            total2 += ans
        }
        let variance = total2 / arr.length
        console.log(`Variance is: ${variance}`)
        rl.close();
    });
}

findMean();