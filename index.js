import express from "express";
import path from "path";
import { connection } from "./config/index.js";

/**Creating the express app */
const app = express();
const port = +process.env.PORT || 3000;
const router = express.Router();

/**Middleware */
app.use(router, express.static("./static"));

/**Endpoint (where the user is headed)*/
router.get("^/$|/eShop", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
