const promiseFunc = phrase =>
	new Promise((resolve, reject) => {
		if (phrase.length) {
			setTimeout(() => resolve(phrase), 5000);
		} else {
			reject('Uh oh, there is no phrase to send');
		}
	});

// This promise resolves
promiseFunc('This promise is now complete')
	.then(
    response => console.log(`RESPONSE: ${response}`),
    error => console.error(`ERROR: ${error}`)
	)

// This promise fails
promiseFunc('')
  .then(
		response => console.log(`RESPONSE: ${response}`),
		error => console.error(`ERROR: ${error}`)
	)
