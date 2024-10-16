        function fibsRecursive(n) {
            if (n < 0) {
                return "Please enter a positive number.";  // Return message for negative numbers
            }

            if (n === 0) {
                return [];  // Return an empty array if n is 0
            } else if (n === 1) {
                return [0];  // Fibonacci series for n = 1 is just [0]
            } else if (n === 2) {
                return [0, 1];  // Fibonacci series for n = 2 is [0, 1]
            } else {
                let s = fibsRecursive(n - 1);  // Recursively compute the Fibonacci series for n-1
                s.push(s[s.length - 1] + s[s.length - 2]);  // Add the next Fibonacci number
                return s;
            }
        }

        console.log(fibsRecursive(-1)); // Output: Please enter a positive number.
        console.log(fibsRecursive(0));  // Output: []
        console.log(fibsRecursive(7));  // Output: [0, 1, 1, 2, 3, 5, 8]

        function fibsIterative(n) {
            if (n < 0) return "Please enter a positive number.";  // Return message for negative numbers

            if (n === 0) return [];  // Return an empty array if n is 0
            if (n === 1) return [0];  // Return [0] if n is 1

            let fibsArray = [0, 1];  // Start the array with the first two Fibonacci numbers

            for (let i = 2; i < n; i++) {  // Generate Fibonacci numbers until we have 'n' numbers
                fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
            }

            return fibsArray;
        }

        console.log(fibsIterative(-1)); // Output: Please enter a positive number.
        console.log(fibsIterative(0));  // Output: []
        console.log(fibsIterative(7));  // Output: [0, 1, 1, 2, 3, 5, 8]
