const newPostFormHandler =  async (e) => {
    e.preventDefault();

    const post_title = document.querySelector('#project-title').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();

    console.log(post_title, post_content);

    if(post_title && post_content) {
        const response = await fetch('/api/post', {
            method: 'POST', 
            body: JSON.stringify({ post_title, post_content }),
            headers: { 'Content-Type': 'application/json', },
        });
        

        if(response.ok) {
            // document.location.replace('/');
            console.log(response);
        } else {
            alert('Failed to create post');
        }
    }
};

document.querySelector('#new-post-form')
    .addEventListener('submit', newPostFormHandler);