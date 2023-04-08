// challenge 1

/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// create BMI function
function BMI_calc(weight, height) {
    BMI = weight / height ** 2;
    console.log(BMI);
    return BMI;
}


// first comparison
MarkBMI = BMI_calc(78, 1.69);
JohnBMI = BMI_calc(92, 1.95);

if (MarkBMI > JohnBMI) {
    console.log("Mark's BMI is greater than John's");
} else if (MarkBMI < JohnBMI) {
    console.log("John's BMI is greater than Mark's");
} else {
    console.log("Potential error");
};

//second comparison
MarkBMI = BMI_calc(95, 1.88);
JohnBMI = BMI_calc(85, 1.76);

if (MarkBMI > JohnBMI) {
    console.log("Mark's BMI is greater than John's");
} else if (MarkBMI < JohnBMI) {
    console.log("John's BMI is greater than Mark's");
} else {
    console.log("Potential error");
};