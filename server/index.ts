const process = require("process");
import { app } from "./app";
import http from "http";

const port = process.env.PORT || 3000;

const server = http.createServer(app);

try {
  server.listen(port);
  server.on("listening", () => {
    console.log(`server started at http://localhost:${port}`);
  });
} catch (error) {
  console.log(error);
}

process.stdin.resume(); // so the program will not close instantly

function exitHandler(options: any) {
  if (options.exit) process.exit();
}
server.on("error", e => {
  // do something when app is closing
  process.on("exit", exitHandler.bind(null));

  // catches ctrl+c event
  process.on("SIGINT", exitHandler.bind(null));

  // catches "kill pid" (for example: nodemon restart)
  process.on("SIGUSR1", exitHandler.bind(null));
  process.on("SIGUSR2", exitHandler.bind(null));

  // catches uncaught exceptions
  process.on("uncaughtException", exitHandler.bind(null));
});
