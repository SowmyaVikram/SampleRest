<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [SampleRest](#samplerest)
  - [Design](#design)
  - [Flow](#flow)
  - [Setup and Run](#setup-and-run)
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
The Cache is preloaded with following data during app startup:
customer: [{
	"id": 1,
	"name": "Tom",
	"email": "tom@gmail"
}], employee: [{
	"id": 1,
	"name": "Harry",
	"email": "harry@gmail"
}]

1. When the server is started and API call is made to the server, the call is routed to one of the handlers (postData.js pr getData.js)based on the http method called.
2. Validations are done against the incoming URL, object/method supported and necessary acton is taken. The dataValidator.js parses the swagger json and initializes itself.
3. Once validations are done, the code interacts with the persistence layer (in memory) to save or retrieve data. The cache.js is used for the same
4. If none of the conditions are met, necessary error messages are thrown back
```
## Setup and Run
```
Clone the repository and then run the following commands in the same order:

1. npm install
2. node server.js
```
## Test 
Either use CURL commands or Rest client like POSTMAN
```
GET on http://localhost:3001 - Lists the objects supported
GET on http://localhost:3001/customer - Lists all the data for Customer object
GET on http://localhost:3001/customer/{id} - Lists all the data for Customer with {id}
POST on http://localhost:3001/customer  - Adds an entry into in-memory cache for Customer
PUT on http://localhost:3001/customer/{id} - Updates the Customer with {id}
DELETE on http://localhost:3001/customer/{id} - Deletes the Customer with {id}
DELETE on http://localhost:3001/customer - Deletes all the data for Customer object
```

## Unit Tests
The test folder contains the UTs for server.js. Run the same using `npm test` command
