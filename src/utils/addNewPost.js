export default function newPost(newTitle,newBody,newId){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newTitle,
          body: newBody,
          userId: newId,
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