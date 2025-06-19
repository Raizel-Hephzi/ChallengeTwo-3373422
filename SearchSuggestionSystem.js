class SearchSuggestionSystem {
  constructor(products) {
    // Sort the products lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let prefix = "";
    const result = [];

    for (let char of searchWord) {
      prefix += char;

      // Filter products that start with the prefix
      const suggestions = this.products.filter(p => p.startsWith(prefix)).slice(0, 3);

      result.push(suggestions);
    }

    return result;
  }
}

// ======= TESTING LOCALLY =======
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const suggestionSystem = new SearchSuggestionSystem(products);
const suggestions = suggestionSystem.getSuggestions(searchWord);

console.log(suggestions);
