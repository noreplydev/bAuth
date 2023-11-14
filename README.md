# B-Auth
B-Auth is a repo for a simple authentication system using Node.js, Express, and MongoDB. We will be using Bearer Tokens for authentication. This is a simple project to help you understand how basic authentication works.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You will need to have Node.js and MongoDB installed on your machine.If you don't have MongoDB installed in your computer you can use a cloud service like [Railway](https://railway.app/) to connect to a Mongo database.

### Installing
1. Clone the repo
```
git clone https://github.com/sanchez-cristian/b-auth.git
```

2. Install NPM packages
```
npm install
```
3. Edit the .env file with the mongoDB connection string, the port you want to use and the secret key for the JWT.

4. Run the server
If you want to run the server in development mode:
```
npm run dev
```
If you want to run the server in production mode:
```
npm start
```
5. Open the browser and go to http://localhost:port


### Usage
1. Register a user. 
```
JSON BODY: [name, username, password]
REQUEST: POST /register HTTP/1.1 
RESPONSE: 201 Created || 400 Bad Request
```

2. Login a user.
```
JSON BODY: [username, password]
REQUEST: POST /login HTTP/1.1 
RESPONSE: 201 Created + Bearer Token || 400 Bad Request
```

3. Main route (protected route).
```
REQUEST HEADER: [Authorization: Bearer Token]
REQUEST: GET / HTTP/1.1 
RESPONSE: 200 OK || 401 Unauthorized || 400 No token provided
```

## Built With
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Express](https://expressjs.com/) - Web framework for Node.js
* [MongoDB](https://www.mongodb.com/) - Database
* [Mongoose](https://mongoosejs.com/) - MongoDB ODM for Node. 

## Author

**Cristian Sanchez** 

[Portfolio](https://cristian-sanchez.me)
[LinkedIn](https://www.linkedin.com/in/cristian-sanchez-dev)
