function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let base = super.toString();
            let rating = `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length === 0) {
                return `${base}\n${rating}`;
            }
            let commentsStr = "Comments:\n" + this.comments.map(c => ` * ${c}`).join('\n');
            return `${base}\n${rating}\n${commentsStr}`;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}
