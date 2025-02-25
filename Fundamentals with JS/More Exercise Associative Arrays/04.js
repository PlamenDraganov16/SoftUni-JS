function bookShelf(input) {
    let shelves = {};

    input.forEach(entry => {
        if (entry.includes(" -> ")) {
            let [shelfId, genre] = entry.split(" -> ");
            if (!shelves[shelfId]) {
                shelves[shelfId] = { genre, books: [] };
            }
        } else {
            let [bookInfo, genre] = entry.split(", ");
            let [title, author] = bookInfo.split(": ");
            let shelfId = Object.keys(shelves).find(id => shelves[id].genre === genre);

            if (shelfId) {
                shelves[shelfId].books.push({ title, author });
            }
        }
    });

    Object.entries(shelves)
        .sort(([, a], [, b]) => b.books.length - a.books.length)
        .forEach(([shelfId, { genre, books }]) => {
            console.log(`${shelfId} ${genre}: ${books.length}`);
            books
                .sort((a, b) => a.title.localeCompare(b.title))
                .forEach(({ title, author }) => console.log(`--> ${title}: ${author}`));
        });
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])