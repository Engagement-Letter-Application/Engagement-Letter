// const expect = require('chai').expect;
// const request = expect.request;
// const port = process.env.PORT = 5000;
// // const app = require(__dirname + '/../server');
// const setup = require(__dirname + '/test_setup');
// // const teardown = require(__dirname + '/test_teardown');
//
//
// describe('default server routes', () => {
//   before((done) => {
//     setup(done);
//   });
//   it('should 404 on bad routes', (done) => {
//     request('localhost:' + port)
//     .get('/badroute')
//     .end((err, res) => {
//       expect(err.toString()).to.eql('Error: Not Found');
//       expect(res).to.have.status(404);
//       expect(res.text).to.eql('Page not found!');
//       done();
//     });
//   });
// });
