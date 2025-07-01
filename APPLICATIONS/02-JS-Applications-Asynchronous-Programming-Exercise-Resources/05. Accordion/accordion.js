function solution() {
    const main = document.getElementById('main');
    const listUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';

    main.innerHTML = ''; // clear any existing content

    fetch(listUrl)
        .then(res => res.json())
        .then(articles => {
            articles.forEach(article => {
                // Create accordion element
                const accordion = document.createElement('div');
                accordion.className = 'accordion';

                const head = document.createElement('div');
                head.className = 'head';

                const titleSpan = document.createElement('span');
                titleSpan.textContent = article.title;

                const button = document.createElement('button');
                button.className = 'button';
                button.id = article._id;
                button.textContent = 'More';

                head.appendChild(titleSpan);
                head.appendChild(button);

                const extra = document.createElement('div');
                extra.className = 'extra';
                extra.style.display = 'none';

                accordion.appendChild(head);
                accordion.appendChild(extra);
                main.appendChild(accordion);

                button.addEventListener('click', () => {
                    if (button.textContent === 'More') {
                        fetch(detailsUrl + button.id)
                            .then(res => res.json())
                            .then(data => {
                                extra.innerHTML = `<p>${data.content}</p>`;
                                extra.style.display = 'block';
                                button.textContent = 'Less';
                            })
                    } else {
                        extra.style.display = 'none';
                        button.textContent = 'More';
                    }
                })
            })
        })
        .catch(err => console.error(err));
}

solution();