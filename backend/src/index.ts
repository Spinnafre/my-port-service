import express from "express";
import cors from "cors";

const app = express();

const port = 8080;

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", port);

app.use(
  cors({
    origin: "*",
  })
);

router.get("/health", (req, res) => {
  console.log("[Request] - /health");
  return res.status(200).json({
    message: "Show man",
  });
});

app.use(router);

app.listen(app.get("port"), () => {
  console.log(`Server listening in http://localhost:${app.get("port")}`);
});

process.on("exit", (code) => {
  console.log("Finishing app with code ", code);
});
