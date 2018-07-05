const sendGetRequest = (url) => {
    return fetch(url)
        .then((response) => {
            // the call to fetch was successful, do something with the response
        })
        .catch((error) => {
            // the call to fetch resulted in an error, do something with the error
        });

};

sendGetRequest('http://example.com');
