export default function updatePost(updatedTitle,updatedBody,updatedId){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'PUT',
        body: JSON.stringify({
          title: updatedTitle,
          body: updatedBody,
          userId: updatedId,
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
            // Log the actual data received from the response
            console.log(json);
          })
          .catch((error) => {
            console.error('Error creating new post:', error);
          });
      }