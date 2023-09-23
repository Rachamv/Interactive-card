# Interactive Card Details

## Overview

This project, titled "Interactive Card Details," combines HTML, CSS, and JavaScript to create an interactive web page for inputting credit card details. The project includes a card display section, a card input form, and features form validation with regular expressions. Additionally, it utilizes CSS variables and media queries for responsive design.

## HTML Structure

- The HTML document is divided into two main sections: a card display section and a card input form section.
- The card display section features the front and back views of a card, including the cardholder name, card number, and expiration date.
- The card input form section consists of input fields for cardholder name, card number, expiration date (month and year), and card CVC. Error message elements are provided for each input field, and a "Confirm" button allows for form submission.

## JavaScript (script.js)

The JavaScript code is responsible for handling form validation and the display of a modal dialog. It utilizes regular expressions to validate the input fields and displays a modal when all validations pass. The following functions and event listeners are used:

### Functions:

1. `showError`: Displays an error message and applies error styling to the input element.
2. `hideError`: Hides an error message and removes error styling from the input element.
3. `validateInput`: Validates an input element based on a regular expression pattern and displays an error message if the input is invalid.
4. `toggleModal`: Shows or hides a modal dialog.

### Event Listeners:

1. The form's submit event listener validates all input fields. If validation passes for all fields, the modal is displayed.
2. The modal continuation button's click event listener hides the modal and clears the input values.

## Global Reset and Defaults (CSS)

- The CSS reset removes default margins and sets the `box-sizing` property to `border-box` for all elements.
- It establishes a minimum height for the body and applies typographic adjustments for improved text rendering.

## Google Fonts (CSS)

- The project imports the "Space Grotesk" font from Google Fonts for use in the web page.

## CSS Variables (CSS)

Custom properties defined using `:root` store color values, font families, font sizes, and font weights, enabling consistent styling across the project.

## Media Queries (CSS)

Media queries are used to adjust styles for different screen sizes, with specific adjustments made for screens larger than 750px.

## Styles (CSS)

- Various CSS styles are applied to elements, including the body, card display, card front and back, form elements, error messages, submit button, and modal.
- The use of a "hidden" class effectively hides elements by setting their `display` property to `none`.

These combined elements create an engaging and responsive web page for users to interact with and submit credit card details, with client-side validation to ensure data accuracy. The CSS styling provides a visually appealing and consistent design throughout the project.
