import app from "./server";
import config from "./config/config";
import connect from "./db/db";

const PORT = config.app.PORT;

connect().then(() => {
  app.listen(PORT, () => console.log(`Port: ${PORT} and is connected to db`));
});
