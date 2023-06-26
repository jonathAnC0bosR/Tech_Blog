const newPostFormHandler =  async (e) => {
    e.preventDefault();

    const postTitle = document.querySelector('#project-title').value.trim();
    const postContent = document.querySelector('#post-content').value.trim();

    console.log(typeof postContent);

    if(postTitle && postContent) {
        const response = await fetch('/api/posts', {
            method: 'POST', 
            body: JSON.stringify({ postTitle, postContent }),
            headers: { 'Content-Type': 'application/json'},
        });
        

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create post');
        }
    }
};

document.querySelector('#new-post-form')
    .addEventListener('submit', newPostFormHandler);