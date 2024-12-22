function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// get a input
const testString = prompt());
if (isPalindrome(testString)) {
    return true
} else {
    return false
}