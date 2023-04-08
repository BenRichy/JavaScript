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
    BMI = (weight / height ** 2).toFixed(1);
    return BMI;
};

// create comparison
function BMI_compare(BMI_1, BMI_2, name_1, name_2) {
    if (BMI_1 > BMI_2) {
        console.log(name_1 + "'s BMI (" + BMI_1 + ") is greater than " + name_2 + "'s (" + BMI_2 + ").");
    } else if (BMI_1 < BMI_2) {
        console.log(name_2 + "'s BMI (" + BMI_2 + ") is greater than " + name_1 + "'s (" + BMI_1 + ").");
    } else if (BMI_1 == BMI_2) {
        console.log(name_1 + "'s BMI (" + BMI_1 + ") is equal to " + name_2 + "'s (" + BMI_2 + ").");
    } else {
        console.log("Potential error");
    }
};


//names
Mark = "Mark"
John = "John"

// first comparison
MarkBMI = BMI_calc(78, 1.69);
JohnBMI = BMI_calc(92, 1.95);

BMI_compare(MarkBMI, JohnBMI, Mark, John)


//second comparison
MarkBMI = BMI_calc(95, 1.88);
JohnBMI = BMI_calc(85, 1.76);

BMI_compare(MarkBMI, JohnBMI, Mark, John)
