import app from "./server";
import config from "../src/config/config";
import connect from "./db/db";

//?En este archivo, definimos las rutas para manejar operaciones relacionadas con el usuario utilizando los métodos de controlador correspondientes.

console.log(config);

const PORT = config.app.PORT;

connect().then(() => {
  app.listen(PORT, () =>
    console.log(
      `Server is running on port ${PORT} and is connected to database`
    )
  );
});
