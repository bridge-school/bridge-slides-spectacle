// Much simpler with promises!
const verifyUser = function(username, password) {
  verifyUser(username, password)
    .then(username => getUsersAccount(username))
    .then(account => sendEmail(account))
    .then(finalResult => {
      //do whatever the 'callback' would do
    })
    .catch(err => {
      //do whatever the error handler needs
    });
};
