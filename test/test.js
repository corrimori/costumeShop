const app = require('../app')
const chai = require('chai')
const expect = chai.expect
const costumes = require('../src/models/costumes')
const config = require('../knexfile').test
chai.use(require('chai-as-promised'))

describe('costumeShop', () => {
  before(() => {
    const tempConnection = require('knex')({
      client: 'pg',
      connection: config.connection  // localhost??
    })
    return tempConnection
      .raw(`CREATE DATABASE ${config.connection.database};`)
      .catch(err => {
        // console.log(err)
        Promise.resolve('Everything is OK')
      })
      .then(() => (global.knex = require('../queries/db')))
      .then(() => knex.migrate.rollback())
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
    })

    describe('#get all costumes()', () => {
      it('should return a list of all costumes', () => {
        return costumes.getAllCostumes().then( result => {
          let costume = result[0]

          expect(result.length).to.equal(6)
          expect(costume.name).to.be.ok
          //expect(costume.name).to.equal('Disco Outfit')
        })
      })
    })

    describe('#get one costume()', () => {
      it('should return 1 costume from the database', () => {
        return costumes.getCostumeById(4).then( result => {
          expect(result.length).to.equal(1)

          const row = result[0]
          expect(row.id).to.be.ok
          expect(row.name).to.be.ok
          expect(row.price).to.be.ok
          expect(row.description).to.be.ok
        })
      })
    })

    describe('#post a costume()', () => {
      it('should post 1 costume to database', (done) => {
        return costumes.createCostume().then( result => {
          expect(result.length).to.equal()
        })
      })
    })


// it('Should post to user/name/:name', function(done){
//   chai.request('http://localhost:3000')
//     .get('/user/name/Britney')
//     .end((err, res) => {
//         res.should.have.status(200);
//
//         exp(res).to.be.a('object');
//
//         let $ = cheerio.load(res.text);
//         let textid = $('#textid').val(); //the id of my id field
//
//         exp(textid).to.have.equal('a0ece5db-cd14-4f21-812f-966633e7be86'); //true
//         done();
//       });
// });



  })
