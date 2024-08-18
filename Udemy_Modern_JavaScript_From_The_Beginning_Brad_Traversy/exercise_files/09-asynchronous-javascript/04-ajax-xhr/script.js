// #1. CREATE A AJAX OBJECT
const xhr = new XMLHttpRequest();

// #2. DIAL IN CONNECTION TO API URL/FILE PATH
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/erhanertem/repos');

// #3. SEND REQUEST
xhr.send();
/* 
readyState has 5 possible values
0: request not initialized
1: server connection established
2: request received 
3: processign request
4: request finished and response is ready
*/

xhr.onreadystatechange = function () {
	// console.log(this);
	// #4. IF SUCCESS IN RESPONSE DO....
	if (this.readyState === 4 && this.status === 200) {
		// console.log(JSON.parse(this.responseText));
		const data = JSON.parse(this.responseText);

		data.forEach((repo) => {
			const li = document.createElement('li');
			li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description ? repo.description : 'N/A'}`;
			document.querySelector('#results').append(li);
		});
	}
};
