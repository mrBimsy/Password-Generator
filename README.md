# Password-Generator
<img align="middle" src="assets/05-javascript-challenge-demo.png" alt="password-generator">
This is a JavaScript code that generates a password by taking input from the user through prompts and confirms. The password can contain lowercase letters, uppercase letters, numeric characters, and special characters.

The <i><b>getPasswordOptions()</i></b> function is responsible for prompting the user for the password options and generating the password. It first asks for the desired password length and validates it. Then it asks the user for the types of characters they want to include in the password (lowercase letters, uppercase letters, numeric characters, and special characters) using confirm() prompts. If the user doesn't select any character type, an alert is displayed. The function returns the generated password by calling generatePassword() function.

The <i><b>generatePassword()</i></b> function takes the user's selected character types as an array parameter and generates the password by randomly selecting characters from the array. The length of the password is determined by the passwordLength variable.

The <i><b>getRandom()</i></b> function takes an array as an argument and returns a random element from the array using the Math.random() and Math.floor() methods.

The <i><b>writePassword()</i></b> function is called when the user clicks the "Generate Password" button. It calls the getPasswordOptions() function to get the generated password and writes it to the HTML document.

The <i><b>generateBtn</i></b> variable is used to reference the "Generate Password" button on the HTML document, and an event listener is added to it to listen for clicks and call the <i><b>writePassword()</i></b> function.


## Requirements

    Generate a password when the button is clicked.

    Present a series of prompts for password criteria:

        Length of password:

        At least 8 characters but no more than 128.

        Character types:

        Lowercase

        Uppercase

        Numeric

        Special characters ($@%&*, etc.)

        Code should validate for each input and at least one character type should be selected.

        Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.
        
## Sources 
- https://www.youtube.com/watch?v=v2jfGo7ztm8
- https://youtu.be/duNmhKgtcsI

        
## Project

Project link: <a href="https://github.com/mrBimsy/Password-Generator">https://github.com/mrBimsy/Password-Generator</a>

Deployed project: <a href="https://mrbimsy.github.io/Password-Generator/">https://mrbimsy.github.io/Password-Generator/</a>

## License

<a href="https://choosealicense.com/licenses/mit/">MIT</a>
