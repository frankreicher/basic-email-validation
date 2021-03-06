/*
BASIC EMAIL VALIDATION
------------------------
Your job is to create a function that accepts a string as its only argument.
The function will return true if the email is valid and false if it's not. Super simple.

Rules
The string must contain an " @ " character.
The string must contain a " . " character.
The "@" character must have a minimum of one character in front of it.
e@edabit.com is valid while @edabit.com is invalid.
The " . " and the "@" must be in the appropriate places.
hello.email@com is invalid while john.smith@email.com is valid.
If the string passes these tests, it will be considered a valid email.

Examples
'@gmail.com' => false
'hello.gmail@com' => false
'gmail' => false
'hello@gmail' => false
'hello@edabit.com' => true
'' => false (an empty string)
Email validation can get more complicated than what we're going for here, but this challenge will satisfy 95% of use cases. If you're unsure of something, check out the lab tests to understand exactly what's being evaluated.
*/

//Function to return true or false of whether an email is valid
function isEmailValid (email) {
    emailAddress = emailAddress.split('');

    var hasAtMark = false;

    //Determine if the email address has an @ symbol
    for (var i = 0; i < emailAddress.length; i++) {
        if (emailAddress[i] === '@') {
            hasAtMark = true;
            break;
        } else {
            continue;
        }
    }

    //i now holds the location in the array that @ is located at
    console.log(i);

    if (hasAtMark === true) {
        //Has @ mark
    } else {
        return false;
    }

    //Determine whether the @ sign is in a valid location in the email address
    //Does the @sign have at least one character preceeding it?
    if (i > 0) {
        //Has at least one number preceeding it
    } else {
        return false;
    }

    var hasPeriod = false;

    //Determine if the email address has an @ symbol
    for (i += 1; i < emailAddress.length; i++) {
        if (emailAddress[i] === '.') {
            hasPeriod = true;
            break;
        } else {
            continue;
        }
    }

    if (hasPeriod === true) {
        //Has a valid period
    } else {
        return false;
    }

    if (i < emailAddress.length - 1) {
        //Has at least one character following the period
    } else {
        return false;
    }

    return true;
}

var emailAddress = prompt('Please enter an email address');

var emailValid = isEmailValid(emailAddress);
console.log(emailValid);
