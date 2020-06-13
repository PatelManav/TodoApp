const { mysqlConnection } = require("../connect.js");
var { application } = require("../connect.js");

application.post("/createUser", (request, response) => {
  const user_id = request.body.user_id;
  const name = request.body.name;
  const todo_id = request.body.todo_id;
  var message = {
    data: "",
  };
  mysqlConnection.query(
    "INSERT INTO user_1 VALUES(?,?,?)",
    [user_id, name, todo_id],
    (err, rows, field) => {
      if (!err) message.data = "Row inserted successfully.";
      else message.data = "error occured";
      response.json(message);
    }
  );
});
