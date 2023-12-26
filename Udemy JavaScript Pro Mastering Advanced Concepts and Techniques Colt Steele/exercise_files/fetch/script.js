async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = posts.map(post => createPostHtml(post)).join('');
  } catch (error) {
    console.error('There was an error fetching the posts:', error);
  }
}

async function addPost(evt) {
  evt.preventDefault();
  const title = document.getElementById('new-post-title').value;
  const body = document.getElementById('new-post-body').value;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const newPost = await response.json();
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML =
      createPostHtml(newPost) + postsContainer.innerHTML;
    document.getElementById('new-post-title').value = '';
    document.getElementById('new-post-body').value = '';
  } catch (error) {
    console.error('There was an error adding the post:', error);
  }
}

function createPostHtml(post) {
  return `<div class="post">
    <div class="post-content">
      <div class="post-title">${post.title}</div>
      <div class="post-body">${post.body}</div>
    </div>
  </div>`;
}

document.getElementById('post-form').addEventListener('submit', addPost);

fetchPosts();
