const { mysqlConnection } = require("../connect.js");
var { application } = require("../connect.js");

application.delete("/deleteUser", (request, response) => {
  const user_id = request.body.user_id;
  var message = {
    data: "",
  };
  mysqlConnection.query(
    "DELETE FROM user_1 WHERE user_id = ?",
    [user_id],
    (err, rows, field) => {
      if (!err) message.data = "1 row(s) has been deleted successfully.";
      else message.data = "error occured";
      response.json(message);
    }
  );
});
