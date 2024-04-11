import express from "express";
import userRouter from "./routes/user.routes";
import movieRoutes from "./routes/movie.routes";

const app = express();

app.use(express.json()); //this is a middelwere
app.use("/user", userRouter);
app.use("/movie", movieRoutes);
export default app;
