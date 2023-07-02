const newCommentFormHandler = async (e) => {
    e.preventDefault();

    const content = document.getElementById('content').value.trim();

    if(content) {
        const response = await fetch('/api/comment', {
            method: 'POST', 
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/post/:id');
        } else {
            alert('Failed to create comment');
        }
    };
}

const newCommentBtn = document.getElementById('new-comment');
const newCommentFrm = document.getElementById('hidden-div');

newCommentBtn.addEventListener('click' , () => {
    if(newCommentFrm.style.display === 'none') {
        newCommentFrm.style.display = 'block';
    } else {
        newCommentFrm.style.display = 'none';
    }
})

document.querySelector('#comment-form')
        .addEventListener('submit', newCommentFormHandler);