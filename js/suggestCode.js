const code = document.getElementById("code");
const codeSuggest = document.getElementById("suggest");
const result = document.getElementById("result");
document.addEventListener("keydown", update);

const ONLY_NUMS = /^\d+$/;
const ONLY_SMALL_LETTERS = /^[a-z]+$/;

const BACKSPACE = 8;
const MAX_CODE_LENGTH = 3;

const SUGGESTED_CODE = 0;
const SUGGESTED_RESULT = 1;

function update(keyEvent) {
    const pressedStr = keyEvent.key;
    const pressedCode = keyEvent.keyCode;

    const currentCode = code.innerText;

    if (pressedCode === BACKSPACE)
        code.innerText = currentCode.substring(0, currentCode.length - 1);

    if (pressedStr.match(ONLY_NUMS))
        if (currentCode.length === MAX_CODE_LENGTH) code.innerText = pressedStr;
        else code.innerText += pressedStr;

    const suggestions = suggestCode();
    codeSuggest.innerText = suggestions[SUGGESTED_CODE];
    result.innerText = suggestions[SUGGESTED_RESULT];
}

function suggestCode() {
    let num = code.innerText;
    let choices = [];
    let suggestedNum;
    let suggestedResult;

    if (codesMap.has(num)) suggestedResult = codesMap.get(num);

    for (const key of codesMap.keys()) {
        const compareTo = key.substring(0, num.length);
        const keyCut = key.substr(num.length);
        if (num === compareTo) choices.push(keyCut);
    }

    if (choices.length === 0) {
        suggestedNum = "";
        suggestedResult = "Not a valid code!";
    } else suggestedNum = getRandomArrayEntry(choices);

    if (codesMap.has(num + suggestedNum))
        suggestedResult = codesMap.get(num + suggestedNum);

    return [suggestedNum, suggestedResult];
}

function getRandomArrayEntry(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
