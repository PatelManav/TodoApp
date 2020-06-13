const { mysqlConnection } = require("../connect.js");
var { application } = require("../connect.js");

application.put("/updateTodo", (request, response) => {
  const todo_id = request.body.todo_id;
  const user_id = request.body.user_id;
  const name = request.body.name;
  var message = {
    data: "",
  };
  mysqlConnection.query(
    "UPDATE user_1 SET todo_id = ? WHERE user_id = ? AND name = ?",
    [todo_id, user_id, name],
    (err, rows, field) => {
      if (!err) message.data = "1 row(s) updated successfully.";
      else message.data = "error occured";
      response.json(message);
    }
  );
});
