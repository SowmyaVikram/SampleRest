var request = require('supertest');
describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('./../server').app;
    });
    afterEach(function () {

    });
    it('responds to GET on /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('200 for everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(200, 'You can send any request but you can expect only this !', done);
    });
    it('responds to PUT on /', function testSlash(done) {
        request(server)
            .put('/')
            .expect(200, 'This is PUT', done);
    });
    it('responds to DELETE on /', function testSlash(done) {
        request(server)
            .delete('/')
            .expect(200, 'This is Delete',  done);
    });
    it('responds to POST /', function testSlash(done) {
        var postData = {
            "Reuqest": "POST",
            "RESPONSE": "request Body"
        };
        request(server)
            .post('/')
            .set('Accept', 'application/json').send(postData)
            .expect(200, 'You have hit POST with {"Reuqest":"POST","RESPONSE":"request Body"}', done);
    });
});