==============================================================
 - app.js:
   - Had 2 ```module.exports``` statements. Removed the second one.

- config.js:
  - At the beginning of the file, line 3, ```require('dotenv')``` did not have ```.config()``` at the end. 

- helpers/expressError.js:
  - super is missing the message, which would lead to a bug when calling the constructor of a parent error class.

- helpers/partialUpdate.js: 
  - Instead while the function does filter for items starting with "_", it also deletes them from the original object, which can lead to unexpected bugs.

- middleware/auth.js:
  - authUser: The method was able to decode the token, but couldn't verify its signature.

- models/user.js: 
  - static async get: Did not throw a return statement. I've gone ahead and added one.

- routes/users.js:
  - The DELETE route did not have an await promise.