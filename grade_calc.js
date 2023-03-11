let gradePercentage = -19

if (gradePercentage < 60 && gradePercentage > 0){
    console.log("Your grade is a F");
}else if (gradePercentage < 70 && gradePercentage > 59.99){
    console.log("Your grade is a D");
}else if (gradePercentage < 80 && gradePercentage > 69.99){
    console.log("Your grade is a C");
}else if (gradePercentage < 90 && gradePercentage > 79.99){
    console.log("Your grade is a B");
}else if (gradePercentage < 100 && gradePercentage > 89.99){
    console.log("Your grade is an A");
}else if (gradePercentage > 100){
    console.log("Ok smarty pants, no need to brag.");
}else if (gradePercentage < 0){
    console.log("My guy... wha... is that even possible!?!?!");
}else {
    console.log("c'mon wahts your grade");
}