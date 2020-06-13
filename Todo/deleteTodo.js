const { mysqlConnection } = require("../connect.js");
var { application } = require("../connect.js");

application.delete("/deleteTodo", (request, response) => {
  const todo_id = request.body.todo_id;
  const user_id = request.body.user_id;
  const name = request.body.name;
  var message = {
    data: "",
  };
  mysqlConnection.query(
    "UPDATE user_1, todo SET user_1.todo_id = NULL WHERE user_id = ? AND name = ?",
    [user_id, name],
    (err, rows, field) => {
      if (!err) message.data = "1 row(s) updated successfully.";
      else message.data = "error occured";
      response.json(message);
    }
  );
  mysqlConnection.query(
    "DELETE FROM todo WHERE todo_id = ?",
    [todo_id],
    (err, rows, field) => {
      if (!err) message.data = "1 row(s) deleted successfully.";
      else message.data = "error occured";
      response.json(message);
    }
  );
});
