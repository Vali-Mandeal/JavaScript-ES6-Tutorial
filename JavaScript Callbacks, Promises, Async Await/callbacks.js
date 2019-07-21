const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two'}
];

// WITHOUT CALLBACK
// The createPost method takes longer than getPost to run
// So we return the post list without the recently added element
// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });    
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

//WITH CALLBACK

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });    
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);