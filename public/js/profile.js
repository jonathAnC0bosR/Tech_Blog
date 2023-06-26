const newPostFormHandler =  async (e) => {
    e.preventDefault();

    const postTitle = document.querySelector('#project-title').value.trim();
    const postContent = document.querySelector('#post-content').value.trim();

    const response = await fetch('/api/post')

}