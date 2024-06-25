function weightedStrings(string, queries) {
    // Compute the weights of all possible substrings of consecutive identical characters
    const weights = new Set();
    let i = 0;
    
    while (i < string.length) {
        const char = string[i];
        const charWeight = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        let currentWeight = charWeight;
        weights.add(currentWeight);
        
        let j = i + 1;
        while (j < string.length && string[j] === char) {
            currentWeight += charWeight;
            weights.add(currentWeight);
            j++;
        }
        
        i = j;
    }
    
    // Check each query
    const result = queries.map(query => weights.has(query) ? "Yes" : "No");
    
    return result;
}

const string = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(string, queries));
