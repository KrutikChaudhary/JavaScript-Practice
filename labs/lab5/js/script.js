function determineNumberType(){
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(Number);

    //variables for map
    let prime=0;
    let composite=0;
    let neither=0;

    //variables for For loop
    let primeFor=0;
    let compositeFor=0;
    let neitherFor=0;

    //variables for ForEach loop
    let primeEach=0;
    let compositeEach=0;
    let neitherEach=0;
    
    //determine number type
    numbers.map(numberIndex => {
        if(isPrimeNumber(numberIndex)){
            prime++;
        }else if (numberIndex > 1 && !isPrimeNumber(numberIndex)) {
            composite++;
        }else if (!isPrimeNumber(numberIndex) && numberIndex<=1){
            neither++;
        }
    });

    numbers.forEach(numberIndex => {
        if(isPrimeNumber(numberIndex)){
            primeEach++;
        }else if (numberIndex > 1 && !isPrimeNumber(numberIndex)) {
            compositeEach++;
        }else if (!isPrimeNumber(numberIndex) && numberIndex<=1){
            neitherEach++;
        }
    });

    for (let i = 0; i < numbers.length; i++) {
        if(isPrimeNumber(numbers[i])){
            primeFor++;
        }else if (numbers[i] > 1 && !isPrimeNumber(numbers[i])) {
            compositeFor++;
        }else if (!isPrimeNumber(numbers[i]) && numbers[i]<=1){
            neitherFor++;
        }
    }


    //set text
    var message=document.getElementById('resultFor');
    message.textContent = `For Loop: Primes = ${primeFor}, Composites = ${compositeFor}, Neither = ${neitherFor}`;
    var message=document.getElementById('resultForEach');
    message.textContent = `For Each Loop: Primes = ${primeEach}, Composites = ${compositeEach}, Neither = ${neitherEach}`;
    var message=document.getElementById('resultMap');
    message.textContent = `Map: Primes = ${prime}, Composites = ${composite}, Neither = ${neither}`;

}


//fuction to determine if its prime(I used same code from my previous lab)
function isPrimeNumber(number){
    //number greater than 3
    if(number>3){
        //determine limit, after this limit there is no need to check, as its repeating or non divisible
        const squareLimit = Math.sqrt(number);

        //if composite return false
        for(let i = 2; i<=squareLimit; i++){
            if(number%i==0){
                return false;
            }
        }
        //else prime
        return true;
    }

    //prime always
    else if(number==2||number==3){
        return true;
    }

    //not prime, covered all ranges
    else{
        return false;
    }
}