function getArticleGenerator(articles) {
    let index = 0;
    return function() {
        if (index >= articles.length) {
            return;
        }
        let content = document.getElementById('content');
        let articleElem = document.createElement('article');
        articleElem.textContent = articles[index];
        content.appendChild(articleElem);
        index++;
    }
}
