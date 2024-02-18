function backgroundChange(){
    //get elements
    var day = document.getElementById("days").value;
    var container = document.getElementById("selectContainer");

    switch(day){
        //case 1 day Monday
        case "Monday":
            container.style.backgroundColor = "#e6194B";
            break;
        //case 2 day Tuesday
        case "Tuesday":
            container.style.backgroundColor = "#f58231";
            break;
        //case 3 day Wednesday
        case "Wednesday":
            container.style.backgroundColor = "#ffe119";
            break;
        //case 4 day Thursday
        case "Thursday":
            container.style.backgroundColor = "#000075";
            break;
        //case 5 day Friday
        case "Friday":
            container.style.backgroundColor = "#800000";
            break;
        //case 6 day Saturday
        case "Saturday":
            container.style.backgroundColor = "#42d4f4";
            break;
        //case 7 day Sunday
        case "Sunday":
            container.style.backgroundColor = "#911eb4";
            break;
        //default value
        default:
            container.style.backgroundColor = "#e6194B";
    }


}

function determineNumberType(){
    //initialize
    const number = document.getElementById("numberID").value;
    let isPrime=isPrimeNumber(number);
    let string = "The number entered is an ";

    //check if even or odd
    if(number%2==0){
        string+="even ";
    } else {
        string+="odd ";
    }

    //if prime or composite
    if(isPrime){
        string+="prime number ";
    }else if(!isPrime){
        string+="composite number ";
    }

    //range
    if(number<=50){
        string+="less than or equal to 50 ";
    } else if(number>50&&number<=75){
        string+="greater than 50 and less than or equal to 75";
    } else if(number>75&&number<=100){
        string+="greater than 75 and less than or equal to 100";
    }else if(number>100){
        string+="greater than 100 ";
    }

    //alert message
    displayText(string);

}

function displayText(string){
    var message=document.getElementById('indexData');
    message.textContent = string;
}

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