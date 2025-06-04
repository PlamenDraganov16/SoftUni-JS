function solution(command) {
    if (command === 'upvote') {
        this.upvotes++;
    } else if (command === 'downvote') {
        this.downvotes++;
    } else if (command === 'score') {
        let upvotes = this.upvotes;
        let downvotes = this.downvotes;
        let totalVotes = upvotes + downvotes;
        let balance = upvotes - downvotes;

        let obfuscatedUpvotes = upvotes;
        let obfuscatedDownvotes = downvotes;

        if (totalVotes > 50) {
            let maxVotes = Math.max(upvotes, downvotes);
            let modifier = Math.ceil(0.25 * maxVotes);
            obfuscatedUpvotes = upvotes + modifier;
            obfuscatedDownvotes = downvotes + modifier;
        }

        let rating = 'new';
        if (totalVotes < 10) {
            rating = 'new';
        } else if ((upvotes / totalVotes) > 0.66) {
            rating = 'hot';
        } else if (balance >= 0 && (upvotes > 100 || downvotes > 100)) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        }

        return [obfuscatedUpvotes, obfuscatedDownvotes, balance, rating];
    }
}