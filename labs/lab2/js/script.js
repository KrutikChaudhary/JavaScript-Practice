
        // Anwers to the question

        // a) What is the scope of a const variable?
        // const keyword is used to declare a constant variable.
        // The scope of a const variable in JavaScript is block scope. 
        // We can only access the const variables in the block, in which it was declared
        // We can add or change property
        // but cannot reassign the const
        // object.

        //b) When were the let and const keywords added to JavaScript?
        //let and const keywords were introduced in ES6(2015)


        //function to calculate area of circle with radius 6
        function areaOfCircle(){

            //initiailze
            const radius = 6;
            const pi = 3.14159;

            //calculate and print
            const area = pi*radius*radius;
            console.log("Area of circle with radius 6 is :" + area);
        }
        //call
        areaOfCircle();

        //calculate
        function calculate(a,b){
                //add 
                let addition;
				addition = a + b;
				console.log("Result after addition : " + addition);

                //subtract
				let subtraction;
				subtraction = a - b;
				console.log("Result after subtraction : " + subtraction);

                //multiply
				let multiplication;
				multiplication = a * b;
				console.log("Result after multiplication : " + multiplication);

                //divide
				let division;
				division = a / b;
				console.log("Result after division : " + division);
        }


        //function to calculate area of rectangle with a length of 20, and width of 15.
        function areaOfRectangle(length, width){

            //print
            console.log("Area of rectangle with a length of "+length+", and width of "+width +" is: " + length*width);
        }

    