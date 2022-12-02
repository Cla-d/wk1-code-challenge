const prompt = require("prompt-sync")({ sigint: true });

//Function to calculate PAYE tax.
function calculatePAYETax(basicSalary) 
{
    if(basicSalary <= 24000) 
    {
        tax = basicSalary * (10/100)
        return tax
    }
    if(basicSalary > 24000 && basicSalary <= 32333)
    {
        tax = basicSalary * (25/100)
        return tax
    }
    if(basicSalary > 32333)
    {
        tax = basicSalary * (30/100)
        return tax
    }
}

//Function to calculate NHIF deductions from basic salary.
function calculateNHIFDeductions(basicSalary)
{
    if(basicSalary <= 5999) return 150
    if(basicSalary > 5999 && basicSalary <= 7999) return 300
    if(basicSalary > 7999 && basicSalary <= 11999) return 400
    if(basicSalary > 11999 && basicSalary <= 14999) return 500
    if(basicSalary > 14999 && basicSalary <= 19999) return 600
    if(basicSalary > 19999 && basicSalary <= 24999) return 750
    if(basicSalary > 24999 && basicSalary <= 29999) return 850
    if(basicSalary > 29999 && basicSalary <= 34999) return 900
    if(basicSalary > 34999 && basicSalary <= 39999) return 950
    if(basicSalary > 39999 && basicSalary <= 44999) return 1000
    if(basicSalary > 44999 && basicSalary <= 49999) return 1100
    if(basicSalary > 49999 && basicSalary <= 59999) return 1200
    if(basicSalary > 59999 && basicSalary <= 69999) return 1300
    if(basicSalary > 69999 && basicSalary <= 79999) return 1400
    if(basicSalary > 79999 && basicSalary <= 89999) return 1500
    if(basicSalary > 89999 && basicSalary <= 99999) return 1600
    if(basicSalary > 99999) return 1700
}

//Function to calculate NSSF deductions
function calculateNSSFDeductions(basicSalary)
{   
    return (basicSalary * (6/100))
}

//Function to calculate gross salary
function calculategrossSalary(basicSalary, benefits)
{
    return (basicSalary + benefits)
}

//Function to calculate net salary
function calculatenetSalary(grossSalary, paye, nhif, nssf)
{
    netSalary = (grossSalary - paye - nhif - nssf)
    return netSalary
}


//Prompting the user to input their basic salary and total benefits
var basicSalary = Number(prompt("Please input basic salary: "));
var benefits = Number(prompt("Please input your benefits total amount: "));

//Printing out the results.
console.log("Your gross salary:"+ calculategrossSalary(basicSalary, benefits));
console.log("Your PAYE TAX: "+ calculatePAYETax(basicSalary));
console.log("Your NHIF deductions: " + calculateNHIFDeductions(basicSalary));
console.log("Your NSSF deductions: " + calculateNSSFDeductions(basicSalary));
console.log("Your net salary: "+ calculatenetSalary(
            calculategrossSalary(basicSalary, benefits), 
            calculatePAYETax(basicSalary), 
            calculateNHIFDeductions(basicSalary), 
            calculateNSSFDeductions(basicSalary)
        )
    ) 