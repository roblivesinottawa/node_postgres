const { Client } = require("pg");

const client = new Client({
  user: "robson",
  host: "localhost",
  database: "testdb",
  password: "Robisageek2021",
  port: 5432,
});

client.connect();

const query = `
    CREATE TABLE users (
        email varchar,
        firstName varchar,
        lastName varchar,
        age int
    );
`;
// client.query(query, (err, res) => {
//   if (err) {
//     console.error(error);
//     return;
//   }
//   console.log("Table is successfully created!");
//   client.end();
// });

client
  .query(query)
  .then((res) => console.log("Table is successfully created!"))
  .catch((error) => console.error(error))
  .finally(() => client.end());
