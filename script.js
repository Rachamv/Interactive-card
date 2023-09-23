// Select form elements and initialize regular expressions and error messages
const form = document.querySelector('[name="form-card"]');
const formInputs = document.querySelectorAll('.form__input');
const modal = document.getElementById('modal');
const modalContinuation = document.getElementById('modal-continuation');

const regex = {
    // Regular expressions for input validation
    emptyInput: /^$/,
    cardholder: /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/i,
    number: /^[0-9]{16}$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    month: /^(0[1-9]|1[0-2])$/,
    year: /^20[2-9]$/,
    cvc: /^[0-9]{3}$/,
};

const errorText = {
    // Error messages
    empty: `Can't be blank`,
    cardholderFormat: `Only letters, separate name and fullname`,
    numberFormat: `Wrong format, only 16 numbers`,
    emailFormat: `Invalid email`,
    monthFormat: `Invalid month`,
    yearFormat: `Invalid year`,
    cvcFormat: `Invalid cvc`,
};

// Function to show an error message and apply error styling
function showError(errorEl, inputEl, text) {
    errorEl.textContent = text;
    errorEl.classList.remove('hidden');
    inputEl.classList.add('form__input--error');
}

// Function to hide an error message and remove error styling
function hideError(errorEl, inputEl) {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
    inputEl.classList.remove('form__input--error');
}

// Function to validate an input element
function validateInput(inputEl, errorEl, regexPattern, errorKey) {
    const inputValue = inputEl.value.trim();

    if (regex.emptyInput.test(inputValue)) {
        showError(errorEl, inputEl, errorText.empty);
        return false;
    }

    if (!regexPattern.test(inputValue)) {
        showError(errorEl, inputEl, errorText[errorKey]);
        return false;
    }

    hideError(errorEl, inputEl);
    return true;
}

// Function to toggle the modal display
function toggleModal() {
    form.classList.toggle('hidden');
    modal.classList.toggle('hidden');
}

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let validationPassed = true;

    // Loop through form inputs for validation
    formInputs.forEach((input) => {
        const inputId = input.id;
        const errorId = 'error-' + inputId.split('-')[1]; // Derive the error ID from the input ID

        if (!validateInput(input, document.getElementById(errorId), regex[inputId], inputId)) {
            validationPassed = false;
        }
    });

    // If all validations pass, toggle the modal
    if (validationPassed) {
        toggleModal();
    }
});

// Event listener for modal continuation button
modalContinuation.addEventListener('click', function (event) {
    toggleModal();

    // Clear input values
    formInputs.forEach((input) => {
        input.value = '';
    });
});
