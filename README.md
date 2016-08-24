<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [SampleRest](#samplerest)
  - [Setup](#setup)
  - [Run](#run)
  - [Test](#test)
  - [Unit Tests](#unit-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# SampleRest

This is a sample REST API server. By default, server listens on PORT 3001. If you want to override then set/export REST_PORT to the desired port before you launch the server


## Setup 
Run `npm install`

## Run
`node server.js`

## Test 
Either use CURL commands or Rest client like POSTMAN

POST http://localhost:3001 accepts and returns a JSON</br>
GET http://localhost:3001 returns `You have hit GET !`</br>
PUT http://localhost:3001 returns `This is PUT`</br>
DELETE http://localhost:3001 returns `This is Delete`

## Unit Tests
The test folder contains the UTs for server.js. Run the same using `npm test` command
