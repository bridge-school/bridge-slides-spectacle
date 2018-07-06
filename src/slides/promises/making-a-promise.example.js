const promiseFunc = phrase =>
    new Promise((resolve, reject) => {
        if (phrase.length) {
            setTimeout(() => resolve(phrase), 5000);
        } else {
            reject('Uh oh, there is no phrase to send');
        }
    });

// This promise should resolve in 5 seconds
promiseFunc('This promise is now complete')
    .then(response => console.log(`RESPONSE: ${response}`))
    .catch(error => console.error(`ERROR: ${error}`));

// This promise should fail
promiseFunc('')
    .then(response => console.log(`RESPONSE: ${response}`))
    .catch(error => console.error(`ERROR: ${error}`));
