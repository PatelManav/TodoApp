const { mysqlConnection } = require("../connect.js");
var { application } = require("../connect.js");

application.put("/updateUser", (request, response) => {
  const todo_id = request.body.todo_id;
  const user_id = request.body.user_id;
  const name = request.body.name;
  var message = {
    data: "",
  };
  mysqlConnection.query(
    "UPDATE user_1 SET todo_id = ?, name = ? WHERE user_id = ?",
    [todo_id, name, user_id],
    (err, rows, field) => {
      if (!err) message.data = "1 row(s) have been updated successfully.";
      else message.data = "error occured";
      response.json(message);
    }
  );
});
