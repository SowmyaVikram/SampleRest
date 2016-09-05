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
            .get('/customer')
            .expect(200, {}, done);
    });
    it('responds to PUT on /', function testSlash(done) {
        request(server)
            .put('/')
            .expect(200, {}, done);
    });
    it('responds to DELETE on /', function testSlash(done) {
        request(server)
            .delete('/')
            .expect(404, {},  done);
    });
    it('responds to POST /', function testSlash(done) {
        var postData = {
            "id": 1,
            "name": "test"
        };
        request(server)
            .post('/customer')
            .set('Accept', 'application/json').send(postData)
            .expect(200, {}, done);
    });
});