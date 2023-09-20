import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { createNewMateRoute } from "./routes/routes";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(createNewMateRoute);

app.listen({ port: 3333 }).then(() => {
  console.log("Http Server Running 🚀🚀");
});
