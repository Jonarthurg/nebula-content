// pg - node-postgres
// https://node-postgres.com/api/pool
const Pool = require('pg').Pool;

const pool = new Pool({
  user: "tefedelrosario-bell",
  host: "127.0.0.1",
  // database: "music",
  database: "airplanes",
  password: "postgres",
  port: 5432
});

// Our logic for getting data back from postgres
const getPlanes = (request, response) => {
  pool.query('SELECT * FROM plane', (error, result) => {
    if(error){
      throw error;
    }
    response.status(200).json(result.rows);
  });
}

const addPlanes = (request, response) => {
  console.log(request.body, "<--- request.body")
  const { planecod, name, modelcod } = request.body;

  pool.query(
    `INSERT INTO plane (planecod, name, modelcod) VALUES ($1, $2, $3)`,
    [planecod, name, modelcod],
    (error, results) => {
      if(error){
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getPlanes: getPlanes,
  addPlanes: addPlanes
};