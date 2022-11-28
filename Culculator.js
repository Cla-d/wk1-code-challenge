// Net Salary Culculator
function netSalaryCulculator(){
    const basicSalary = prompt("input salary")
    // benefits = prompt("input benefits")
    //basic salary = grossSalary - benefits
    if (basicSalary <= 24,000){
        paye = basicSalary / 10;
    } else if (basicSalary >= 24,001 && basicSalary <= 32,333) {
    paye = basicSalary / 4;
    } else {
        basicSalary > 32,333
        paye = (basicSalary * 3) / 10;
    }
}
console.log(`paye;${paye}`)

// NHIF Deductions
if (basicSalary <= 5,999) {
    deductionNhif = 150;
} else if (basicSalary >= 6,000 && basicSalary <= 7,999) {
    deductionNhif = 300;
} else if (basicSalay >= 8,000 && basicSalary <= 11,999) {
    deductionNhif = 400;
} else if (basicSalary >= 12,000 && basicSalary <= 14,999) {
    deductionNhif = 500;
} else if (basicSalary >= 15,000 && basicSalary <= 19,999) {
    deductionNhif = 600;
} else if (basicSalary >= 20,000 && basicSalary <= 24,999) {
    deductionNhif = 750;
} else if (basicSalary >= 25,000 && basicSalary <= 29,999) {
    deductionNhif = 850;
} else if (basicSalary >= 30,000 && basicSalary <= 34,999) {
    deductionNhif = 900;
} else if (basicSalary >= 35,000 && basicSalary <= 39,999) {
    deductionNhif = 950;
} else if (basicSalary >= 40,000 && basicsalary <= 44,000) {
    deductionNhif = 1,000
} else if (basicSalary >= 45,000 && basicSalary <= 49,000) {
    deductionNhif = 1,100
} else if (basicSalary >= 50,000 && basicSalary <= 59,999) {
    deductionNhif = 1,200
} else if (basicSalary >= 60,000 && basicSalary <= 69,999) {
    deductionNhif = 1,300
} else if (basicSalary >= 70,000 && basicSalary <= 79,999) {
    deductionNhif = 1,400
} else if (basicSalary >= 80,000 && basicSalary <= 89,999) {
    deductionNhif = 1,500
} else if (basicSalary >= 90,000 && basicsSalary <= 99,999) {
    deductionNhif = 1,600
} else {
    basicSalary >= 100,000 
    deductionNhif = 1,700
} 
console.log(`NHIF:${deductionNhif}`)
// NSSF Deductions
let nssf = (basicSalary * 6) /100
console.log(`NSSF:${nssf}`);
let netSalary = basicSalary - paye - deductionNhif -nssf;
console.log(`Net Salary:${netSalary}`)
netSalaryCalculator();