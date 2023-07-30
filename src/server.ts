import {createApplication} from "./app";

const app = createApplication();

const options = {
  port: parseInt(process.env.PORT) || 8000,
};

app.listen(options, (err, addr) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Server running at", addr);
});
