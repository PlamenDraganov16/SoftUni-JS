function extractEmails(input) {
     let pattern = /(?<![\w\.-])[a-zA-Z0-9]+([.\-_]?[a-zA-Z0-9]+)*@[a-zA-Z]+(-[a-zA-Z]+)*(\.[a-zA-Z]+(-[a-zA-Z]+)*)+/g;
    let matches = input.match(pattern);

    if (matches) 
    {
        matches.forEach(email => console.log(email));
    }
}

extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
