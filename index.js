import { userRouter, express } from "./controller/UserController.js";
import path from "path";
import { productRouter } from "./controller/ProductController.js";

/**Creating the express app */
const app = express();
const port = +process.env.PORT || 4000;
const router = express.Router();

/**Middleware */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");

  next();
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use(
  router,
  express.static("./static"),
  express.json(),
  express.urlencoded({ extended: true })
);

/**Endpoint*/
router.get("^/$|/Node EOMP", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"));
});

router.get("*", (req, res) => {
    res.json({
      status: 404,
      message: "Resource not found",
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
