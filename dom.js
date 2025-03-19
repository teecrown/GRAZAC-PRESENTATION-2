fetch('https://google.com/post/1')
.then(response => response.json()) //convert the response to JSON
.then(data => console.log(data))
.catch(error => console.error());

fetch('https://google.com/post/1')
fetch()