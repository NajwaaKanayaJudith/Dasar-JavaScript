let TB = 1.7;
let BB = 90;

let BMI = BB / (TB * TB);

if (BMI > 30){
    console.log("Status berat badan Rhodey adalah obesitas / kegemukan")
}else if (BMI <= 29.9 && BMI >= 25){
    console.log("Status berat badan Rhodey adalah kelebihan berat badan")
}else if (BMI <= 24.9 && BMI >= 18.5){
    console.log("Status berat badan Rhodey adalah normal / ideal")
}else if (BMI <= 18.5){
    console.log("Status berat badan Rhodey adalah kekurangan berat badan")
}
