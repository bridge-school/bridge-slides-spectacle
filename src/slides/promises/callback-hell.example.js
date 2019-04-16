/** This code performs 3 actions to send an email
 * 1. Verify a user
 * 2. Get their account
 * 3. Send email to user */
const sendEmailToUser = function(username, password, callback) {
  verifyUser(username, password, error => {
    if (error) {
      callback(error);
    } else {
      getUsersAccount(username, (error, account) => {
        if (error) {
          callback(error);
        } else {
          sendEmail(account, error => {
            if (error) {
              callback(error);
            } else {
              // excuse me, this the staircase to hell?
              callback(null, account);
            }
          });
        }
      });
    }
  });
};
