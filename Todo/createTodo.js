const { mysqlConnection } = require("../connect.js");
var { application } = require("../connect.js");

application.post("/createTodo", (request, response) => {
  const todo_id = request.body.todo_id;
  const task = request.body.task;
  var message = {
    data: "",
  };
  mysqlConnection.query(
    "INSERT INTO todo VALUES(?,?)",
    [todo_id, task],
    (err, rows, field) => {
      if (!err) message.data = "Row inserted successfully.";
      else message.data = "error occured";
      response.json(message);
    }
  );
});
