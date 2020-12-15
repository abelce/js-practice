function isPlaindrome(str) {
    return str === str.split('').reverse().join('');
}