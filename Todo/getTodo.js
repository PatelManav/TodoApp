const { mysqlConnection } = require("../connect.js");
var { application } = require("../connect.js");

////// 1st way
application.get("/getTodo/:user_id", (request, response) => {
  mysqlConnection.query(
    "SELECT user_1.name, todo.task FROM user_1, todo WHERE user_1.user_id = ? AND user_1.todo_id = todo.todo_id",
    [request.params.user_id],
    (err, rows, field) => {
      if (!err) response.send(rows);
      else console.log(err);
    }
  );
});

////// 2nd way
application.get("/getTodos", (request, response) => {
  mysqlConnection.query("SELECT * FROM todo", (err, rows, field) => {
    if (!err) response.send(rows);
    else console.log(err);
  });
});
