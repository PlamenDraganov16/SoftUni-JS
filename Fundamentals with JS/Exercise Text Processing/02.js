function extractHashtags(text) {
    let words = text.split(' '); 
    words.forEach(word => {
        if (word.startsWith('#')) {
            let cleanWord = word.substring(1); 
            if (/^[A-Za-z]+$/.test(cleanWord)) { 
                console.log(cleanWord);
            }
        }
    });
}


extractHashtags('Nowadays everyone uses # to tag a #special word in #socialMedia');