function comments(input) {
    let users = new Set();
    let articles = {};
    
    input.forEach(entry => {
        if (entry.startsWith("user ")) {
            users.add(entry.split("user ")[1]);
        } else if (entry.startsWith("article ")) {
            let article = entry.split("article ")[1];
            articles[article] = articles[article] || [];
        } else {
            let match = entry.match(/^(.+) posts on (.+): (.+), (.+)$/);
            if (match) {
                let [, username, article, title, content] = match;
                if (users.has(username) && articles[article]) {
                    articles[article].push({ username, title, content });
                }
            }
        }
    });

    Object.entries(articles)
        .sort(([, a], [, b]) => b.length - a.length)
        .forEach(([article, comments]) => {
            console.log(`Comments on ${article}`);
            comments
                .sort((a, b) => a.username.localeCompare(b.username))
                .forEach(({ username, title, content }) =>
                    console.log(`--- From user ${username}: ${title} - ${content}`)
                );
        });
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])