<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [SampleRest](#samplerest)
  - [Design](#design)
  - [Flow](#flow)
  - [Setup](#setup)
  - [Run](#run)
  - [Test](#test)
  - [Unit Tests](#unit-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# SampleRest

This is a sample REST API server. By default, server listens on PORT 3001. If you want to override then set/export REST_PORT to the desired port before you launch the server

## Design
```
server.js - serves all the request being sent to http://localhost:<port>
lib/Cache.js - In memory persistence. This saves the incoming data (through POST) into a JSON Array. The data is persisted only until the server is running and gets wiped off when the server is stopped
lib/DataValidator.js - Validates the req.path (the Object ex: Customer) and the http method/verb against the model/swaggerData.json
lib/deleteData.js - Handles the /DELETE calls - deleteAll and deleteById
lib/getData.js - Handles the /GET calls - getAll and getById
lib/updateData.js - Handles the /PUT calls - updateById
```
## Flow
```
1. When the server is started and the chosen call comes to the appropriate server/app.<verb> function
2. The server/app.<verb>, then makes a call to lib/<verb>Data.js
3. The lib/<verb>Data.js makes a call to lib/DataValidator.js to validate the object and the verb for its support against the model/swaggerData.json
If the object and the verb is supported then:
  a. The approriate Cache.<verbRelatedMethod> is called to retrieve/persists the data and the message is sent back to server
Else
  b. A false is sent to back to server  
```
## Setup 
Run `npm install`

## Run
Before running the code, please make sure you have run `npm install`
`node server.js`

## Test 
Either use CURL commands or Rest client like POSTMAN

POST http://localhost:3001 accepts and returns a JSON</br>
GET http://localhost:3001 returns `You have hit GET !`</br>
PUT http://localhost:3001 returns `This is PUT`</br>
DELETE http://localhost:3001 returns `This is Delete`

## Unit Tests
The test folder contains the UTs for server.js. Run the same using `npm test` command
