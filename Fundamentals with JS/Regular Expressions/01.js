function matchFullNames(text) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = text.match(regex);
    console.log(matches ? matches.join(" ") : "");
}

matchFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
