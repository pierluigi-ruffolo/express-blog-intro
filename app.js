import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

app.listen(port, () => {
  console.log(`server avviato sulla porta ${port}`);
});
