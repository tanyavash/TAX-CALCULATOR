# TAX-CALCULATOR

## Introduction

This is a web application that allows users to calculate their tax based on their income and age. The tax calculation follows specific rules based on the user's age and income level.

## Features

- The tax calculation works based on this formula:
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at:
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
    - Error icon is highlighted to the right of the input field. Hovering over the icon shows the error in a tooltip.
    - If no errors are present, no error icon is displayed.
- The age dropdown field should have 3 values:
    - <40
    - ≥ 40 & < 60
    - ≥ 60
- Clicking on submit shows a modal which displays the final values based on the above calculations.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

## Assumptions

- Users are required to enter numerical values for income and deductions.
- Age is selected from a dropdown menu with predefined options.
- Error icons are displayed only when there are errors in the input fields.
- Upon submission, the modal displays the calculated tax amount.

## Demo

You can access the hosted web app [here](https://tax-calculator-tanya.netlify.app/).

## Screenshots

![Screenshot](https://res.cloudinary.com/dxuuxgs6q/image/upload/v1713204927/Fyleproject/img_1_ekjz0c.png)
![Screenshot](https://res.cloudinary.com/dxuuxgs6q/image/upload/v1713205161/Fyleproject/img_2_kzyjcw.png)
![Screenshot](https://res.cloudinary.com/dxuuxgs6q/image/upload/v1713205162/Fyleproject/img_3_cexdkq.png)
![Screenshot](https://res.cloudinary.com/dxuuxgs6q/image/upload/v1713205162/Fyleproject/img_4_ajybv4.png)
![Screenshot](https://res.cloudinary.com/dxuuxgs6q/image/upload/v1713205162/Fyleproject/img_5_kvc2ao.png)

## Contributors

TANYA VASHISTHA
