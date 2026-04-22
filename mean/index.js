const addInput = document.getElementById('userInput')
const calc = document.getElementById('calculate')

// We use the users input to find their mean
function findMean(){
    // Data is =>
         const arr = n.split(' ').map(Number);

        // Validate input
        if (arr.some(isNaN)) {
            console.log('Invalid input. Please enter only numbers.');
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
}

document.addEventListener('click', findMean())