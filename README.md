# TAX-CALCULATOR
#Introduction
This is a web application that allows users to calculate their tax based on their income and age. The tax calculation follows specific rules based on the user's age and income level.\n
#Features
- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
    - Error icon is highlighted to the right of the input field. Hovering over the icon shows the error in a tooltip
    - If no errors are present, no error icon is there.
- The age dropdown field should has 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
- Clicking on submit shows a modal which shows the final values based on above calculations.\n
#Technologies Used
HTML
CSS
JavaScript
Bootstrap
#Assumptions
Users are required to enter numerical values for income and deductions.
Age is selected from a dropdown menu with predefined options.
Error icons are displayed only when there are errors in the input fields.
Upon submission, the modal displays the calculated tax amount.
Demo
You can access the hosted web app here: https://tax-calculator-tanya.netlify.app/ \n
#Contributors \n
  TANYA VASHISTHA
