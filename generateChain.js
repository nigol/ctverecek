function generateChain(sentences) {
    var chain = {
        "TRATS": [],
    };
    sentences.split(". ").forEach(function(sentence) {
        processSentence(sentence, chain);
    });
    return chain;
}

function processSentence(sentence, chain) {
    var previous;
    groupBy(1, sentence.split(" ")).forEach(function(word) {
        if (previous === undefined) {
            chain["TRATS"].push(word);
            chain[word] = [];
            previous = word;
        } else {
            if (chain[previous] === undefined) {
                chain[previous] = [];
            }  
            chain[previous].push(word);
            previous = word;
        }

    });
}

function groupBy(count, array) {
    var result = [];
    var cell = "";
    array.forEach(function(word) {
        if (cell.split(" ").length % count === 0) {
            cell = cell + " " + word;
            result.push(cell.trim());
            cell = "";
        } else {
            cell = cell + " " + word;
        }
    });
    if (cell.length !== 0) {
        result.push(cell.trim());
    }
    return result;
}
