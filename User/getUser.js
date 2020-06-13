const { mysqlConnection } = require("../connect.js");
var { application } = require("../connect.js");

application.post("/getUser/:user_id", (request, response) => {
  const user_id = request.params.user_id;
  mysqlConnection.query(
    "SELECT user_1.name, todo.task WHERE user_1.user_id = ? AND user_1.todo_id = todo.todo_id",
    [user_id],
    (err, rows, field) => {
      if (!err) reqponse.json(rows);
      else console.log(err);
    }
  );
});

application.post("/getUsers", (request, response) => {
  const user_id = request.body.user_id;

  mysqlConnection.query(
    "SELECT user_1.name, todo.task WHERE user_1.user_id = ? AND user_1.todo_id = todo.todo_id",
    [user_id],
    (err, rows, field) => {
      if (!err) reqponse.json(rows);
      else console.log(err);
    }
  );
});
