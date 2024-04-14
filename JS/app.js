const inputs = document.querySelectorAll("input, select");
const ageGroup = document.querySelector("#age-group");
const overallIncome = document.querySelector("#overall-income");
const results = document.querySelector("#result");
const closebutton = document.querySelector(".close");
const submit = document.querySelector(".submit");
const tax = document.querySelector("#tax-text");
const errorIcons = document.querySelectorAll(".bi-exclamation-circle");
const errorTexts = document.querySelectorAll(".bi-exclamation-circle .tooltiptext",);

let overallIncomeValue = 0;

const incomeLimit = 800000;

const checkInput = (input, errorIcon, errorText )=> {
   
    if(input.value.length == 0) {
        errorIcon.style.display = "flex";
        errorText.innerText = "This input field is mandatory";
        
    }
    else if( isNaN(input.value) && input != ageGroup){
        errorIcon.style.display = "flex";
        errorText.innerText = "Please enter numbers only";
    }
    else if( Number(input.value) < 0){
        errorIcon.style.display = "flex";
        errorText.innerText = "Please enter non-negative numbers only";
    }
    else{
        errorIcon.style.display = "none";
    }
};

const submitChecker = () => {
    let checkedInputs = Array.from(inputs).filter((inp) =>
      inp === ageGroup
        ? inp.value.length > 0
        : inp.value.length > 0 && !isNaN(inp.value) && inp.value >= 0,
    );
  
    return checkedInputs.length === inputs.length;
  };
 
const calculateTax = () =>{
    let incomeAfterDeductions = Number(inputs[0].value) + Number(inputs[1].value) - Number(inputs[2].value);
    let overallIncomeValue;  
    if(incomeAfterDeductions <= incomeLimit){
        overallIncomeValue = Number(inputs[0].value) + Number(inputs[1].value);
        overallIncome.innerText = "Rs." + overallIncomeValue;
        tax.innerText = "No tax applicable";
    }
    else{
        overallIncomeValue = taxedIncome(incomeAfterDeductions);
        overallIncome.innerText = "Rs." + overallIncomeValue;
        tax.innerText ="After tax deduction";
    }    
};

const taxedIncome = (incomeAfterDeductions)=>{
    let taxableIncome = incomeAfterDeductions - incomeLimit;
    let taxAmount;
    if(ageGroup.value === "lessthan40"){
        taxAmount = 0.3*taxableIncome;
    }
    else if( ageGroup.value === "between40and60") {
        taxAmount = 0.4*taxableIncome;
    }
    else {
        taxAmount = 0.1*taxableIncome;
    }
    return incomeAfterDeductions- taxAmount;
};

inputs.forEach((input, index) => {
    input.addEventListener("change", () => {
      checkInput(input, errorIcons[index], errorTexts[index]);
    });
    input.addEventListener("focus", () => {
      checkInput(input, errorIcons[index], errorTexts[index]);
    });
  });

submit.addEventListener("click", () => {
    if (submitChecker()) {
      calculateTax();
      results.style.display = "flex";
      inputs.forEach((input) => (input.value = ""));
    } else {
      inputs.forEach((input, index) => {
        checkInput(input, errorIcons[index], errorTexts[index]);
      });
    }
  });

closebutton.addEventListener("click", ()=> {
    results.style.display = "none";
});