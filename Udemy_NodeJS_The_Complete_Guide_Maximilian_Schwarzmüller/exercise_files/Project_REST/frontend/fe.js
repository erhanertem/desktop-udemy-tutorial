// DOM element pickers
const getButton = document.getElementById('get');
const postButton = document.getElementById('post');

// Assign EventListeners
getButton.addEventListener('click', getPostHandler);
postButton.addEventListener('click', postPostHandler);

// Declare eventhandlers
function getPostHandler() {
	fetch('http://localhost:8080/feed/posts')
		.then((res) => res.json())
		.then((resData) => console.log(resData))
		.catch((err) => console.log(err));
}
function postPostHandler() {
	fetch('http://localhost:8080/feed/post', {
		method: 'POST', // By default it's GET
		headers: {
			'Content-Type': 'application/json', // Need to specify the content type for the passed in body. Default is text type. Any mismatch will render undefined as output.
		},
		body: JSON.stringify({
			title: 'A Codepen issue aroused',
			content: 'Created via Codepen',
		}), // We have to turn the passed in javascript object to a JSON format before passing into req.body
	})
		.then((res) => res.json())
		.then((resData) => console.log(resData))
		.catch((err) => console.log(err));
}
