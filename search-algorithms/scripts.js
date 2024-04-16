function binarySearchWalk() {

    let currentStep = "";
    let walkOutput = document.getElementById("walk-output");
    // Step 0, not shown, get elements, remove blanks 
    let elements = removeBlanks(getElements()); 

    // Step 1 Sort Elements
    const UNSORTED_ARRAY = elements.valueOf();
    const SORTED_ARRAY = elements.sort().valueOf();
    currentStep = `${UNSORTED_ARRAY} > ${SORTED_ARRAY}`;
    appendHtml(walkOutput, currentStep);

}

function getElements() {

    return document.getElementById("search-elements").value.split(" ");

}

function removeBlanks(input) {

    /**
        * Removes blank values ("") from array
        * @param input - Array to remove blanks from
        * @returns Array with no blank entries
    */
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "") {
            input.splice(i);
        }
    }

    return input

}

function appendHtml(parentElement, content) {

    /**
        * Adds a <p> with content to the end of element
        * @param parentElement - HTML Element to add content to
        * @param content - Text to be appended to element
    */

    let contentElement = document.createElement("p");
    contentElement.innerHTML = content;
    parentElement.append(contentElement);

}

function arrayContainsAlpha(input) {

    /**
        * Checks whether the array contains alpha characters/strings
        * @param input - Array to check
        * @returns true if array contains alpha characters, false if only digits 
    */
    
    for (let s of input) {
        if (Number(s) === NaN) {
            return true;
        }
    }

    return false;

}

function arrayStringToInteger(input) {
    
    /**
        * Tries to convert all elements of an array
        * to a number, if it cant' return the original
        * array
    */

}
