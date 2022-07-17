const { Pool } = require('pg');

const PG_URI = 'postgres://ktdqjvon:IARvGvV0DY66-aNvuR0GZ04S9tTfBMUS@hansken.db.elephantsql.com/ktdqjvon';

const pool = new Pool({
  connectionString: PG_URI
});



module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};