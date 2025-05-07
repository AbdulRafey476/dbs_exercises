// EXERCISE 1
function checkBaggage() {
    const weight = parseFloat(document.getElementById("weightInput").value);

    if (isNaN(weight)) {
        alert("Please enter a valid number.");
        return;
    }

    if (weight > 15) {
        alert("Baggage exceeds the 15kg allowance!");
    } else {
        alert("Baggage is within the allowance.");
    }
}

// EXERCISE 2
function doIt() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    alert("The sum of all multiples of 3 or 5 below 1000 is: " + sum);
}

// EXERCISE 3
function sumMultiples(a, b, n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}

function calculateAndShowSum() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const n = parseInt(document.getElementById("n").value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        alert("Please enter valid numbers for a, b, and n.");
        return;
    }

    const result = sumMultiples(a, b, n);
    alert("The sum of all multiples of " + a + " or " + b + " below " + n + " is: " + result);
}

// EXERCISE 4
function f4(a, b, l) {
    return l.reduce((sum, x) => {
        if (x % a === 0 || x % b === 0) {
            return sum + x;
        }
        return sum;
    }, 0);
}
// console.log(f4(3, 5, [1, 2, 3, 4, 5, 6, 10, 15, 17]));

function handleClick() {
    const a = parseInt(document.getElementById("inputA").value);
    const b = parseInt(document.getElementById("inputB").value);
    const lRaw = document.getElementById("inputL").value;

    const l = lRaw
        .split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num));

    const result = f4(a, b, l);
    alert("The sum is: " + result);
}

// EXERCISE 5
function f5(a, l) {
    return l.reduce((sum, num) => {
        return (num % a[0] === 0 || num % a[1] === 0) ? sum + num : sum;
    }, 0);
}

function handleClick2() {
    const aRaw = document.getElementById("inputAA").value;
    const lRaw = document.getElementById("inputLL").value;

    const a = aRaw
        .split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num));

    const l = lRaw
        .split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num));

    if (a.length !== 2) {
        alert("Please enter exactly two numbers for 'a'.");
        return;
    }

    const result = f5(a, l);
    alert("The sum is: " + result);
}


// EXERCISE 6
function f6(a, l) {
    return l.reduce((sum, num) => {
        // console.log(num + "--" +sum)
        return a.some(factor => num % factor === 0) ? sum + num : sum;
    }, 0);
}

function handleClick3() {
    const aRaw = document.getElementById("inputAAA").value;
    const lRaw = document.getElementById("inputLLL").value;

    const a = aRaw
        .split(',')
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n));

    const l = lRaw
        .split(',')
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n));

    if (a.length === 0 || l.length === 0) {
        alert("Please enter valid numbers in both a and l.");
        return;
    }

    const result = f6(a, l);
    alert("The sum is: " + result);
}

// EXERCISE 7
function f7(basket, prices) {
    let total = 0;
    for (let item in basket) {
        total += basket[item] * prices[item]
    }
    return total
}

function handleClick4() {
    const apple = Number(document.getElementById("apple").value);
    const oranges = Number(document.getElementById("oranges").value);
    const banana = Number(document.getElementById("banana").value);

    const appleprice = parseFloat(document.getElementById("appleprice").value);
    const orangesprice = parseFloat(document.getElementById("orangesprice").value);
    const bananaprice = parseFloat(document.getElementById("bananaprice").value);

    const basket = { apple, oranges, banana }
    const prices = { apple: appleprice, oranges: orangesprice, banana: bananaprice }

    const result = f7(basket, prices);
    alert("Total Cost of Basket: " + result);
}