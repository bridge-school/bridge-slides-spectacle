// Much simpler with promises!
const verifyUser = function(username, password) {
  verifyUser(username, password)
    .then(getUsersAccount)
    .then(sendEmail)
    .then(finalResult => {
      //do whatever the 'callback' would do
    })
    .catch(err => {
      //do whatever the error handler needs
    });
};
