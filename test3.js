function highestPalindrome(s, k) {
    const n = s.length;
    const arr = s.split('');
    const changes = Array(n).fill(false); // Track changes

    function makePalindrome(l, r, k) {
        if (k < 0) return null;
        if (l >= r) return arr.join('');
        
        if (arr[l] === arr[r]) {
            return makePalindrome(l + 1, r - 1, k);
        } else {
            if (k === 0) return null;
            const oldL = arr[l], oldR = arr[r];
            if (arr[l] > arr[r]) {
                arr[r] = arr[l];
            } else {
                arr[l] = arr[r];
            }
            changes[l] = changes[r] = true;
            const result = makePalindrome(l + 1, r - 1, k - 1);
            if (result === null) {
                arr[l] = oldL; arr[r] = oldR; // Revert changes if not valid
                return null;
            }
            return result;
        }
    }

    let palindrome = makePalindrome(0, n - 1, k);
    if (palindrome === null) return '-1';

    function maximizePalindrome(l, r, k) {
        if (k < 0) return;
        if (l >= r) return;
        
        if (arr[l] !== '9') {
            if (changes[l] && changes[r]) {
                arr[l] = arr[r] = '9';
                maximizePalindrome(l + 1, r - 1, k - 2);
            } else if (changes[l] || changes[r]) {
                arr[l] = arr[r] = '9';
                maximizePalindrome(l + 1, r - 1, k - 1);
            } else if (k >= 2) {
                arr[l] = arr[r] = '9';
                maximizePalindrome(l + 1, r - 1, k - 2);
            } else {
                maximizePalindrome(l + 1, r - 1, k);
            }
        } else {
            maximizePalindrome(l + 1, r - 1, k);
        }
    }

    maximizePalindrome(0, n - 1, k);

    return arr.join('');
}


console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));
