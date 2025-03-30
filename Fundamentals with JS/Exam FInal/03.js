function solve(commands) {
    let followers = {};

    for (let command of commands) {
        if (command === "Log out") {
            break;
        }

        let parts = command.split(": ");
        let action = parts[0];
        let username = parts[1];

        switch (action) {
            case "New follower":
                if (!followers[username]) {
                    followers[username] = { likes: 0, comments: 0 };
                }
                break;

            case "Like":
                let likes = Number(parts[2]);
                if (!followers[username]) {
                    followers[username] = { likes: likes, comments: 0 };
                } else {
                    followers[username].likes += likes;
                }
                break;

            case "Comment":
                if (!followers[username]) {
                    followers[username] = { likes: 0, comments: 1 };
                } else {
                    followers[username].comments += 1;
                }
                break;

            case "Blocked":
                if (followers[username]) {
                    delete followers[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
    }

    console.log(`${Object.keys(followers).length} followers`);
    for (let user in followers) {
        let total = followers[user].likes + followers[user].comments;
        console.log(`${user}: ${total}`);
    }
}

solve([
    "New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"
]);