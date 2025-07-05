// function attachEvents() {

//     const btnLoadPosts = document.getElementById('btnLoadPosts');
//     const btnViewPost = document.getElementById('btnViewPost');
//     const postsSelect = document.getElementById('posts');

//     btnLoadPosts.addEventListener('click', createPosts);
//     btnViewPost.addEventListener('click', generateInformation);

//     async function createPosts() {
//         postsSelect.replaceChildren();

//         try {
//             const response = await fetch('http://localhost:3030/jsonstore/blog/posts');

//             if (!response.ok || response.status != 200) {
//                 throw new Error('Failed to load posts');
//             }
//             const data = await response.json();

//             Object.values(data).forEach(info => {
//                 createElement('option', info.id, info.title, postsSelect);
//             });

//         } catch (error) {
//             alert(error.message);
//         }
//     }

//     async function generateInformation() {
//         const titleHeader = document.getElementById('post-title');
//         const contentList = document.getElementById('post-body');
//         const commentSection = document.getElementById('post-comments');
//         let targetId = postsSelect.value;

//         try {
//             const response = await fetch(`http://localhost:3030/jsonstore/blog/posts/${targetId}`);

//             if (!response.ok || response.status != 200) {
//                 throw new Error('Invalid request');
//             }
//             const data = await response.json();

//             titleHeader.textContent = data.title;
//             contentList.textContent = data.body;

//         } catch (error) {
//             alert(error.message);
//         }

//         try {
//             const response = await fetch(`http://localhost:3030/jsonstore/blog/comments`);

//             if (!response.ok || response.status != 200) {
//                 throw new Error('Invalid request');
//             }
//             const data = await response.json();

//             commentSection.replaceChildren(); // Clear
//             Object.values(data).forEach(info => {
//                 if (info.postId == targetId) {
//                     let listElement = createElement('li', undefined, info.text, commentSection);
//                     listElement.id = info.id;
//                 }
//             })

//         } catch (error) {
//             alert(error.message);
//         }
//     }
// }

// function createElement(element, value, textCon, parent) {
//     const elem = document.createElement(element);

//     if (value) {
//         elem.value = value;
//     }
//     if (textCon) {
//         elem.textContent = textCon;
//     }
//     if (parent) {
//         parent.appendChild(elem);
//     }

//     return elem;
// }

// attachEvents();


function attachEvents() {
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const postsSelect = document.getElementById('posts');
    const viewPostButton = document.getElementById('btnViewPost');
    const h1PostTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    const ednpoints = {
        getPosts: 'http://localhost:3030/jsonstore/blog/posts',
        getComments: 'http://localhost:3030/jsonstore/blog/comments',
    };

    loadPostsButton.addEventListener("click", onLoadClick);
    viewPostButton.addEventListener("click", onViewPostClick);

    const allPosts = {};
    async function onLoadClick() {
        const posts = await getPosts(ednpoints.getPosts);

        Object.values(posts)
            .forEach(post => {
                const option = document.createElement('option');
                option.value = post.id;
                option.textContent = post.title;
                postsSelect.appendChild(option);
                allPosts[post.id] = post;
            });
    }

    async function onViewPostClick() {
        postComments.innerHTML = '';

        const id = posts.value;
        const title = posts.options[posts.selectedIndex].textContent;

        h1PostTitle.textContent = title;
        postBody.textContent = allPosts[id].body;

        const comments = await getComments(ednpoints.getComments);
        Array.from(Object.values(comments))
            .filter(c => c.postId === id)
            .forEach(c => {
                const li = document.createElement('li');
                li.id = c['id'];
                li.textContent = c['text'];
                postComments.appendChild(li);
            });
    }
}

async function getPosts(url) {
    const response = await fetch(url);
    return response.json();
}

async function getComments(url, id) {
    const response = await fetch(`${url}`);
    return response.json();
}

attachEvents();