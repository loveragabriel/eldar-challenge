export default function updatePost(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
      title: 'TitleActualizado',
      body: 'BodyActualizado',
      userId: '2024',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error('Error updating post:', error);
    });
}
