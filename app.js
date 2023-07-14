const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
}

