function generateSentence(wordChain) {
    var sentence = "";
    var word = "TRATS";
    var finish = false;
    while (!finish) {
        var words = wordChain[word];
        if (words === undefined || words.length === 0) {
            finish = true;
        } else {
            word = words[Math.floor(Math.random() * words.length)];
            sentence = sentence + " " + word;
        }
    }
    return sentence.charAt(1).toUpperCase() + sentence.slice(2) + ".";
}