export default function newPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'New Title',
          body: 'NewBody',
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
            console.error('Error creating new post:', error);
          });
      }