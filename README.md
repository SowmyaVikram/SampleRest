# SampleRest

This is a simple REST API server. By default, server listens on PORT 3001. If you want to override then set/export REST_PORT to the desired port before you launch the server

Setup and Test</br>
To setup - </br>
Run `npm install`

To test -
Either use CURL commands or Rest client like POSTMAN

POST http://localhost:3001 accepts and returns a JSON</br>
GET http://localhost:3001 returns `You have hit GET !`</br>
PUT http://localhost:3001 returns `This is PUT`</br>
DELETE http://localhost:3001 returns `This is Delete`

Run
`node server.js`
